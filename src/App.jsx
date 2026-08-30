import About from './components/About'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Follow from './components/Follow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import SkipLink from './components/SkipLink'
import Testimonials from './components/Testimonials'
import Why from './components/Why'
import Work from './components/Work'

export default function App() {
  return (
    <>
      <SkipLink />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Work />
        <Services />
        <Why />
        <Process />
        <About />
        <Follow />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
