import SectionHeading from "../ui/SectionHeading.jsx"
import { useLang } from "../../i18n/LanguageContext.jsx"
import { FORMS } from "../../data/links.js"

const HREF = { job: FORMS.jobSeeker, skill: FORMS.skillLearner, platform: FORMS.platformSection }
const BTN = { job: "btn--magenta", skill: "btn--blue", platform: "btn--green" }

// The three ways to join, each with its own register button.
export default function Audiences() {
  const { t } = useLang()
  const a = t.audiences
  return (
    <section className="section section--soft" id="join">
      <div className="container">
        <SectionHeading label={a.label} title={a.title} sub={a.sub} />
        <div className="grid3">
          {a.items.map((it) => (
            <article className={`aud aud--${it.key}`} key={it.key}>
              <span className="aud__code">{it.code}</span>
              <h3 className="aud__title">{it.title}</h3>
              <p className="aud__desc">{it.desc}</p>
              <a className={`btn ${BTN[it.key]} aud__btn`} href={HREF[it.key]} target="_blank" rel="noopener noreferrer">{it.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
