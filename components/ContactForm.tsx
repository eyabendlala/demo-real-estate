'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';

interface ContactFormProps {
  propertyTitle?: string;
}

export default function ContactForm({ propertyTitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle
      ? `I am interested in ${propertyTitle}. Please contact me with more information.`
      : 'I would like more information about your available properties.',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          propertyTitle,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(JSON.stringify(errorData));
      }

      setStatus('success');
    } catch (error: any) {
      console.error('Error submitting CRM lead to WordPress API:', error);
      const msg = error?.message || String(error);
      setErrorMessage(msg);
      setStatus('idle');
      alert(`WordPress API Error: ${msg}`);
    }
  };

  return (
    <div className="portal-card rounded-xl p-6 bg-white shadow-sm border border-gray-200">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900">Request Info</h3>
        <p className="text-xs text-gray-500 mt-1">
          Contact our listing agent for more details or to schedule a private tour.
        </p>
      </div>

      {/* AGENT PROFILE SECTION RIGHT ABOVE FORM FIELDS */}
      <div className="flex items-center gap-3.5 p-3.5 mb-5 rounded-xl bg-gray-50 border border-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
          alt="Maria Barlow"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
        />
        <div>
          <h4 className="text-sm font-bold text-gray-900 leading-tight">Maria Barlow</h4>
          <span className="text-xs font-medium text-gray-500 capitalize block mt-0.5">
            sales executive
          </span>
        </div>
      </div>

      {status === 'success' ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#66bb92] mx-auto" />
          <h4 className="text-base font-bold text-gray-900">Inquiry Sent Successfully</h4>
          <p className="text-xs text-gray-600 max-w-xs mx-auto">
            Thank you for reaching out. Maria Barlow has received your request and will follow up shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <>
          {errorMessage && (
            <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-mono break-all">
              <strong>WordPress API Error:</strong> {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#66bb92] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#66bb92] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(303) 555-0192"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#66bb92] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#66bb92] focus:border-transparent transition-all"
            />
          </div>

          {/* PRIMARY ACTION BUTTON (#bd8a6b terracotta) */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#bd8a6b] hover:bg-[#a67759] text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send</span>
              </>
            )}
          </button>
        </form>
        </>
      )}
    </div>
  );
}
