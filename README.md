# VKQAV Expert Essential Service Ltd: Frontend

React (Vite) + Tailwind CSS + Lucide React. Frontend only, no backend.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Routes built

| Path | Page |
| --- | --- |
| `/services/procurement-catering` | Procurement & Catering |
| `/services/facility-maintenance` | Facility Management & Maintenance |
| `/services/real-estate-logistics` | Real Estate & Logistics |

`/services` redirects to Procurement & Catering. Every other route (Home, About, Contact, Quote, Domestic & Family Care) shows a "coming soon" fallback so nav links never dead-end.

## Structure

- `src/components/`: Navbar (utility bar, dropdown, mobile drawer), Footer, ServiceLayout, QuoteMiniForm, HowItWorks, CtaBanner, WhatsAppButton, PlaceholderImage, Logo
- `src/data/site.js`: phone, email, address, WhatsApp link, nav and footer links
- `src/data/services.js`: all page content; edit copy here
- `src/pages/`: thin wrappers around ServiceLayout

## Swapping in real photos

Pass a `src` to `PlaceholderImage` (or add an `image` field in `services.js` and forward it in `ServiceLayout`).

## To fill in

- Real phone number and WhatsApp number (`src/data/site.js`)
- CAC RC number in the footer
- Hook `QuoteMiniForm` `onSubmit` to an API when a backend exists
