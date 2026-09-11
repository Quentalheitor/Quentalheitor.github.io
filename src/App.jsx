import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './LanguageContext';
import './index.css';

// --- FLOATING LANGUAGE SWITCH ---
const LanguageSwitch = () => {
  const { lang, setLanguage } = useLanguage();

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      gap: '0.25rem',
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      padding: '4px',
      borderRadius: '4px'
    }}>
      {['en', 'pt'].map((code) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          style={{
            background: lang === code ? 'var(--amber-accent)' : 'transparent',
            color: lang === code ? '#000' : '#cbd5e1',
            border: 'none',
            padding: '4px 10px',
            fontWeight: 700,
            fontSize: '0.75rem',
            cursor: 'pointer',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.2s ease'
          }}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

// --- HERO SECTION ---
const HeroSection = () => {
  const { t } = useLanguage();
  // ... mouse tracking & animation setup ...

  return (
    <section /* ...styles... */>
      {/* ...glow effects & background... */}
      <div style={{ zIndex: 2, textAlign: 'left', maxWidth: '800px', padding: '0 2rem', width: '100%' }}>
        {/* ...Title... */}
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 400, color: '#cbd5e1', lineHeight: 1.4 }}>
            {t.hero.subtitle}
          </motion.h2>
        </div>
        <motion.div>
          <a href="#about" className="protocol-btn" style={/* ... */}>
            {t.hero.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
const AboutSection = ({ setLightboxImage }) => {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ backgroundColor: 'var(--slate-light)', padding: '8rem 10%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '4rem', maxWidth: '1000px', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* ...Image column... */}
        <div style={{ flex: '1.5 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{t.about.title}</h2>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>{t.about.p1}</p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>{t.about.p2}</p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8' }}>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const ProjectsSection = ({ setLightboxImage }) => {
  const { t } = useLanguage();

  return (
    <section id="projects" style={{ backgroundColor: 'var(--slate-dark)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{t.projects.title}</h2>
          <p style={{ color: '#94a3b8', margin: 0 }}>{t.projects.subtitle}</p>
        </div>

        {t.projects.items.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            stack={project.stack}
            description={project.description}
            imagePath={project.imagePath}
            repoLink={project.repoLink}
            repoBtnText={t.projects.repoBtn}
            setLightboxImage={setLightboxImage}
          />
        ))}
      </div>
    </section>
  );
};

// --- ACTIVE OPERATIONS SECTION ---
const CurrentlyWorkingOnSection = () => {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: 'var(--slate-light)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{t.operations.title}</h2>
            <p style={{ color: '#94a3b8', margin: 0 }}>{t.operations.subtitle}</p>
          </div>
          <div style={{ color: 'var(--amber-accent)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', border: '1px solid var(--amber-accent)', padding: '0.5rem 1rem' }}>
            {t.operations.lastUpdated}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {t.operations.tasks.map((task, idx) => (
            <ActiveTask key={idx} category={task.category} title={task.title} detail={task.detail} />
          ))}
        </div>
      </div>
    </section>
  );
};
