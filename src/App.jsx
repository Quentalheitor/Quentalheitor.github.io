import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import './index.css';

// --- GEOMETRIC DIVIDER ---
const SectionDivider = () => (
  <div style={{ display: 'flex', width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
    <div style={{ width: '15%', height: '3px', backgroundColor: 'var(--amber-accent)', transform: 'translateY(-1px)' }} />
  </div>
);

// --- HERO SECTION ---
const HeroSection = () => {
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
            Engineering AI pipelines, full-stack platforms, and Linux automation.
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
            Initialize Protocol
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>System Protocol</h2>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>
            Information Systems student at UFRPE. My professional focus is squarely on the convergence of artificial intelligence and cybersecurity—building secure, local-first systems backed by measurable benchmarks.
          </p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8', marginBottom: '1rem' }}>
            I develop software applications utilizing Python, Ruby on Rails, SQL, PostgreSQL, React, and Vite, operating daily within Linux Mint and Kali Linux environments.
          </p>
          <p style={{ lineHeight: 1.8, color: '#94a3b8' }}>
            Credentialed in Microsoft Azure AI Fundamentals with active ISC2 Candidate status.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const ProjectCard = ({ title, stack, description, imagePath, repoLink, setLightboxImage }) => {
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
            View Repository
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
          <img src={imagePath} alt={title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ setLightboxImage }) => {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--slate-dark)', padding: '8rem 10%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Deployed Architecture</h2>
          <p style={{ color: '#94a3b8', margin: 0 }}>Projects that showcase my stack.</p>
        </motion.div>

        <ProjectCard 
          title="Buffet Brain"
          stack="LSTM NEURAL NETWORKS | TIME-SERIES ANALYSIS"
          description="Investor-profile classifier output integrating risk classification and time-series charting to generate strategy and portfolio allocation reasoning."
          imagePath="/images/buffet-brain.webp"
          repoLink="https://github.com/Quentalheitor/Buffet_Brain"
          setLightboxImage={setLightboxImage}
        />
        <ProjectCard 
          title="Jarvis"
          stack="PYTHON | EXTERNAL API INTEGRATION"
          description="Automated script framework executing external API integrations via voice command. Features full command-response cycles and terminal tracking."
          imagePath="/images/jarvis.webp"
          repoLink="https://github.com/Quentalheitor/Jarvis-project"
          setLightboxImage={setLightboxImage}
        />
        <ProjectCard 
          title="Glysera"
          stack="RUBY ON RAILS | REACT | VITE"
          description="A full-stack healthcare management system engineered to track patient records, medical equipment logistics, and health unit operations via a secure API architecture."
          imagePath="/images/Glysera.webp"
          repoLink="https://github.com/Quentalheitor/Glysera_backend"
          setLightboxImage={setLightboxImage}
        />
        <ProjectCard 
          title="Whisper Transcriber"
          stack="TORCH | PULSEAUDIO | WHISPER MODEL | CUDA"
          description="Standalone voice-transcription application executing ambient noise calibration and processing locally on CUDA hardware using the Whisper small model."
          imagePath="/images/transcriptor.webp"
          repoLink="https://github.com/Quentalheitor/Whisper_Transcriber"
          setLightboxImage={setLightboxImage}
        />
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
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Active Operations</h2>
            <p style={{ color: '#94a3b8', margin: 0 }}>Current deployments, coursework, and academic focus.</p>
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
            Last Updated: September 8, 2026
          </div>
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <ActiveTask 
            category="Latest Accomplishment"
            title="FlyRank AI & ML Tracks"
            detail="Completed the Machine Learning and AI Fluency tracks of my FlyRank internship, gaining applied experience in artificial intelligence development and enterprise machine learning deployments."
          />
          <ActiveTask 
            category="Project"
            title="On med"
            detail="Developing a Ruby on Rails and React management platform for hospital coordinators in Recife. Centralizing nursing staff profiles and real-time availability to eliminate scheduling chaos and ensure compliant staff-to-patient ratios."
          />
          <ActiveTask 
            category="UI/UX Engineering"
            title="Portfolio Project Upgrades"
            detail="Designing and implementing modernized frontend interfaces and UX flows for the Transcriptor, Buffet Brain, and Jarvis applications."
          />
          <ActiveTask 
            category="Certification"
            title="ISC2 CC Exam"
            detail="Currently preparing for the official ISC2 Certified in Cybersecurity (CC) exam, scheduled for September 21st."
          />
          <ActiveTask 
            category="Coursework"
            title="Anthropic Claude Ecosystem"
            detail="Completing integration courses focused on Claude with Amazon Bedrock, Claude with Google Cloud's Vertex AI, and Building with the Claude API."
          />
          <ActiveTask 
            category="Coursework"
            title="Advanced Python Architecture"
            detail="Reached 50% completion of 'Python 3 do básico ao avançado - com projetos reais' by Luiz Otávio Miranda."
          />
          <ActiveTask 
            category="Research"
            title="AI & Machine Learning Systems"
            detail="Ongoing research into neural network architectures, machine learning algorithms, data science practices, and practical AI workflow uses."
          />
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
            padding: '1.5rem',
            paddingBottom: '0.75rem',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            pointerEvents: isActive ? 'auto' : 'none'
          }}
        >
          <div 
            onClick={(e) => { e.stopPropagation(); if(onImageClick) onImageClick(imagePath); }}
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
              loading="lazy" 
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
  const [activeModal, setActiveModal] = useState(null); 

  const anthropicCerts = [
    { title: "Anthropic Claude 101", description: "Foundational training covering the Claude ecosystem, prompt engineering, and LLM implementation.", imagePath: "/images/certs/Heitor_Quental_Claude_101_certificate.png" },
    { title: "Anthropic Claude Code 101", description: "Technical training on implementing and generating code using the Claude API.", imagePath: "/images/certs/Heitor_Quental_Claude_Code_101_certificate.png" },
    { title: "Anthropic Claude Code in Action", description: "Practical application and deployment of code generated via Anthropic's Claude models.", imagePath: "/images/certs/Heitor_Quental_Claude_Code_in_Action.png" },
    { title: "Anthropic Claude Platform 101", description: "Comprehensive overview of the Anthropic developer console and platform capabilities.", imagePath: "/images/certs/Heitor_Quental_Claude_Platform_101.png" },
    { title: "Anthropic: Intro to Agent Skills", description: "Training on equipping AI agents with custom skills and external tool use capabilities.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_agent_skills.png" },
    { title: "Anthropic: Intro to Claude Cowork", description: "Integrating Claude as a collaborative AI coworker within enterprise workflows.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_Claude_Cowork.png" },
    { title: "Anthropic: Intro to Subagents", description: "Architecting multi-agent systems and delegating complex tasks to specialized subagents.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_subagents.png" },
    { title: "Intro to Model Context Protocol", description: "Introduction to architecting secure and scalable Model Context Protocol integrations.", imagePath: "/images/certs/Heitor_Amaral_Introduction_to_model_context_protocol.png" },
    { title: "Model Context Protocol: Advanced", description: "Advanced implementation of the Model Context Protocol for secure data integration.", imagePath: "/images/certs/Heitor_Quental_Model_Context_Protocol:_Advanced_Topics.png" },
    { title: "AI Fluency: Capabilities & Limitations", description: "Framework for understanding the realistic capabilities and limitations of modern AI systems.", imagePath: "/images/certs/AI_Fluency:_AI_Capabilities__Limitations.png" },
    { title: "AI Fluency Certificate", description: "Core certification for foundational AI fluency concepts and operations.", imagePath: "/images/certs/Heitor_Amaral_AI_Fluency_certificate.png" },
    { title: "AI Fluency for Builders", description: "Targeted frameworks for software engineers and product builders integrating AI.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_builders.png" },
    { title: "AI Fluency for Educators", description: "Targeted frameworks for deploying AI systems and workflows in educational sectors.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_educators.png" },
    { title: "AI Fluency for Nonprofits", description: "Targeted frameworks for scaling operational capacity via AI in nonprofit organizations.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_nonprofits.png" },
    { title: "AI Fluency for Small Businesses", description: "Targeted frameworks for automating and scaling SMB operations with AI tools.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_small_businesses.png" },
    { title: "AI Fluency for Students", description: "Targeted frameworks for academic acceleration and research assistance using AI.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_For_Students_certificate.png" },
    { title: "Teaching the AI Fluency Framework", description: "Methodologies for educating teams and clients on the AI Fluency Framework.", imagePath: "/images/certs/Heitor_Quental_Teaching_the_AI_Fluency_Framework.png" }
  ];

  const flyrankCerts = [
    { 
      title: "FlyRank Recommendation Letter", 
      description: "Official executive letter of recommendation from FlyRank's CEO detailing applied artificial intelligence contributions, engineering performance, and work ethic.", 
      imagePath: "/images/certs/flyrank-recommendation-letter.png" 
    },
    { 
      title: "FlyRank AI Fluency", 
      description: "Certificate of completion for applied artificial intelligence fluency and enterprise integration.", 
      imagePath: "/images/certs/flyrank-certificate-of-completion-ai-fluency.png" 
    },
    { 
      title: "FlyRank Machine Learning", 
      description: "Certificate of completion focused on machine learning deployments.", 
      imagePath: "/images/certs/flyrank-certificate-of-completion_ML.png" 
    }
  ];

  const senacCerts = [
    { title: "Senac Fullstack Web Development", description: "Comprehensive training in front-end and back-end web development architectures.", imagePath: "/images/certs/Fullstack_senac.png" },
    { title: "Senac Logic Programming", description: "Foundational training in programming logic and algorithm structuring.", imagePath: "/images/certs/Logic_senac.png" }
  ];

  const isc2Certs = [
    { title: "ISC2 CC Domain 1", description: "Security Principles: Foundation of security concepts, risk management, and security controls.", imagePath: "/images/certs/isc2_domain_1_competency.png" },
    { title: "ISC2 CC Domain 2", description: "Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts.", imagePath: "/images/certs/isc2_domain_2_competency.png" },
    { title: "ISC2 CC Domain 3", description: "Access Controls Concepts: Physical and logical access controls and identity management.", imagePath: "/images/certs/isc2_domain_3_competency.png" },
    { title: "ISC2 CC Domain 4", description: "Network Security: Computer networking concepts and securing network architectures.", imagePath: "/images/certs/isc2_domain_4_competency.png" },
    { title: "ISC2 CC Domain 5", description: "Security Operations: Data security, system hardening, and security policies.", imagePath: "/images/certs/isc2_domain_5_competency.png" }
  ];

  const eventCerts = [
    { title: "BBTS Hackathon", description: "Participation and project deployment in the Banco do Brasil Tecnologia e Serviços competitive hackathon.", imagePath: "/images/certs/BBTS_hackathon.png" }
  ];

  const otherCerts = [
    { title: "Microsoft Azure AI Fundamentals", description: "Foundational certification validating knowledge of machine learning and artificial intelligence concepts.", imagePath: "/images/certs/AI-900.png" },
    { title: "Cambridge C1 Advanced English", description: "High-level English proficiency certification demonstrating language ability for complex professional environments.", imagePath: "/images/certs/C1_english.png" }
  ];

  const modalConfig = {
    anthropic: { data: anthropicCerts, title: 'Anthropic Collection' },
    flyrank: { data: flyrankCerts, title: 'FlyRank Internship Documents & Recommendation' },
    senac: { data: senacCerts, title: 'Senac Qualifications' },
    isc2: { data: isc2Certs, title: 'ISC2 Competency Domains' },
    events: { data: eventCerts, title: 'Hackathons, Ideathons & Events' }
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
            CLOSE
          </button>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)', marginTop: '3rem' }}>
            {currentModal.title}
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
            {currentModal.data.length} verified framework and implementation certificates.
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
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Credentials & Validation</h2>
          <p style={{ color: '#94a3b8', margin: 0 }}>Verified proficiencies, completed pathways, and academic achievements.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          
          <CertCard 
            title={`Anthropic Certificates (${anthropicCerts.length})`}
            description="A comprehensive collection of Anthropic certifications covering Claude ecosystems, prompt engineering, agent skills, and AI Fluency frameworks. Click to view all."
            imagePath="/images/Anthropic_logo.webp"
            onGroupClick={() => setActiveModal('anthropic')}
          />
          <CertCard 
            title={`FlyRank Internship (${flyrankCerts.length})`}
            description="Official letter of recommendation and certificates of completion for applied artificial intelligence and machine learning development during the FlyRank internship. Click to view all."
            imagePath="/images/Flyrank_logo.webp"
            onGroupClick={() => setActiveModal('flyrank')}
          />
          <CertCard 
            title={`Senac Certifications (${senacCerts.length})`}
            description="Software development training spanning front-end, back-end, and logical programming architectures. Click to view all."
            imagePath="/images/Senac_logo.webp"
            onGroupClick={() => setActiveModal('senac')}
          />
          <CertCard 
            title={`ISC2 Competencies (${isc2Certs.length})`}
            description="Cybersecurity operational proficiency spanning 5 security domains. Click to view all."
            imagePath="/images/ISC2_logo.webp"
            onGroupClick={() => setActiveModal('isc2')}
          />
          <CertCard 
            title={`Hackathons & Events (${eventCerts.length})`}
            description="Competitive deployments and practical problem-solving events. Click to view all."
            imagePath="/images/events_logo.webp"
            onGroupClick={() => setActiveModal('events')}
          />

          {otherCerts.map((cert, index) => (
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
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Initiate Connection</h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem', lineHeight: 1.7 }}>
            Interested in discussing infrastructure, security, or deploying new models? Open a secure channel below.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ padding: '2rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--amber-accent)' }}
            >
              <h3 style={{ color: 'var(--amber-accent)', margin: '0 0 0.5rem 0' }}>Payload Delivered.</h3>
              <p style={{ margin: 0, color: '#f8fafc' }}>Your transmission has been received. I will establish contact shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="contact-name" className="sr-only">Identity / Name</label>
              <input id="contact-name" type="text" name="name" value={formData.name} placeholder="Identity / Name" className="contact-input" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <label htmlFor="contact-email" className="sr-only">Return Address / Email</label>
              <input id="contact-email" type="email" name="email" value={formData.email} placeholder="Return Address / Email" className="contact-input" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <label htmlFor="contact-message" className="sr-only">Payload / Message</label>
              <textarea id="contact-message" name="message" value={formData.message} placeholder="Payload / Message" className="contact-input" required onChange={(e) => setFormData({...formData, message: e.target.value})} />
              
              {status === 'error' && (
                <p style={{ color: '#ef4444', marginBottom: '1rem' }}>Transmission failed. Please verify your connection and try again.</p>
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
                {status === 'submitting' ? 'Transmitting...' : 'Transmit Payload'}
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

        <SocialLink href="/heitor_quental_cv.pdf">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Curriculum Vitae
        </SocialLink>
      </div>
      <p style={{ color: '#64748b', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        Built by Heitor Quental.
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

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--slate-dark)' }}>
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
  );
}
