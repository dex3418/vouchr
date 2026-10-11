import { Routes, Route, Navigate } from "react-router-dom";

import VouchrLanding from "./pages/VouchrLanding";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VouchrLanding />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
