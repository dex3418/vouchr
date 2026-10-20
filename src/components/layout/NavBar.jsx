import { Link } from "react-router-dom"
import Wordmark from "../ui/Wordmark.jsx"
import LanguageToggle from "./LanguageToggle.jsx"
import { useLang } from "../../i18n/LanguageContext.jsx"

export default function NavBar() {
  const { t } = useLang()
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Vouchr home">
          <Wordmark />
          <span className="nav__by">by Novaforge Labs</span>
        </Link>
        <div className="nav__right">
          <LanguageToggle />
          <a href="/#join" className="btn btn--magenta nav__cta">{t.nav.register}</a>
        </div>
      </div>
    </header>
  )
}
