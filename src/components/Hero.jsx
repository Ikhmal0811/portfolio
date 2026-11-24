import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const words = ['Developer', 'Student', 'Problem-solver']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [firstName, lastName] = profile.name.split(' ')

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob--pink" aria-hidden="true" />
      <div className="hero-blob hero-blob--lime" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">HELLO, I&apos;M</span>
          <span className="hero-title-line hero-title-line--name">
            {firstName} <span className="hero-outline">{lastName}</span>
            <span className="hero-asterisk" aria-hidden="true">✳</span>
          </span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-label">I&apos;M A</span>
          <span className="rotator">
            <span key={words[wordIndex]} className="rotator-word">
              {words[wordIndex]}
            </span>
          </span>
        </div>

        <div className="hero-bottom">
          <p className="hero-copy">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button--dark" href="#work">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--outline" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        {profile.stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
        <div className="hero-stat hero-stat--location">
          <span className="hero-stat-value">↗</span>
          <span className="hero-stat-label">{profile.location}</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-cue-line" aria-hidden="true" />
      </a>
    </section>
  )
}
