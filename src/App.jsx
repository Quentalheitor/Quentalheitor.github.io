import React, { useState, useEffect } from 'react';
import './index.css';
import { LanguageProvider, useLanguage } from './LanguageContext';

function PortfolioMain() {
  const { lang, setLanguage, t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return (
    <div className="site-wrapper">
      <div className="geometric-line horizontal-line" style={{ top: '80px' }} />
      <div className="geometric-line horizontal-line" style={{ top: '55%' }} />

      {/* Navigation Header */}
      <header className="site-header">
        <div className="nav-row">
          <div className="brand-badge">
            <span className="brand-dot" />
            <span>HEITOR.QUENTAL</span>
          </div>

          <nav className="nav-links">
            <a href="#about" className="nav-link">Protocol</a>
            <a href="#projects" className="nav-link" style={{ color: 'var(--text-main)' }}>Architecture</a>
            <a href="#operations" className="nav-link">Operations</a>
            <a href="#certs" className="nav-link">Credentials</a>
            <a href="#contact" className="nav-link">Connect</a>

            {/* Language Selector */}
            <div className="lang-switch">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              >
                PT
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="hero-box">
            <div className="eyebrow-pill">
              <span>{t.hero.eyebrow}</span>
            </div>
            <h1 className="hero-title">
              Heitor Quental Feitoza Kehrle do Amaral
            </h1>
            <p className="hero-desc">
              {t.hero.subtitle}
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span>{t.hero.cta}</span>
                <span>&rarr;</span>
              </a>
              <a
                href="https://github.com/Quentalheitor"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <span>{t.hero.githubBtn} &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-block">
        <div className="content-container">
          <div className="section-head">
            <div className="section-eyebrow">{t.about.title}</div>
          </div>
          <div className="protocol-grid">
            <div className="protocol-card"><p>{t.about.p1}</p></div>
            <div className="protocol-card"><p>{t.about.p2}</p></div>
            <div className="protocol-card"><p>{t.about.p3}</p></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-block">
        <div className="content-container">
          <div className="section-head">
            <div className="section-eyebrow">{t.projects.tag}</div>
            <h2 className="section-heading">{t.projects.title}</h2>
            <p className="section-sub">{t.projects.subtitle}</p>
          </div>

          <div className="projects-grid">
            {t.projects.items.map((project, idx) => (
              <article key={idx} className="project-card">
                {/* 16:10 Ratio Container with object-top framing */}
                <div
                  className="project-thumb"
                  onClick={() => setActiveModal({ title: project.title, imagePath: project.imagePath })}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="overlay-tag">{t.projects.inspectHint}</span>
                    <span className="overlay-zoom">[+] 1:1 Lightbox</span>
                  </div>
                </div>

                <div className="project-body">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-stack">{project.stack}</div>
                    <p className="project-desc">{project.description}</p>
                  </div>

                  <div className="project-foot">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      <span>{t.projects.repoBtn}</span>
                      <span>&rarr;</span>
                    </a>
                    <span className="project-id">SYS-0{idx + 1}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="section-block">
        <div className="content-container">
          <div className="section-head">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div className="section-eyebrow">{t.operations.title}</div>
                <p className="section-sub">{t.operations.subtitle}</p>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                {t.operations.lastUpdated}
              </span>
            </div>
          </div>

          <div className="ops-list">
            {t.operations.tasks.map((task, idx) => (
              <div key={idx} className="op-item">
                <div className="op-cat">{task.category}</div>
                <h3 className="op-title">{task.title}</h3>
                <p className="op-detail">{task.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="certs" className="section-block">
        <div className="content-container">
          <div className="section-head">
            <div className="section-eyebrow">{t.certs.title}</div>
            <p className="section-sub">{t.certs.subtitle}</p>
          </div>

          <div className="certs-grid">
            {t.certs.groups.map((group, idx) => (
              <div
                key={idx}
                className="cert-card"
                onClick={() => setActiveModal({ title: group.title, imagePath: group.imagePath })}
              >
                <div>
                  <h3 className="cert-title">{group.title}</h3>
                  <p className="cert-desc">{group.desc}</p>
                </div>
                <div className="cert-link">
                  <span>{t.certs.viewBtn} &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-block">
        <div className="content-container">
          <div className="contact-container">
            <div className="section-head" style={{ textAlign: 'center' }}>
              <div className="section-eyebrow">{t.contact.title}</div>
              <p className="section-sub">{t.contact.subtitle}</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="contact-input"
              />
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="contact-input"
              />
              <textarea
                placeholder={t.contact.messagePlaceholder}
                className="contact-input"
              />
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t.contact.submitBtn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="content-container">
          <p>{t.footer.builtBy}</p>
        </div>
      </footer>

      {/* Full-Screen Lightbox Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="lightbox-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">
              <span style={{ color: 'var(--amber-light)', fontWeight: 700 }}>{activeModal.title}</span>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActiveModal(null)}
              >
                ESC / Close
              </button>
            </div>
            <img
              src={activeModal.imagePath}
              alt={activeModal.title}
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioMain />
    </LanguageProvider>
  );
}
