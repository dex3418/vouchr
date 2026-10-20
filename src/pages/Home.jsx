import Seo from "../components/seo/Seo.jsx"
import NavBar from "../components/layout/NavBar.jsx"
import Footer from "../components/layout/Footer.jsx"
import Hero from "../components/home/Hero.jsx"
import Audiences from "../components/home/Audiences.jsx"
import HowItWorks from "../components/home/HowItWorks.jsx"
import VerifiedLegend from "../components/home/VerifiedLegend.jsx"
import Districts from "../components/home/Districts.jsx"
import FinalCta from "../components/home/FinalCta.jsx"

export default function Home() {
  return (
    <>
      <Seo />
      <NavBar />
      <main>
        <Hero />
        <Audiences />
        <HowItWorks />
        <VerifiedLegend />
        <Districts />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
