# Bookstore App

Nextjs playground

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

If running into

```
npx create-next-app@latest ./ --ts --use-npm
npm error code UNABLE_TO_GET_ISSUER_CERT_LOCALLY
npm error errno UNABLE_TO_GET_ISSUER_CERT_LOCALLY
npm error request to https://registry.npmjs.org/create-next-app failed, reason: unable to get local issuer certificate
npm error A complete log of this run can be found in: /Users/akim/.npm/_logs/2025-02-19T18_53_22_675Z-debug-0.log
```

disable ssl verification

`npm config set strict-ssl false`