# Denver Real Estate Portal — Node.js & Live WordPress API

A clean, professional white-background real estate portal built with **Next.js 16 (App Router + TypeScript + Tailwind CSS)** connected directly to a live WordPress API instance.

---

## Key Features

- **100% English Interface**: All labels, titles, buttons, and navigation are in English.
- **Clean Professional Portal Theme**: Crisp white background, subtle gray borders, standard real estate portal layout (similar to Zillow / Redfin).
- **Live WordPress API Connection**: Fetches real property listings from `https://indigo-ram-908666.hostingersite.com/wp-json/wp/v2/estate_property` using authenticated credentials.
- **Strict 2-Column Property Detail Page**:
  - **Left Column (Main Content)**: White background card displaying the Title, Price, Description, Address, and Property Details (Bedrooms, Bathrooms, Size).
  - **Right Column (Sidebar)**: Clean vertical card featuring the **'Request Info'** contact form with inputs for Name, Email, Phone, Message, and a **'Send'** button.

---

## Running Locally

```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the property listings.
