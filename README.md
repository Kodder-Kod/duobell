# Duo-Bell Structures Ltd — Website

A 4-page marketing site (Home, About Us, Services, Contact Us) built from
the Duo-Bell Structures Ltd company profile, using **Next.js (App Router)**,
**JavaScript** (no TypeScript) and **Tailwind CSS**.

## Design direction

- **Palette:** ink black, brand crimson red, safety amber, concrete grey and
  off-white paper — pulled from the logo and brochure.
- **Type:** Oswald (condensed display headings), Inter (body), JetBrains
  Mono (labels / spec-sheet data), all loaded via `next/font/google`.
- **Signature motif:** hexagon-cropped photography (echoing the brochure's
  own hexagon photo frames), blueprint corner brackets, and dimension-line
  dividers styled like measurement callouts on a technical drawing.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Before you launch

A few details weren't fully legible in the source brochure (it was clipped
on export), so placeholders were used — please update these:

- **`components/Footer.js`** and **`app/contact/page.js`** — real office
  address, phone number and email address.
- **`app/contact/page.js`** — embed a real Google Map (or map component) in
  place of the placeholder panel.
- **`components/ContactForm.js`** — the form is front-end only; wire
  `handleSubmit` up to your email service, form endpoint, or CRM of choice.
- Add real social links to the footer if you'd like them included.

## Project structure

```
app/
  layout.js         Root layout, fonts, Navbar/Footer
  page.js            Home
  about/page.js       About Us
  services/page.js    Services
  contact/page.js     Contact Us
components/
  Navbar.js, Footer.js, PageHeader.js, CTASection.js,
  Pillars.js, ContactForm.js
public/images/        Photos extracted from the company profile
```
