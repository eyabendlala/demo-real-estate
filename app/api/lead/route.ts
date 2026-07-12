import { NextResponse } from 'next/server';
import { WP_API_BASE } from '@/lib/wordpress';

async function fetchLiveWpNonce(): Promise<string> {
  try {
    const res = await fetch(`${WP_API_BASE}/property/studio-in-denver/`, { next: { revalidate: 300 } });
    if (!res.ok) return '3868b60165';
    const html = await res.text();
    const match = html.match(/id="agent_property_ajax_nonce"\s+value="([a-f0-9]+)"/i) ||
                  html.match(/agent_property_ajax_nonce.*?value="([a-f0-9]+)"/i);
    return match ? match[1] : '3868b60165';
  } catch (err) {
    return '3868b60165';
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, propertyTitle, propertyId = '21715', agentId = '55' } = body;

    const liveNonce = await fetchLiveWpNonce();

    const ajaxParams = new URLSearchParams({
      action: 'wpestate_ajax_agent_contact_form',
      name: name || 'Website Visitor',
      contact_name: name || 'Website Visitor',
      email: email || 'visitor@example.com',
      phone: phone || '',
      comment: `${message || 'Interested in property.'} [Property: ${propertyTitle || 'General Inquiry'}]`,
      propid: String(propertyId),
      prop_id: String(propertyId),
      agent_id: String(agentId),
      nonce: liveNonce,
      contact_ajax_nonce: liveNonce,
    });

    const response = await fetch(`${WP_API_BASE}/wp-admin/admin-ajax.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: ajaxParams.toString(),
    });

    const rawText = await response.text();
    console.log('WPResidence AJAX Raw Response:', rawText);

    let parsed: any = null;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = { rawText };
    }

    if (rawText === '0' || rawText.includes('No naughty business')) {
      return NextResponse.json(
        { success: false, error: 'WordPress rejected submission', details: rawText },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: parsed?.response || 'The message was sent!',
        data: parsed,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in /api/lead POST handler:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process lead submission' },
      { status: 500 }
    );
  }
}
