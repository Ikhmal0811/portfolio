import { useState } from 'react'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="section-kicker"><span>04</span> — SAY HELLO</p>
          <h2 className="section-title section-title--dark">
            GOT AN IDEA?<br />
            LET&apos;S MAKE<br />
            <span className="contact-underline">IT REAL.</span>
          </h2>
          <p className="contact-copy">
            I&apos;m looking for my first internship and I&apos;d love to hear from teams willing to take
            a chance on a motivated junior. Questions, opportunities or just a chat — my inbox is open.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-phone" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            {profile.phone}
          </a>
          <div className="contact-socials">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={120}>
          {submitted ? (
            <div className="form-success" role="status">
              <span className="form-success-icon" aria-hidden="true">✳</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. This is a mock portfolio, so no email was actually sent — but imagine me replying within 24 hours with great enthusiasm.</p>
              <button type="button" className="button button--dark" onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input name="name" type="text" placeholder="Ada Lovelace" value={form.name} onChange={update} required />
                </label>
                <label>
                  <span>Your email</span>
                  <input name="email" type="email" placeholder="ada@example.com" value={form.email} onChange={update} required />
                </label>
              </div>
              <label>
                <span>What&apos;s on your mind?</span>
                <textarea name="message" rows="5" placeholder="Tell me about your idea..." value={form.message} onChange={update} required />
              </label>
              <button className="button button--dark button--wide" type="submit">
                Send message <span aria-hidden="true">↗</span>
              </button>
              <p className="form-note">Just a demo form — nothing goes anywhere.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
