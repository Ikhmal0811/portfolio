import { useEffect, useMemo, useState } from 'react'
import { filters, projects } from '../data.js'
import Reveal from './Reveal.jsx'

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-art--${project.shape}`} style={{ background: project.gradient }}>
      {project.image ? (
        <img
          className="project-art-image"
          src={project.image}
          alt={project.imageAlt || `${project.title} preview`}
        />
      ) : (
        <div className="project-art-inner" aria-hidden="true">
          {project.shape === 'orb' && (
            <>
              <span className="art-orb" />
              <span className="art-orb art-orb--small" />
              <span className="art-ring" />
            </>
          )}
          {project.shape === 'type' && (
            <>
              <span className="art-type">M</span>
              <span className="art-type art-type--ghost">M</span>
            </>
          )}
          {project.shape === 'waves' && (
            <svg viewBox="0 0 300 200" preserveAspectRatio="none">
              <path d="M-20 120 Q 40 30 100 110 T 220 100 T 340 90" />
              <path d="M-20 145 Q 40 55 100 135 T 220 125 T 340 115" />
              <path d="M-20 170 Q 40 80 100 160 T 220 150 T 340 140" />
            </svg>
          )}
          {project.shape === 'cards' && (
            <>
              <span className="art-card" />
              <span className="art-card art-card--two" />
              <span className="art-card art-card--three" />
            </>
          )}
          {project.shape === 'burst' && (
            <>
              <span className="art-burst" />
              <span className="art-burst-core" />
            </>
          )}
          {project.shape === 'postcard' && (
            <>
              <span className="art-postcard">
                <span className="art-postcard-stamp">✳</span>
                <span className="art-postcard-lines" />
              </span>
            </>
          )}
        </div>
      )}
      <span className="project-art-number">{project.number}</span>
    </div>
  )
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.kind === activeFilter),
    [activeFilter],
  )

  useEffect(() => {
    if (!selected) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section className="work section" id="work">
      <div className="container">
        <Reveal className="work-header">
          <div>
            <p className="section-kicker section-kicker--light"><span>02</span> — SELECTED WORK</p>
            <h2 className="section-title section-title--light">
              THINGS I&apos;VE<br />
              <span className="highlight-lime">MADE.</span>
            </h2>
          </div>
          <p className="work-header-note">
            A mix of products, identities and playful experiments. Each one started as a question and
            ended with a lot of late nights and a very satisfied sigh.
          </p>
        </Reveal>

        <Reveal className="work-filters" delay={80}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-btn ${activeFilter === filter.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter-count">
                {filter.id === 'all'
                  ? projects.length
                  : projects.filter((project) => project.kind === filter.id).length}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 90}>
              <button
                type="button"
                className="project-card"
                onClick={() => setSelected(project)}
                aria-label={`View details for ${project.title}`}
              >
                <ProjectArtwork project={project} />
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category} · {project.year}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags" aria-label="Tech stack">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close project details">
              ✕
            </button>
            <ProjectArtwork project={selected} />
            <div className="modal-content">
              <span className="project-category">{selected.category} · {selected.year}</span>
              <h3 id="modal-title">{selected.title}</h3>
              <p className="modal-detail">{selected.detail}</p>
              <div className="modal-meta">
                <div>
                  <span>ROLE</span>
                  <p>{selected.role}</p>
                </div>
                <div>
                  <span>STACK</span>
                  <div className="project-tags">
                    {selected.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {selected.link && (
                  <div>
                    <span>{selected.linkLabel || 'LIVE'}</span>
                    <a className="modal-link" href={selected.link} target="_blank" rel="noreferrer">
                      {selected.linkText || 'View project ↗'}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
