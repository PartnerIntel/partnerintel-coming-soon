# PartnerIntel -- Coming Soon
Pre-beta landing page for [partnerintel.org](https://partnerintel.org).
## Local Development
```bash
npm install
npm run dev
```
## Deploy to Vercel
```bash
npx vercel
```
Then add `partnerintel.org` as a custom domain in the Vercel dashboard.
### DNS Records (at your registrar)
| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 76.76.21.21              |
| CNAME | www  | cname.vercel-dns.com     |
Keep existing Google MX and TXT records intact.
## When Beta Opens
Replace this project with the full PartnerIntel app and redeploy to the same Vercel project.
