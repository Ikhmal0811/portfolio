import { profile } from '../data.js'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand brand--footer" href="#home" aria-label="Back to top">
          <span className="brand-mark">{initials}</span>
          <span className="brand-star">✳</span>
        </a>
        <p>Designed &amp; built with curiosity by {profile.name}.</p>
        <a className="back-to-top" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
