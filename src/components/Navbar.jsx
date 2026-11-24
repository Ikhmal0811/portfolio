import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label={`${profile.name}, home`}>
          <span className="brand-mark">{initials}</span>
          <span className="brand-star">✳</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ '--i': index }}
            >
              <span className="mobile-menu-index">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="mobile-menu-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </header>
  )
}
