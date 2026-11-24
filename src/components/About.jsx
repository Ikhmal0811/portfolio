import { profile, skills } from '../data.js'
import Marquee from './Marquee.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-heading">
            <Reveal>
              <p className="section-kicker"><span>01</span> — A LITTLE ABOUT ME</p>
              <h2 className="section-title section-title--dark">
                DESIGN<br />
                WITH A<br />
                <span className="highlight-pink">PULSE.</span>
              </h2>
              <div className="about-portrait" aria-hidden="true">
                <div className="about-portrait-face">☺</div>
                <span className="about-portrait-label">that&apos;s me, probably</span>
              </div>
            </Reveal>
          </div>

          <div className="about-content">
            <Reveal delay={80}>
              <p className="about-lead">{profile.bio[0]}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="about-text">{profile.bio[1]}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="about-text">{profile.bio[2]}</p>
            </Reveal>

            <Reveal delay={260}>
              <div className="about-cards">
                <div className="about-now-card">
                  <span className="about-card-label">CURRENTLY</span>
                  <p>Looking for my first internship and sharpening my full-stack skills through personal projects.</p>
                  <span className="about-card-dot" aria-hidden="true" />
                </div>
                <div className="about-now-card about-now-card--dark">
                  <span className="about-card-label">BASED IN</span>
                  <p>{profile.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Marquee items={skills.slice(0, 6)} className="marquee--about" />

      <div className="container skills-wrap">
        <Reveal>
          <p className="section-kicker"><span>TOOLBOX</span> — THINGS I USE EVERY DAY</p>
          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
