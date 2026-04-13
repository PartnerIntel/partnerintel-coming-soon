import { useState, useEffect, useRef } from "react";

// ─── Sea Glass Design Tokens ────────────────────────────────────────────────
const C = {
  bg: "#FFFFFF", bgAlt: "#F7FAF9", sea: "#6BA8A0", seaDark: "#4E8A82",
  seaLight: "#D4E8E4", seaPale: "#EDF5F3", text: "#1A2B2A", textSec: "#5F7A77",
  textTer: "#9BB0AD", border: "#DDE8E5", borderLight: "#EEF3F1",
  success: "#4CAF82", warning: "#E8A838", error: "#D4574E", premium: "#7C6BB1",
};
const F = "'Plus Jakarta Sans', sans-serif";
const S = "'Fraunces', serif";
const M = "'JetBrains Mono', monospace";

// ─── Feature Pill ───────────────────────────────────────────────────────────
function FeaturePill({ label, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "10px 20px", borderRadius: 40,
      background: C.bg, border: `1.5px solid ${C.border}`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }}>
      <div style={{
        width: 6, height: 6, borderRadius: "50%",
        background: C.sea,
      }} />
      <span style={{
        fontSize: 13, fontWeight: 600, color: C.text,
        fontFamily: F, letterSpacing: 0.1,
      }}>{label}</span>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ComingSoon() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const FEATURES = [
    "Transparent Rate Cards",
    "Market Benchmarks",
    "Smart Discover",
    "Deal Pipeline",
    "Auto-Generated Contracts",
    "E-Signature Flow",
    "Events Marketplace",
    "Split Inbox Messaging",
    "Campaign Briefs",
    "Creator Analytics",
  ];

  return (
    <div style={{ fontFamily: F, background: C.bg, minHeight: "100vh", overflow: "hidden" }}>
      {/* ── Background texture ─────────────────────────────────── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, ${C.seaPale} 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 85% 80%, ${C.seaPale}88 0%, transparent 50%),
          radial-gradient(ellipse 40% 40% at 50% 50%, ${C.bgAlt} 0%, transparent 70%),
          ${C.bg}
        `,
      }} />

      {/* ── Nav ────────────────────────────────────────────────── */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 1080, margin: "0 auto", padding: "28px 24px 0",
        opacity: heroVisible ? 1 : 0,
        transform: heroVisible ? "translateY(0)" : "translateY(-8px)",
        transition: "all 0.6s ease 0.05s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logo mark */}
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: `linear-gradient(135deg, ${C.sea} 0%, ${C.seaDark} 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 2px 8px ${C.sea}33`,
          }}>
            <span style={{
              fontFamily: M, fontWeight: 700, fontSize: 15, color: "#fff",
              letterSpacing: -0.5,
            }}>Pi</span>
          </div>
          <span style={{
            fontFamily: S, fontWeight: 700, fontSize: 20, color: C.text,
            letterSpacing: -0.3,
          }}>PartnerIntel</span>
        </div>
        <div style={{
          fontSize: 12, fontWeight: 600, color: C.sea,
          fontFamily: M, letterSpacing: 0.5, textTransform: "uppercase",
        }}>
          Private Beta
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 5,
        maxWidth: 720, margin: "0 auto",
        padding: "100px 24px 72px", textAlign: "center",
      }}>
        {/* Tagline badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: C.bg, border: `1.5px solid ${C.border}`,
          borderRadius: 40, padding: "7px 18px", marginBottom: 28,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.6s ease 0.2s",
          boxShadow: "0 1px 4px rgba(26,43,42,0.04)",
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: C.success, boxShadow: `0 0 6px ${C.success}55`,
          }} />
          <span style={{
            fontSize: 12, fontWeight: 600, color: C.textSec,
            fontFamily: F, letterSpacing: 0.3,
          }}>Launching Soon</span>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700, fontFamily: S,
          color: C.text, margin: "0 0 20px", lineHeight: 1.1,
          letterSpacing: -1,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s ease 0.3s",
        }}>
          Fair Deals.{" "}
          <span style={{ color: C.sea }}>Real Data.</span>
          <br />Transparent Rates.
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", color: C.textSec,
          margin: "0 auto", maxWidth: 520, lineHeight: 1.7,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.7s ease 0.45s",
        }}>
          The marketplace where creators, athletes, and models set rates backed
          by market data -- and businesses discover the right talent at fair prices.
        </p>
      </section>

      {/* ── Two-sided value prop ───────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 5,
        maxWidth: 880, margin: "0 auto", padding: "0 24px 72px",
      }}>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            {
              title: "For Creators, Athletes & Models",
              points: [
                "Set your own rates with market data behind them",
                "See where you land: Below Market, Fair, Strong, or Premium",
                "Get discovered by brands searching by category, platform, and reach",
                "Manage deals from first contact through payment",
              ],
            },
            {
              title: "For Businesses",
              points: [
                "Discover talent with transparent pricing -- no guesswork",
                "Compare creators side-by-side on reach, rates, and cost efficiency",
                "Send proposals, negotiate, and sign contracts in one flow",
                "Post events and build campaign briefs with built-in structure",
              ],
            },
          ].map((side, si) => (
            <div key={si} style={{
              flex: "1 1 380px",
              background: C.bg, borderRadius: 16,
              border: `1.5px solid ${C.border}`,
              padding: "32px 28px",
              boxShadow: "0 1px 4px rgba(26,43,42,0.03), 0 6px 20px rgba(26,43,42,0.04)",
            }}>
              <h3 style={{
                fontSize: 18, fontWeight: 700, fontFamily: S,
                color: C.text, margin: "0 0 20px", letterSpacing: -0.3,
              }}>{side.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {side.points.map((p, pi) => (
                  <div key={pi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 6,
                      background: C.seaPale, border: `1px solid ${C.seaLight}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke={C.seaDark} strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{
                      fontSize: 14, color: C.textSec, lineHeight: 1.55,
                    }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature pills ──────────────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 5,
        maxWidth: 800, margin: "0 auto", padding: "0 24px 80px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: 24, fontWeight: 700, fontFamily: S,
          color: C.text, margin: "0 0 8px", letterSpacing: -0.3,
        }}>What's launching</h2>
        <p style={{
          fontSize: 14, color: C.textTer, margin: "0 0 28px",
        }}>Every feature built and ready for beta.</p>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center",
        }}>
          {FEATURES.map((f, i) => (
            <FeaturePill key={f} label={f} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 5,
        maxWidth: 600, margin: "0 auto",
        padding: "56px 24px",
        textAlign: "center",
        borderTop: `1px solid ${C.borderLight}`,
      }}>
        <div style={{
          fontSize: 28, fontWeight: 700, fontFamily: S,
          color: C.text, margin: "0 0 12px", letterSpacing: -0.5,
          lineHeight: 1.2,
        }}>
          The partnership marketplace,
          <br />
          <span style={{ color: C.sea }}>built the right way.</span>
        </div>
        <p style={{
          fontSize: 15, color: C.textSec, margin: "0 0 28px",
          lineHeight: 1.6,
        }}>
          Private beta opening soon. Be among the first to set your rates,
          discover talent, and close deals with real data behind every number.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "inline-block", padding: "13px 32px", borderRadius: 10,
            background: "transparent", color: C.sea,
            border: `1.5px solid ${C.sea}`,
            fontSize: 14, fontWeight: 700, fontFamily: F,
            textDecoration: "none", letterSpacing: 0.2,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = C.seaPale;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
          }}
        >
          Back to top
        </a>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer style={{
        position: "relative", zIndex: 5,
        textAlign: "center", padding: "32px 24px 40px",
      }}>
        <div style={{
          fontSize: 12, color: C.textTer, lineHeight: 1.8,
        }}>
          <span style={{ fontFamily: M, fontWeight: 600, letterSpacing: 0.3 }}>
            partnerintel.org
          </span>
          <br />
          Fair Deals. Real Data. Transparent Rates.
          <br />
          <span style={{ opacity: 0.7 }}>
            {new Date().getFullYear()} PartnerIntel. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
