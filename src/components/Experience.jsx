import { collaboration, experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <Reveal className="experience-header">
          <p className="section-kicker"><span>03</span> — MY PATH SO FAR</p>
          <h2 className="section-title section-title--dark">
            THE <span className="highlight-purple">JOURNEY.</span>
          </h2>
        </Reveal>

        <div className="experience-grid">
          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal key={item.period} delay={index * 70}>
                <div className="timeline-item">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <span className="timeline-company">{item.company}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="testimonials">
            <p className="testimonials-label">HOW I WORK WITH OTHERS</p>
            {collaboration.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="trait-card">
                  <span className="trait-number">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
