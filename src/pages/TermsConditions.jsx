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

export default function TermsConditions() {
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
          }}>Terms & Conditions</h1>
          <p style={{ fontSize: 14, color: COLORS.textLight, margin: "0 0 32px" }}>By Novaforge Labs • Effective Date: May 2026</p>

          <div style={{ lineHeight: 1.8, color: COLORS.textMid }}>
            <Section title="1. Platform Nature">
              Vouchr is a connection platform. We connect individuals with skill learning platforms, job recruiters, and businesses. We are not a placement agency, recruiter, or employer.
            </Section>

            <Section title="2. User Responsibilities">
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>All information submitted must be accurate</li>
                <li>False information leads to immediate blacklisting</li>
                <li>Users must respond to Vouchr verification calls</li>
              </ul>
            </Section>

            <Section title="3. Platform Responsibilities">
              Registered platforms on Vouchr must:
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>Provide accurate business information</li>
                <li>Comply with Vouchr verification process</li>
                <li>Not misuse individual data shared by Vouchr</li>
                <li>Maintain ethical conduct with all individuals</li>
              </ul>
            </Section>

            <Section title="4. Verification">
              Vouchr verifies platforms through physical visits and background checks. Verified status is valid for one year and subject to renewal.
            </Section>

            <Section title="5. Complaint Policy">
              One confirmed complaint against a platform results in immediate suspension. Confirmed complaints result in permanent ban with no re-registration.
            </Section>

            <Section title="6. Refund Policy">
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>₹500 posting fee is non-refundable</li>
                <li>50% refund applicable only if individual no-show within 15 days</li>
                <li>Commission charged only on confirmed joins</li>
              </ul>
            </Section>

            <Section title="7. Data Privacy">
              All data collected is governed by our Privacy Policy. By using Vouchr you agree to our Privacy Policy.
            </Section>

            <Section title="8. Limitation of Liability">
              Vouchr is not responsible for:
              <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
                <li>Actions of platforms after data handover</li>
                <li>Employment outcomes</li>
                <li>Course completion or results</li>
              </ul>
            </Section>

            <Section title="9. Governing Law">
              These terms are governed by the laws of India.
            </Section>

            <Section title="10. Cookie Policy">
              Vouchr website may use basic cookies for functionality purposes only. We do not use cookies for tracking or advertising.
            </Section>

            <Section title="11. Dispute Resolution">
              Any disputes arising from use of Vouchr will first be attempted to be resolved through mutual discussion. If unresolved, disputes will be governed by the courts of Chhattisgarh, India under applicable Indian law.
            </Section>

            <Section title="12. Contact">
              For any queries contact us at devashishmarkam5@gmail.com.
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
