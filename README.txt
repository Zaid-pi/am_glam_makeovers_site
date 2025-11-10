# AM Glam Makeovers — Static Website (Production Ready)

This package is a static website that is ready for deployment to any static host (Netlify, Vercel, GitHub Pages, or Wix static files).

## What is included
- index.html — main landing page
- styles.css — all styles
- scripts.js — small client-side behaviors
- assets/ — placeholder images used in the demo
- README (this file)

## How to deploy (quick options)
### Netlify (recommended)
1. Create a free Netlify account.
2. Drag & drop the ZIP (am_glam_makeovers_site.zip) into Netlify's Sites dashboard OR push the folder to a Git repo and connect it.
3. In Netlify, set a redirect for pretty URLs (not required for this single-page site).
4. Update the contact form: replace the Formspree action URL in the form (index.html) with your Formspree form endpoint or your backend endpoint.

### Vercel / GitHub Pages
- Push repository to GitHub and connect to Vercel (or enable GitHub Pages in repository settings).

## Important next steps
1. Replace placeholder images in /assets with your professional photos (artist.jpg, hero.jpg, look1.jpg ... look6.jpg).
2. Replace `https://formspree.io/f/FORM_ID` in index.html with your actual Formspree form ID or change the form action to your backend endpoint.
3. Set your Instagram handle in all `your_instagram_handle` spots.
4. Optionally add Google Analytics, SEO meta tags, and an SSL-enabled domain.

## Optional enhancements (I can do these for you)
- Connect the inquiry form to WhatsApp (via API or prefilled link).
- Add serverless email handling (Netlify Functions or AWS Lambda).
- Add booking calendar (Calendly or custom solution).
- Convert to a CMS-driven site (WordPress / Wix / Webflow).