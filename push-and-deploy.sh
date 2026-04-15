#!/usr/bin/env bash
set -euo pipefail

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PartnerIntel Coming Soon — Push & Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── Step 1: Create GitHub repo + push ────────────────────────────
echo "-> Creating GitHub repo and pushing..."
gh repo create PartnerIntel/partnerintel-coming-soon --public --source=. --remote=origin --push 2>/dev/null || {
  echo "   (repo may already exist, trying push...)"
  git remote add origin https://github.com/PartnerIntel/partnerintel-coming-soon.git 2>/dev/null || true
  git push -u origin main
}

echo ""
echo "✓ Pushed to GitHub"
echo ""

# ── Step 2: Deploy to Vercel ─────────────────────────────────────
echo "-> Deploying to Vercel..."
npx vercel --prod --yes

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✓ Deploy complete!"
echo ""
echo "  Next: Add partnerintel.org as a custom"
echo "  domain in the Vercel dashboard."
echo ""
echo "  DNS Records (at your registrar):"
echo "    A     @    76.76.21.21"
echo "    CNAME www  cname.vercel-dns.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
