import SectionHeading from "../ui/SectionHeading.jsx"
import { useLang } from "../../i18n/LanguageContext.jsx"

export default function Districts() {
  const { t } = useLang()
  const d = t.districts
  return (
    <section className="section">
      <div className="container">
        <SectionHeading centered label={d.label} title={d.title} sub={d.sub} />
        <ul className="districts">
          {d.names.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </section>
  )
}
