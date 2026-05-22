import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const COLORS = {
  core: "#22508A",
  slate: "#3A82C4",
  cyan: "#00C2FF",
  white: "#FFFFFF",
  offwhite: "#F8F9FA",
  border: "#E2EAF4",
  textDark: "#0F1A2B",
  textMid: "#3D5270",
  textLight: "#6B7FA3",
};

const styles = {
  root: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    color: COLORS.textDark,
    background: COLORS.white,
    margin: 0,
    padding: 0,
  },
};

/* ── NAV ── */
function Nav() {
  return (
    <nav style={{
      background: COLORS.white,
      borderBottom: `1px solid ${COLORS.border}`,
      padding: "0 20px",
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          fontWeight: 800,
          fontSize: 22,
          color: COLORS.core,
          letterSpacing: "-0.5px",
          cursor: "pointer",
        }}>Vouchr</span>
        <span style={{
          fontSize: 10,
          color: COLORS.textLight,
          fontWeight: 500,
          background: COLORS.offwhite,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 4,
          padding: "2px 6px",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}>by Novaforge Labs</span>
      </Link>
      <a
        href="#register"
        style={{
          background: COLORS.core,
          color: COLORS.white,
          fontSize: 13,
          fontWeight: 600,
          padding: "7px 16px",
          borderRadius: 6,
          textDecoration: "none",
          letterSpacing: "0.2px",
        }}>
        Register
      </a>
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section style={{
      background: COLORS.white,
      padding: "56px 20px 48px",
      maxWidth: 680,
      margin: "0 auto",
    }}>
      {/* District pill */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "#E8F4FF",
        border: `1px solid #BDD9F5`,
        borderRadius: 20,
        padding: "5px 12px",
        marginBottom: 24,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.cyan, display: "inline-block" }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.core, letterSpacing: "0.3px" }}>
          Dantewada · Sukma · Bijapur
        </span>
      </div>

      <h1 style={{
        fontSize: "clamp(30px, 8vw, 48px)",
        fontWeight: 800,
        lineHeight: 1.15,
        color: COLORS.textDark,
        margin: "0 0 16px",
        letterSpacing: "-0.5px",
      }}>
        real people.<br />
        real opportunities.<br />
        <span style={{ color: COLORS.core }}>apne district mein.</span>
      </h1>

      <p style={{
        fontSize: 17,
        color: COLORS.textMid,
        lineHeight: 1.6,
        margin: "0 0 36px",
        maxWidth: 520,
      }}>
        Connecting skill learners, job seekers aur business owners —{" "}
        <strong style={{ color: COLORS.core }}>apne district mein.</strong>
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 340 }}>
        <a
          href="#register"
          style={{
            background: COLORS.core,
            color: COLORS.white,
            textAlign: "center",
            padding: "14px 24px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            letterSpacing: "0.1px",
          }}>
          Register as Individual
        </a>
        <a
          href="#register"
          style={{
            background: COLORS.white,
            color: COLORS.core,
            textAlign: "center",
            padding: "14px 24px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            border: `2px solid ${COLORS.core}`,
            letterSpacing: "0.1px",
          }}>
          Register Your Platform
        </a>
      </div>
    </section>
  );
}

/* ── DIVIDER ── */
function Divider() {
  return <div style={{ height: 1, background: COLORS.border, margin: "0 20px" }} />;
}

/* ── WHAT WE DO ── */
const platforms = [
  {
    code: "SLP",
    label: "Skill Learning Platform",
    desc: "Connect with skill development programs, vocational training institutes, and certified educators active in your district.",
  },
  {
    code: "JR",
    label: "Job Recruitment",
    desc: "Match local job seekers with verified employers, contractors, and government-linked placement opportunities nearby.",
  },
  {
    code: "B",
    label: "Business Network",
    desc: "Discover and connect with local businesses, service providers, and entrepreneurs building within Bastar region.",
  },
];

function WhatWeDo() {
  return (
    <section style={{ padding: "48px 20px", background: COLORS.offwhite }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>What We Do</SectionLabel>
        <h2 style={sectionHeading}>Three platforms. One network.</h2>
        <p style={sectionSub}>Vouchr operates three connected platforms under one district-level network.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
          {platforms.map(p => (
            <div key={p.code} style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.border}`,
              borderLeft: `4px solid ${COLORS.core}`,
              borderRadius: 10,
              padding: "20px 20px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{
                  background: COLORS.core,
                  color: COLORS.white,
                  fontWeight: 800,
                  fontSize: 11,
                  padding: "3px 9px",
                  borderRadius: 4,
                  letterSpacing: "1px",
                }}>{p.code}</span>
                <span style={{ fontWeight: 700, fontSize: 15, color: COLORS.textDark }}>{p.label}</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: COLORS.textMid, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function Step({ num, text }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
      <span style={{
        minWidth: 28,
        height: 28,
        borderRadius: "50%",
        background: COLORS.core,
        color: COLORS.white,
        fontWeight: 700,
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1,
      }}>{num}</span>
      <span style={{ fontSize: 14, color: COLORS.textMid, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
    </div>
  );
}

function HowItWorks() {
  return (
    <section style={{ padding: "48px 20px", background: COLORS.white }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>How It Works</SectionLabel>
        <h2 style={sectionHeading}>Simple. Fast. Local.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
          {/* Individuals */}
          <div style={{
            background: COLORS.offwhite,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "20px 16px",
          }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: COLORS.core, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.8px" }}>
              For Individuals
            </p>
            <Step num={1} text="Fill registration form" />
            <Step num={2} text="Our team contacts you" />
            <Step num={3} text="Get connected locally" />
          </div>
          {/* Platforms */}
          <div style={{
            background: COLORS.offwhite,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "20px 16px",
          }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: COLORS.core, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.8px" }}>
              For Platforms
            </p>
            <Step num={1} text="Register your platform" />
            <Step num={2} text="Verification process" />
            <Step num={3} text="Go live on network" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PLATFORM CODES ── */
const codes = [
  { code: "SLP", verified: false, desc: "Skill Learning Platform — unverified listing" },
  { code: "JR", verified: false, desc: "Job Recruitment Platform — unverified listing" },
  { code: "B", verified: false, desc: "Business — unverified listing" },
  { code: "VSLP", verified: true, desc: "Verified Skill Learning Platform — background checked" },
  { code: "VJR", verified: true, desc: "Verified Job Recruitment Platform — background checked" },
  { code: "VB", verified: true, desc: "Verified Business — background checked" },
];

function PlatformCodes() {
  return (
    <section style={{ padding: "48px 20px", background: COLORS.offwhite }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>Platform Codes</SectionLabel>
        <h2 style={sectionHeading}>What the codes mean</h2>
        <p style={sectionSub}>Every listing on Vouchr carries a code. Verified platforms carry a V-prefix.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
          {codes.map(c => (
            <div key={c.code} style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: COLORS.white,
              border: `1px solid ${c.verified ? "#BDD9F5" : COLORS.border}`,
              borderRadius: 8,
              padding: "12px 16px",
            }}>
              <span style={{
                fontWeight: 800,
                fontSize: 12,
                padding: "3px 10px",
                borderRadius: 4,
                letterSpacing: "0.8px",
                background: c.verified ? COLORS.core : COLORS.offwhite,
                color: c.verified ? COLORS.white : COLORS.textMid,
                border: c.verified ? "none" : `1px solid ${COLORS.border}`,
                minWidth: 44,
                textAlign: "center",
              }}>{c.code}</span>
              <span style={{ fontSize: 13, color: COLORS.textMid }}>
                {c.desc}
                {c.verified && (
                  <span style={{
                    marginLeft: 8,
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.slate,
                    background: "#E8F4FF",
                    padding: "2px 7px",
                    borderRadius: 10,
                  }}>✓ Verified</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DISTRICTS ── */
function Districts() {
  return (
    <section style={{ padding: "48px 20px", background: COLORS.white }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel>Coverage</SectionLabel>
        <h2 style={{ ...sectionHeading, textAlign: "center" }}>Districts we cover</h2>
        <p style={{ ...sectionSub, textAlign: "center" }}>
          Operating exclusively within the Bastar division of Chhattisgarh.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 28,
        }}>
          {["Dantewada", "Sukma", "Bijapur"].map(d => (
            <div key={d} style={{
              background: COLORS.offwhite,
              border: `1px solid ${COLORS.border}`,
              borderBottom: `3px solid ${COLORS.core}`,
              borderRadius: 8,
              padding: "16px 28px",
              minWidth: 130,
            }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: COLORS.textDark }}>{d}</p>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: COLORS.textLight }}>Chhattisgarh</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── REGISTER ── */
function Register() {
  const forms = [
    {
      label: "Skill Learner",
      sub: "Looking to learn a new skill",
      url: "https://forms.gle/RxQsHp5mvgRnx9bJ7",
      code: "SLP",
    },
    {
      label: "Job Seeker",
      sub: "Looking for local employment",
      url: "https://forms.gle/qxj3Tcy5JnSnH9iw6",
      code: "JR",
    },
    {
      label: "Platform Registration",
      sub: "Register your institute or business",
      url: "https://forms.gle/6NtHf7YBzJebaWxm8",
      code: "B / VSLP / VJR / VB",
    },
  ];

  return (
    <section id="register" style={{ padding: "48px 20px", background: COLORS.core }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: COLORS.cyan, textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 8 }}>
          Get Started
        </p>
        <h2 style={{
          fontSize: "clamp(24px, 6vw, 34px)",
          fontWeight: 800,
          color: COLORS.white,
          margin: "0 0 10px",
          letterSpacing: "-0.3px",
        }}>
          Join the network
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 32, lineHeight: 1.5 }}>
          Select your category and fill the form. Our team will reach out within 48 hours.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {forms.map(f => (
            <a
              key={f.label}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: COLORS.white,
                border: "none",
                borderRadius: 10,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
              }}>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: COLORS.core }}>{f.label}</p>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: COLORS.textLight }}>{f.sub}</p>
              </div>
              <span style={{
                background: COLORS.offwhite,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 8px",
                color: COLORS.textMid,
                letterSpacing: "0.5px",
              }}>{f.code} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{
      background: "#0D1929",
      padding: "32px 20px",
      color: "rgba(255,255,255,0.5)",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 18, color: COLORS.white }}>Vouchr</p>
            <p style={{ margin: 0, fontSize: 12 }}>A Novaforge Labs initiative</p>
          </div>
          <div style={{ fontSize: 13 }}>
            <p style={{ margin: "0 0 6px", color: COLORS.white, fontWeight: 600 }}>Connect</p>
            <p style={{ margin: "0 0 4px" }}>
              Instagram:{" "}
              <a href="https://instagram.com/vouc.hr" target="_blank" rel="noopener noreferrer"
                style={{ color: COLORS.cyan, textDecoration: "none" }}>@vouchr</a>
            </p>
            <p style={{ margin: 0 }}>contact@novaforgelabs.in</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, fontSize: 12 }}>
          <p style={{ margin: "0 0 8px" }}>
            © 2025 Vouchr by Novaforge Labs. Operating in Dantewada, Sukma &amp; Bijapur, Chhattisgarh.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/privacy" style={{ color: COLORS.cyan, textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: COLORS.cyan, textDecoration: "none" }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── HOMEPAGE ── */
function Homepage() {
  return (
    <div style={styles.root}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Hero />
      <Divider />
      <WhatWeDo />
      <Divider />
      <HowItWorks />
      <Divider />
      <PlatformCodes />
      <Divider />
      <Districts />
      <Register />
      <Footer />
    </div>
  );
}

/* ── HELPERS ── */
function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 700,
      color: COLORS.slate,
      textTransform: "uppercase",
      letterSpacing: "1.4px",
      margin: "0 0 8px",
    }}>{children}</p>
  );
}

const sectionHeading = {
  fontSize: "clamp(22px, 5.5vw, 30px)",
  fontWeight: 800,
  color: COLORS.textDark,
  margin: "0 0 8px",
  letterSpacing: "-0.3px",
};

const sectionSub = {
  fontSize: 15,
  color: COLORS.textMid,
  margin: 0,
  lineHeight: 1.6,
};

/* ── APP ── */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}
