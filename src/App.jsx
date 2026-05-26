import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import heroImage from "./assets/hero.jpg";
import favicon from "./assets/favicon.png";

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
    scrollBehavior: "smooth",
  },
};

const glassEffect = {
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: 10,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const glassEffectHover = {
  ...glassEffect,
  background: "rgba(255, 255, 255, 0.85)",
  boxShadow: "0 8px 32px 0 rgba(34, 80, 138, 0.1)",
  transform: "translateY(-4px)",
};

/* ── ANIMATED BACKGROUND ── */
function AnimatedBackground() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden",
      background: "radial-gradient(circle at 20% 50%, rgba(34, 80, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 194, 255, 0.03) 0%, transparent 50%)",
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          animation: float 8s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 300px;
          height: 300px;
          background: #22508A;
          top: -100px;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 200px;
          height: 200px;
          background: #00C2FF;
          top: 50%;
          right: 5%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 250px;
          height: 250px;
          background: #3A82C4;
          bottom: -80px;
          left: 50%;
          animation-delay: 4s;
        }
      `}</style>
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />
    </div>
  );
}

/* ── NAV ── */
function Nav() {
  return (
    <nav style={{
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: `1px solid ${COLORS.border}`,
      padding: "0 20px",
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 101,
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
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 8px 20px rgba(34, 80, 138, 0.3)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.transform = "translateY(0)";
        }}
      >
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
      maxWidth: 1000,
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
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
            animation: "fadeInUp 0.6s ease-out",
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
            animation: "fadeInUp 0.8s ease-out 0.1s both",
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
            animation: "fadeInUp 1s ease-out 0.2s both",
          }}>
            Connecting skill learners, job seekers aur business owners —{" "}
            <strong style={{ color: COLORS.core }}>apne district mein.</strong>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 340, animation: "fadeInUp 1.2s ease-out 0.3s both" }}>
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 24px rgba(34, 80, 138, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = COLORS.core;
                e.target.style.color = COLORS.white;
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 24px rgba(34, 80, 138, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = COLORS.white;
                e.target.style.color = COLORS.core;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Register Your Platform
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div style={{
            width: "100%",
            maxWidth: 380,
            height: 400,
            background: "linear-gradient(135deg, #E8F4FF 0%, #BDD9F5 100%)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(34, 80, 138, 0.15)",
            animation: "fadeInUp 1s ease-out 0.4s both",
          }}>
            <img
              src={heroImage}
              alt="Vouchr Network"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ── DIVIDER ── */
function Divider() {
  return <div style={{ height: 1, background: COLORS.border, margin: "0 20px", position: "relative", zIndex: 1 }} />;
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
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={{ padding: "48px 20px", background: COLORS.offwhite, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>What We Do</SectionLabel>
        <h2 style={sectionHeading}>Three platforms. One network.</h2>
        <p style={sectionSub}>Vouchr operates three connected platforms under one district-level network.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
          {platforms.map((p, idx) => (
            <div
              key={p.code}
              style={{
                ...glassEffect,
                ...(hoveredCard === idx ? glassEffectHover : {}),
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                borderLeft: `4px solid ${COLORS.core}`,
                padding: "20px 20px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{
                  background: COLORS.core,
                  color: COLORS.white,
                  fontWeight: 800,
                  fontSize: 11,
                  padding: "3px 9px",
                  borderRadius: 4,
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
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
        boxShadow: "0 4px 12px rgba(34, 80, 138, 0.2)",
      }}>{num}</span>
      <span style={{ fontSize: 14, color: COLORS.textMid, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
    </div>
  );
}

function HowItWorks() {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  return (
    <section style={{ padding: "48px 20px", background: COLORS.white, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>How It Works</SectionLabel>
        <h2 style={sectionHeading}>Simple. Fast. Local.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
          {/* Individuals */}
          <div
            style={{
              ...glassEffect,
              ...(hoveredColumn === 0 ? glassEffectHover : {}),
              border: `1px solid rgba(255, 255, 255, 0.3)`,
              padding: "20px 16px",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredColumn(0)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <p style={{ fontWeight: 700, fontSize: 13, color: COLORS.core, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.8px" }}>
              For Individuals
            </p>
            <Step num={1} text="Fill registration form" />
            <Step num={2} text="Our team contacts you" />
            <Step num={3} text="Get connected locally" />
          </div>
          {/* Platforms */}
          <div
            style={{
              ...glassEffect,
              ...(hoveredColumn === 1 ? glassEffectHover : {}),
              border: `1px solid rgba(255, 255, 255, 0.3)`,
              padding: "20px 16px",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredColumn(1)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
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
  const [hoveredCode, setHoveredCode] = useState(null);

  return (
    <section style={{ padding: "48px 20px", background: COLORS.offwhite, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel>Platform Codes</SectionLabel>
        <h2 style={sectionHeading}>What the codes mean</h2>
        <p style={sectionSub}>Every listing on Vouchr carries a code. Verified platforms carry a V-prefix.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
          {codes.map((c, idx) => (
            <div
              key={c.code}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                ...glassEffect,
                ...(hoveredCode === idx ? glassEffectHover : {}),
                border: `1px solid ${c.verified ? "rgba(189, 217, 245, 0.5)" : "rgba(255, 255, 255, 0.3)"}`,
                padding: "12px 16px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredCode(idx)}
              onMouseLeave={() => setHoveredCode(null)}
            >
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
                boxShadow: c.verified ? "0 4px 12px rgba(34, 80, 138, 0.2)" : "none",
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
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  return (
    <section style={{ padding: "48px 20px", background: COLORS.white, position: "relative", zIndex: 1 }}>
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
          {["Dantewada", "Sukma", "Bijapur"].map((d, idx) => (
            <div
              key={d}
              style={{
                ...glassEffect,
                ...(hoveredDistrict === idx ? glassEffectHover : {}),
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                borderBottom: `3px solid ${COLORS.core}`,
                padding: "16px 28px",
                minWidth: 130,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredDistrict(idx)}
              onMouseLeave={() => setHoveredDistrict(null)}
            >
              <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: COLORS.textDark }}>{d}</p>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: COLORS.textLight }}>Chhattisgarh</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHAT WE DO PAGE ── */
function WhatWeDoPage() {
  return (
    <div style={{ ...styles.root }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href={favicon} />
      <AnimatedBackground />
      <Nav />
      <section style={{ padding: "48px 20px", background: COLORS.white, minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionLabel>About</SectionLabel>
          <h1 style={{
            fontSize: "clamp(28px, 6vw, 42px)",
            fontWeight: 800,
            color: COLORS.textDark,
            margin: "0 0 32px",
            letterSpacing: "-0.3px",
          }}>What We Do</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Main Intro */}
            <div>
              <p style={{
                fontSize: 16,
                color: COLORS.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}>
                Vouchr ek <strong>hyperlocal network</strong> hai jo Chhattisgarh ke underserved districts mein real opportunities tak pahunchata hai — skill learning, job recruitment, aur business [...]
              </p>
              <p style={{
                fontSize: 16,
                color: COLORS.textMid,
                lineHeight: 1.8,
                margin: "16px 0 0",
              }}>
                Hum sirf listings nahi karte — hum <strong>verify karte hain, connect karte hain, aur ensure karte hain</strong> ki sahi insaan sahi jagah pahunche.
              </p>
            </div>

            {/* What We Provide */}
            <div>
              <h2 style={{
                fontSize: "clamp(22px, 5vw, 28px)",
                fontWeight: 800,
                color: COLORS.core,
                margin: "0 0 20px",
                letterSpacing: "-0.2px",
              }}>What We Provide</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Skill Learners */}
                <div
                  style={{
                    ...glassEffect,
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                    borderLeft: `4px solid ${COLORS.core}`,
                    padding: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: COLORS.textDark,
                    margin: "0 0 12px",
                  }}>For Skill Learners</h3>
                  <p style={{
                    fontSize: 15,
                    color: COLORS.textMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    Verified skill learning platforms se <strong>direct connection</strong>. Koi fake promises nahi — sirf real programs jo aapki zindagi badal sakein.
                  </p>
                </div>

                {/* Job Seekers */}
                <div
                  style={{
                    ...glassEffect,
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                    borderLeft: `4px solid ${COLORS.core}`,
                    padding: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: COLORS.textDark,
                    margin: "0 0 12px",
                  }}>For Job Seekers</h3>
                  <p style={{
                    fontSize: 15,
                    color: COLORS.textMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    Local aur regional job opportunities directly apke paas. Hum <strong>pehle verify karte hain, phir connect karte hain</strong>.
                  </p>
                </div>

                {/* Skill Learning Platforms */}
                <div
                  style={{
                    ...glassEffect,
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                    borderLeft: `4px solid ${COLORS.core}`,
                    padding: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: COLORS.textDark,
                    margin: "0 0 12px",
                  }}>For Skill Learning Platforms</h3>
                  <p style={{
                    fontSize: 15,
                    color: COLORS.textMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    Apne program ke liye <strong>serious, verified students directly apke paas</strong>. Zero time waste.
                  </p>
                </div>

                {/* Recruiters */}
                <div
                  style={{
                    ...glassEffect,
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                    borderLeft: `4px solid ${COLORS.core}`,
                    padding: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: COLORS.textDark,
                    margin: "0 0 12px",
                  }}>For Recruiters</h3>
                  <p style={{
                    fontSize: 15,
                    color: COLORS.textMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    <strong>Pre-confirmed, interested candidates</strong>. Hum call karke confirm karte hain pehle — phir aapko bhejte hain.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 16 }}>
              <Link
                to="/"
                style={{
                  display: "inline-block",
                  background: COLORS.core,
                  color: COLORS.white,
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  letterSpacing: "0.1px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(34, 80, 138, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ── REGISTER ── */
function Register() {
  const [hoveredForm, setHoveredForm] = useState(null);

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
    <section id="register" style={{ padding: "48px 20px", background: COLORS.core, position: "relative", zIndex: 1 }}>
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
          {forms.map((f, idx) => (
            <a
              key={f.label}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: 10,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                ...(hoveredForm === idx ? {
                  background: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-4px)",
                } : {}),
              }}
              onMouseEnter={() => setHoveredForm(idx)}
              onMouseLeave={() => setHoveredForm(null)}
            >
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
      position: "relative",
      zIndex: 1,
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
            © 2026 Vouchr by Novaforge Labs. Operating in Dantewada, Sukma &amp; Bijapur, Chhattisgarh.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/privacy" style={{ color: COLORS.cyan, textDecoration: "none", transition: "opacity 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >Privacy Policy</Link>
            <Link to="/terms" style={{ color: COLORS.cyan, textDecoration: "none", transition: "opacity 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >Terms & Conditions</Link>
            <Link to="/what-we-do" style={{ color: COLORS.cyan, textDecoration: "none", transition: "opacity 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >What We Do</Link>
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
      <link rel="icon" type="image/png" href={favicon} />
      <AnimatedBackground />
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
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
      </Routes>
    </Router>
  );
}
