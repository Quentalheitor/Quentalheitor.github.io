import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function PortfolioMain() {
  const { lang, setLanguage, t } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);

  // Close lightbox on Escape key and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative selection:bg-amber-500 selection:text-slate-950">
      {/* Structural Guidelines from index.css */}
      <div className="geometric-line horizontal-line top-20" />
      <div className="geometric-line horizontal-line top-1/2" />

      {/* Sticky Header / Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-sm font-bold text-slate-200 tracking-wider">
              HEITOR.QUENTAL
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors hidden sm:inline">
              Protocol
            </a>
            <a href="#projects" className="text-slate-100 hover:text-amber-400 transition-colors">
              Architecture
            </a>
            <a href="#operations" className="hover:text-amber-400 transition-colors hidden md:inline">
              Operations
            </a>
            <a href="#certs" className="hover:text-amber-400 transition-colors hidden md:inline">
              Credentials
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Connect
            </a>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded p-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  lang === 'pt'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PT
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
            AI Engineering & Cybersecurity Architecture
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight mb-6">
            Heitor Quental Feitoza Kehrle do Amaral
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
            >
              {t.hero.cta}
            </a>
            <a
              href="https://github.com/Quentalheitor"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 font-mono text-xs px-5 py-3 rounded transition-colors"
            >
              GitHub &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900 relative z-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-6">
          {t.about.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-400 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-900">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>EMPIRICAL BENCHMARKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
            <article
              key={index}
              className="flex flex-col bg-slate-900/90 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* Telemetry Screenshot Container with object-top framing */}
              <div
                onClick={() => setActiveImage(project)}
                className="relative w-full aspect-[16/10] bg-slate-950 border-b border-slate-800/80 overflow-hidden cursor-zoom-in group"
              >
                <img
                  src={project.imagePath}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-amber-400 bg-slate-950/90 px-2.5 py-1 rounded border border-amber-500/30">
                    {t.projects.expandHint}
                  </span>
                  <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-2 py-1 rounded">
                    [+] 1:1 Lightbox
                  </span>
                </div>
              </div>

              {/* Project Card Meta */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono font-semibold text-amber-400 tracking-wide mb-3">
                    {project.stack}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded transition-colors"
                  >
                    <span>{t.projects.repoBtn}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>

                  <span className="text-xs font-mono text-slate-500">
                    SYS-0{index + 1}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
              {t.operations.title}
            </h2>
            <p className="text-slate-400 text-sm">{t.operations.subtitle}</p>
          </div>
          <span className="text-xs font-mono text-slate-500">{t.operations.lastUpdated}</span>
        </div>

        <div className="space-y-4">
          {t.operations.tasks.map((task, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <span className="text-xs font-mono text-amber-400 block mb-1">{task.category}</span>
                <h3 className="text-base font-bold text-slate-200">{task.title}</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl">{task.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials and Certifications Section */}
      <section id="certs" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900 relative z-10">
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
            {t.certs.title}
          </h2>
          <p className="text-slate-400 text-sm">{t.certs.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.certs.groups.map((group, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage({ title: group.title, imagePath: group.image })}
              className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-5 hover:border-amber-500/40 transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{group.desc}</p>
              </div>
              <span className="mt-4 text-xs font-mono text-amber-500 inline-flex items-center gap-1">
                {t.certs.viewBtn} &rarr;
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto border-t border-slate-900 relative z-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          {t.contact.title}
        </h2>
        <p className="text-sm text-slate-400 mb-8">{t.contact.subtitle}</p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            className="contact-input rounded-lg"
          />
          <input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            className="contact-input rounded-lg"
          />
          <textarea
            rows="4"
            placeholder={t.contact.messagePlaceholder}
            className="contact-input rounded-lg"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            {t.contact.submitBtn}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs font-mono text-slate-600">
        <p>{t.footer.builtBy}</p>
      </footer>

      {/* Lightbox Modal (Bound to .lightbox-img from index.css) */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-full cursor-default"
          >
            <div className="w-full flex items-center justify-between pb-3 text-xs font-mono text-slate-300">
              <span className="text-amber-400 font-bold">{activeImage.title}</span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
              >
                ESC / Close
              </button>
            </div>

            <img
              src={activeImage.imagePath}
              alt={activeImage.title}
              className="lightbox-img rounded-lg"
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
