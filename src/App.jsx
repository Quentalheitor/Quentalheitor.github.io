import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import './index.css';

// --- TRANSLATION DICTIONARY ---
import { translations } from './translations';

// --- LANGUAGE CONTEXT ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'en';

    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang && ['en', 'pt'].includes(paramLang.toLowerCase())) {
      return paramLang.toLowerCase();
    }

    const saved = localStorage.getItem('pref_lang');
    if (saved && ['en', 'pt'].includes(saved)) {
      return saved;
    }

    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  const [lang, setLangState] = useState(getInitialLanguage);

  const setLanguage = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('pref_lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

// --- FLOATING LANGUAGE SWITCH WITH EPHEMERAL INDICATOR ---
const LanguageSwitch = () => {
  const { lang, setLanguage } = useLanguage();
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  const dismissHint = () => {
    setShowHint(false);
  };

  const handleSelectLanguage = (code) => {
    setLanguage(code);
    dismissHint();
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div style={{
        display: 'flex',
        gap: '0.25rem',
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(10px)',
        padding: '4px',
        borderRadius: '4px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}>
        {['en', 'pt'].map((code) => (
          <button
            key={code}
            onClick={() => handleSelectLanguage(code)}
            style={{
              background: lang === code ? 'var(--amber-accent)' : 'transparent',
              color: lang === code ? '#000' : '#cbd5e1',
              border: 'none',
              padding: '5px 12px',
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

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={dismissHint}
            style={{
              marginTop: '10px',
              backgroundColor: 'rgba(15, 23, 42, 0.96)',
              border: '1px solid var(--amber-accent)',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.25)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              maxWidth: '260px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '32px',
              width: '10px',
              height: '10px',
              backgroundColor: 'var(--slate-dark)',
              borderTop: '1px solid var(--amber-accent)',
              borderLeft: '1px solid var(--amber-accent)',
              transform: 'rotate(45deg)'
            }} />

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                style={{ color: 'var(--amber-accent)', fontSize: '0.9rem', lineHeight: 1 }}
              >
                ▲
              </motion.span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.3 }}>
                  Switch Language / Mudar Idioma
                </p>
                <p style={{ margin: 0, fontSize: '0.7rem', color: '#94a3b8' }}>
                  Click to select English or Português.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- GEOMETRIC DIVIDER ---
const SectionDivider = () => (
  <div style={{ display: 'flex', width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
    <div style={{ width: '15%', height: '3px', backgroundColor: 'var(--amber-accent)', transform: 'translateY(-1px)' }} />
  </div>
);

// --- HERO SECTION ---
const HeroSection = () => {
  const { t } = useLanguage();
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const bgX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

  const glowX = useTransform(mouseX, v => v - 300); 
  const glowY = useTransform(mouseY, v => v - 300);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, staggerChildren: 0.08 }
    }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  const name = "Heitor Quental";

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'var(--slate-dark)',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          x: glowX, y: glowY,
          zIndex: 1
        }}
      />

      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      <motion.div 
        style={{
          position: 'absolute',
          top: '-5%', left: '-5%', right: '-5%', bottom: '-5%',
          backgroundImage: 'url(/images/hero-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          x: bgX, y: bgY,
          opacity: 0, zIndex: 0
        }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div style={{ zIndex: 2, textAlign: 'left', maxWidth: '800px', padding: '0 2rem', width: '100%' }}>
        <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
          <motion.h1 
            variants={sentenceVariant}
            initial="hidden"
            animate="visible"
            style={{ fontSize: '4rem', margin: 0, fontWeight: 800, letterSpacing: '-0.05em', display: 'flex' }}
          >
            {name.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariant}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ fontSize: '1.5rem', margin: 0, fontWeight: 400, color: '#cbd5e1', lineHeight: 1.4 }}
          >
            {t.hero.subtitle}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <a href="#about" style={{
            display: 'inline-block',
            backgroundColor: 'var(--amber-accent)',
            color: '#000',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)'
          }}>
            {t.hero.cta}
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '20px', height: '30px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}
        >
          <motion.div style={{ width: '4px', height: '4px', backgroundColor: 'var(--amber-accent)', borderRadius: '50%' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- ABOUT SECTION ---
const AboutSection = ({ setLightboxImage }) => {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ backgroundColor: 'var(--slate-light)', padding: '8rem 10%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '4rem', maxWidth: '1000px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <motion.img 
            src="/images/profile.png" 
            alt="Profile" 
            onClick={() => setLightboxImage("/images/profile.png")}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)' 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            style={{ 
              width: '100%', 
              maxWidth: '350px', 
              borderBottom: '4px solid var(--amber-accent)', 
              borderRadius: '4px', 
              display: 'block', 
              cursor: 'zoom-in' 
            }}
          />
        </div>
        <div style={{ flex: '1.5 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{t.about.title}</h2>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>
            {t.about.p1}
          </p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>
            {t.about.p2}
          </p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8' }}>
            {t.about.p3}
          </p>
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const ProjectCard = ({ title, stack, description, imagePath, repoLink, repoBtnText, setLightboxImage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex', gap: '4rem', marginBottom: '8rem', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <div style={{ flex: '1 1 300px' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--amber-accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{stack}</p>
        <p style={{ lineHeight: 1.7, color: '#94a3b8' }}>{description}</p>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid var(--amber-accent)',
            color: 'var(--amber-accent)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {repoBtnText}
          </a>
        )}
      </div>
      <div style={{ flex: '1.5 1 400px', position: 'relative' }}>
        <motion.div 
          onClick={() => setLightboxImage(imagePath)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'zoom-in' }}
        >
          <img src={imagePath} alt={title} loading="eager" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ setLightboxImage }) => {
  const { t } = useLanguage();

  return (
    <section id="projects" style={{ backgroundColor: 'var(--slate-dark)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{t.projects.title}</h2>
          <p style={{ color: '#94a3b8', margin: 0 }}>{t.projects.subtitle}</p>
        </motion.div>

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
const ActiveTask = ({ category, title, detail }) => (
  <motion.div 
    whileHover={{ 
      backgroundColor: 'rgba(245, 158, 11, 0.03)',
      boxShadow: '0 0 20px rgba(245, 158, 11, 0.15)',
      borderColor: 'rgba(245, 158, 11, 0.4)'
    }}
    style={{ 
      flex: '1 1 300px', 
      padding: '2rem', 
      backgroundColor: 'rgba(255,255,255,0.02)', 
      border: '1px solid rgba(255,255,255,0.05)',
      borderTop: '3px solid var(--amber-accent)',
      transition: 'all 0.3s ease'
    }}
  >
    <span style={{ color: 'var(--amber-accent)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{category}</span>
    <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{title}</h3>
    <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{detail}</p>
  </motion.div>
);

const CurrentlyWorkingOnSection = () => {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: 'var(--slate-light)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}
        >
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{t.operations.title}</h2>
            <p style={{ color: '#94a3b8', margin: 0 }}>{t.operations.subtitle}</p>
          </div>
          <div style={{ 
            color: 'var(--amber-accent)', 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase', 
            border: '1px solid var(--amber-accent)', 
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(245, 158, 11, 0.05)'
          }}>
            {t.operations.lastUpdated}
          </div>
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {t.operations.tasks.map((task, idx) => (
            <ActiveTask 
              key={idx}
              category={task.category}
              title={task.title}
              detail={task.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CERTIFICATIONS SECTION ---
const CertCard = ({ title, description, imagePath, onGroupClick, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [forceClose, setForceClose] = useState(false);

  const isActive = isHovered && !forceClose;
  const isMultiImage = Array.isArray(imagePath);

  const handleBottomClick = (e) => {
    e.stopPropagation();
    if (onGroupClick) {
      onGroupClick(); 
    } else {
      setForceClose(!forceClose);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setForceClose(false);
  };

  return (
    <div 
      style={{ height: '80px', position: 'relative', zIndex: isActive ? 50 : 1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{
          height: isActive ? 'auto' : '80px',
          backgroundColor: isActive ? 'var(--slate-dark)' : 'rgba(255,255,255,0.02)',
          boxShadow: isActive ? '0 -20px 40px rgba(0,0,0,0.7)' : 'none'
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          border: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '3px solid var(--amber-accent)',
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0, 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          borderRadius: '4px'
        }}
      >
        <motion.div
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            padding: '1.25rem',
            paddingBottom: '0.75rem',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.85rem',
            pointerEvents: isActive ? 'auto' : 'none'
          }}
        >
          {/* Handles single or dual images */}
          <div 
            style={{ 
              width: '100%',
              display: 'flex', 
              gap: '0.5rem',
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            {isMultiImage ? (
              imagePath.map((src, idx) => (
                <div
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); if (onImageClick) onImageClick(src); }}
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: '0.5rem',
                    cursor: 'zoom-in',
                    minWidth: 0
                  }}
                >
                  <img 
                    src={src} 
                    alt={`${title} - Page ${idx + 1}`} 
                    loading="eager"
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      maxHeight: '440px', 
                      objectFit: 'contain', 
                      display: 'block',
                      borderRadius: '2px'
                    }} 
                  />
                </div>
              ))
            ) : (
              <div 
                onClick={(e) => { e.stopPropagation(); if (onImageClick) onImageClick(imagePath); }}
                style={{ 
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.35)', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  overflow: 'hidden', 
                  padding: '0.85rem', 
                  cursor: 'zoom-in' 
                }}
              >
                <img 
                  src={imagePath} 
                  alt={title} 
                  loading="eager" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    maxHeight: '440px', 
                    objectFit: 'contain', 
                    display: 'block',
                    borderRadius: '2px'
                  }} 
                />
              </div>
            )}
          </div>
          <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{description}</p>
        </motion.div>

        <div 
          onClick={handleBottomClick}
          style={{ height: '80px', minHeight: '80px', padding: '0 1.5rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <h3 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const CertificationsSection = ({ setLightboxImage }) => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null); 

  const modalConfig = {
    anthropic: { data: t.certs.anthropicList, title: t.certs.groups.anthropic.modalTitle },
    flyrank: { data: t.certs.flyrankList, title: t.certs.groups.flyrank.modalTitle },
    senac: { data: t.certs.senacList, title: t.certs.groups.senac.modalTitle },
    isc2: { data: t.certs.isc2List, title: t.certs.groups.isc2.modalTitle },
    events: { data: t.certs.eventList, title: t.certs.groups.events.modalTitle }
  };

  const renderModalContent = () => {
    if (!activeModal) return null;
    const currentModal = modalConfig[activeModal];

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          zIndex: 100, backgroundColor: 'rgba(15, 23, 42, 0.98)', 
          overflowY: 'auto', padding: '4rem 10%' 
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
          <button 
            onClick={() => setActiveModal(null)} 
            style={{ 
              position: 'absolute', top: '-2rem', right: '0', 
              color: 'var(--amber-accent)', background: 'transparent', 
              border: '1px solid var(--amber-accent)', padding: '0.5rem 1.5rem', 
              cursor: 'pointer', fontWeight: 'bold', letterSpacing: '0.1em'
            }}
          >
            {t.certs.modalClose}
          </button>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)', marginTop: '3rem' }}>
            {currentModal.title}
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
            {t.certs.modalSubtitle(currentModal.data.length)}
          </p>

          <div style={{ marginTop: '440px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {currentModal.data.map((cert, index) => (
              <CertCard 
                key={index}
                title={cert.title}
                description={cert.description}
                imagePath={cert.imagePath}
                onImageClick={setLightboxImage}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section style={{ backgroundColor: 'var(--slate-dark)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{t.certs.title}</h2>
          <p style={{ color: '#94a3b8', margin: 0 }}>{t.certs.subtitle}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <CertCard 
            title={t.certs.groups.anthropic.title(t.certs.anthropicList.length)}
            description={t.certs.groups.anthropic.desc}
            imagePath="/images/Anthropic_logo.webp"
            onGroupClick={() => setActiveModal('anthropic')}
          />
          <CertCard 
            title={t.certs.groups.flyrank.title(t.certs.flyrankList.length)}
            description={t.certs.groups.flyrank.desc}
            imagePath="/images/Flyrank_logo.webp"
            onGroupClick={() => setActiveModal('flyrank')}
          />
          <CertCard 
            title={t.certs.groups.senac.title(t.certs.senacList.length)}
            description={t.certs.groups.senac.desc}
            imagePath="/images/Senac_logo.webp"
            onGroupClick={() => setActiveModal('senac')}
          />
          <CertCard 
            title={t.certs.groups.isc2.title(t.certs.isc2List.length)}
            description={t.certs.groups.isc2.desc}
            imagePath="/images/ISC2_logo.webp"
            onGroupClick={() => setActiveModal('isc2')}
          />
          <CertCard 
            title={t.certs.groups.events.title(t.certs.eventList.length)}
            description={t.certs.groups.events.desc}
            imagePath="/images/events_logo.webp"
            onGroupClick={() => setActiveModal('events')}
          />

          {t.certs.otherList.map((cert, index) => (
            <CertCard 
              key={`standalone-${index}`}
              title={cert.title}
              description={cert.description}
              imagePath={cert.imagePath}
              onImageClick={setLightboxImage}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {renderModalContent()}
      </AnimatePresence>
    </section>
  );
};

// --- CONTACT SECTION ---
const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjwdpqr";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section style={{ backgroundColor: 'var(--slate-light)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>{t.contact.title}</h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem', lineHeight: 1.7 }}>
            {t.contact.subtitle}
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ padding: '2rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--amber-accent)' }}
            >
              <h3 style={{ color: 'var(--amber-accent)', margin: '0 0 0.5rem 0' }}>{t.contact.successTitle}</h3>
              <p style={{ margin: 0, color: '#f8fafc' }}>{t.contact.successDesc}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="contact-name" className="sr-only">{t.contact.namePlaceholder}</label>
              <input id="contact-name" type="text" name="name" value={formData.name} placeholder={t.contact.namePlaceholder} className="contact-input" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <label htmlFor="contact-email" className="sr-only">{t.contact.emailPlaceholder}</label>
              <input id="contact-email" type="email" name="email" value={formData.email} placeholder={t.contact.emailPlaceholder} className="contact-input" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <label htmlFor="contact-message" className="sr-only">{t.contact.messagePlaceholder}</label>
              <textarea id="contact-message" name="message" value={formData.message} placeholder={t.contact.messagePlaceholder} className="contact-input" required onChange={(e) => setFormData({...formData, message: e.target.value})} />
              
              {status === 'error' && (
                <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{t.contact.error}</p>
              )}

              <motion.button
                whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: status === 'submitting' ? 'transparent' : 'var(--amber-accent)',
                  color: status === 'submitting' ? 'var(--amber-accent)' : '#000',
                  padding: '1rem 2.5rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: '2px solid var(--amber-accent)',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  marginTop: '1rem',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                {status === 'submitting' ? t.contact.submittingBtn : t.contact.submitBtn}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// --- FOOTER & SOCIAL LINKS ---
const SocialLink = ({ href, children }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ color: 'var(--amber-accent)', y: -3 }}
    transition={{ duration: 0.2 }}
    style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
  >
    {children}
  </motion.a>
);

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: 'var(--slate-dark)', padding: '4rem 10%', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem' }}>
        <SocialLink href="https://github.com/quentalheitor">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/heitor-quental-887864382/">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </SocialLink>

        <SocialLink href="/Curriculum_vitae.pdf">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          {t.footer.cvLabel}
        </SocialLink>
      </div>
      <p style={{ color: '#64748b', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        {t.footer.builtBy}
      </p>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxImage]);

  // Pre-load all certificate and group icon images immediately on site load
  useEffect(() => {
    const certsData = translations.en.certs;
    const urls = new Set([
      "/images/Anthropic_logo.webp",
      "/images/Flyrank_logo.webp",
      "/images/Senac_logo.webp",
      "/images/ISC2_logo.webp",
      "/images/events_logo.webp"
    ]);

    const collectPaths = (list) => {
      if (!list) return;
      list.forEach((item) => {
        if (Array.isArray(item.imagePath)) {
          item.imagePath.forEach((src) => urls.add(src));
        } else if (item.imagePath) {
          urls.add(item.imagePath);
        }
      });
    };

    collectPaths(certsData.anthropicList);
    collectPaths(certsData.flyrankList);
    collectPaths(certsData.senacList);
    collectPaths(certsData.isc2List);
    collectPaths(certsData.eventList);
    collectPaths(certsData.otherList);

    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <LanguageProvider>
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--slate-dark)' }}>
        <LanguageSwitch />
        <HeroSection />
        <SectionDivider />
        <AboutSection setLightboxImage={setLightboxImage} />
        <SectionDivider />
        <ProjectsSection setLightboxImage={setLightboxImage} />
        <SectionDivider />
        <CurrentlyWorkingOnSection />
        <SectionDivider />
        <CertificationsSection setLightboxImage={setLightboxImage} />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <FooterSection />

        {/* Global Fullscreen Image Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'zoom-out'
              }}
            >
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.3 }}
                src={lightboxImage} 
                alt="Fullscreen Modal" 
                className="lightbox-img" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </LanguageProvider>
  );
}
