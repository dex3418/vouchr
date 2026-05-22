import { Link } from "react-router-dom";

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

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: COLORS.textDark }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* Nav */}
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
        </Link>
        <a
          href="/#register"
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

      {/* Content */}
      <section style={{ padding: "48px 20px", background: COLORS.white }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h1 style={{
            fontSize: 36,
            fontWeight: 800,
            color: COLORS.textDark,
            margin: "0 0 8px",
            letterSpacing: "-0.5px",
          }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: COLORS.textLight, margin: "0 0 32px" }}>By Novaforge Labs • Effective Date: May 2026</p>

          <div style={{ lineHeight: 1.8, color: COLORS.textMid }}>
            <Section title="1. Information We Collect">
              We collect name, age, phone number, email, address, district, block, education, skills, and occupation details through our registration forms.
            </Section>

            <Section title="2. How We Use Your Information">
              Your data is used strictly for:
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>Connecting you with skill learning platforms</li>
                <li>Connecting you with job recruitment platforms</li>
                <li>Connecting you with local businesses</li>
                <li>Internal record keeping</li>
              </ul>
              We do not sell, share, or distribute your data to any third party without your prior consent and confirmation via phone call.
            </Section>

            <Section title="3. Data Sharing">
              Your information is only shared with verified platforms on Vouchr after:
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>Your explicit consent via phone call</li>
                <li>Platform verification by Vouchr team</li>
              </ul>
            </Section>

            <Section title="4. Call Recording">
              All calls between Vouchr and users are recorded for quality and verification purposes. Recording begins only after your verbal consent.
            </Section>

            <Section title="5. Data Storage">
              Your data is stored securely on encrypted systems. We do not retain unnecessary data.
            </Section>

            <Section title="6. Your Rights">
              You have the right to:
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>Request your data be deleted</li>
                <li>Withdraw consent at any time</li>
                <li>Know where your data has been shared</li>
              </ul>
              Contact us at devashishmarkam5@gmail.com to exercise these rights.
            </Section>

            <Section title="7. Changes to This Policy">
              We may update this policy. Changes will be posted on this page.
            </Section>

            <Section title="8. Data Retention">
              We retain your data for a maximum of 2 years from the date of registration. After 2 years your data is permanently deleted unless you have an active connection through Vouchr. You can request deletion at any time by contacting us.
            </Section>

            <Section title="9. Protection of Minors">
              Vouchr strictly serves individuals aged 18 and above. We do not knowingly collect data from anyone below 18 years of age. If we discover underage data has been submitted it will be immediately deleted.
            </Section>

            <Section title="10. Grievance Officer">
              For any data privacy concerns or complaints contact our Grievance Officer:
              <div style={{ margin: "8px 0", paddingLeft: 20 }}>
                <p><strong>Name:</strong> Devashish Markam</p>
                <p><strong>Designation:</strong> Founder, Novaforge Labs</p>
                <p><strong>Email:</strong> devashishmarkam5@gmail.com</p>
                <p><strong>Response time:</strong> Within 72 hours of receiving complaint.</p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.core, margin: "0 0 8px" }}>{title}</h3>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
