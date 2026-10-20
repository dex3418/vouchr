import { Link } from "react-router-dom"
import Wordmark from "../ui/Wordmark.jsx"
import { useLang } from "../../i18n/LanguageContext.jsx"
import { CONTACT_EMAIL } from "../../data/links.js"

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Wordmark className="footer__wm" />
          <p className="footer__text">© {new Date().getFullYear()} Novaforge Labs. {t.footer.tagline}</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <Link to="/privacy">{t.footer.privacy}</Link>
          <Link to="/terms">{t.footer.terms}</Link>
          <a href="https://instagram.com/vouc.hr" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{t.footer.contact}</a>
        </nav>
      </div>
    </footer>
  )
}
