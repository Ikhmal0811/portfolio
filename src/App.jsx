import { useEffect, useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cursor from './components/Cursor.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Navbar from './components/Navbar.jsx'
import Work from './components/Work.jsx'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={['CREATIVE DEVELOPMENT', 'DIGITAL DESIGN', 'MOTION', 'GOOD VIBES']} className="marquee--hero" />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
