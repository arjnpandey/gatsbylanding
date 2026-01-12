# Castle Labs Website

A minimal Next.js site for Castle Labs / Gatsby.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Deploy (Vercel auto-detects Next.js)

Your site will be live at `your-project.vercel.app`

## Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repo
4. Build command: `npm run build`
5. Publish directory: `out`

## Deploy Manually

```bash
npm run build
```

Upload the `out` folder to any static hosting (GitHub Pages, S3, etc.)

## Project Structure

```
castle-labs-site/
├── src/pages/
│   ├── _app.jsx        # Global styles
│   ├── index.jsx       # Main landing page
│   └── whitepaper.jsx  # Whitepaper page
├── public/             # Static assets (add favicon here)
├── package.json
├── next.config.js
└── README.md
```

## Custom Domain

On Vercel/Netlify, add your domain in the project settings. Point your DNS:
- A record: `76.76.21.21` (Vercel) or check Netlify
- Or CNAME: `cname.vercel-dns.com`
