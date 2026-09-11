import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import './index.css';

// --- TRANSLATION DICTIONARY ---
const translations = {
  en: {
    hero: {
      subtitle: "Engineering AI pipelines, full-stack platforms, and Linux automation.",
      cta: "Initialize Protocol"
    },
    about: {
      title: "System Protocol",
      p1: "Information Systems student at UFRPE. My professional focus is squarely on the convergence of artificial intelligence and cybersecurity—building secure, local-first systems backed by measurable benchmarks.",
      p2: "I develop software applications utilizing Python, Ruby on Rails, SQL, PostgreSQL, React, and Vite, operating daily within Linux Mint and Kali Linux environments.",
      p3: "Credentialed in Microsoft Azure AI Fundamentals with active ISC2 Candidate status."
    },
    projects: {
      title: "Deployed Architecture",
      subtitle: "Projects that showcase my stack.",
      repoBtn: "View Repository",
      items: [
        {
          title: "Buffet Brain",
          stack: "LSTM NEURAL NETWORKS | TIME-SERIES ANALYSIS",
          description: "Investor-profile classifier output integrating risk classification and time-series charting to generate strategy and portfolio allocation reasoning.",
          imagePath: "/images/buffet-brain.webp",
          repoLink: "https://github.com/Quentalheitor/Buffet_Brain"
        },
        {
          title: "Jarvis",
          stack: "PYTHON | EXTERNAL API INTEGRATION",
          description: "Automated script framework executing external API integrations via voice command. Features full command-response cycles and terminal tracking.",
          imagePath: "/images/jarvis.webp",
          repoLink: "https://github.com/Quentalheitor/Jarvis-project"
        },
        {
          title: "Glysera",
          stack: "RUBY ON RAILS | REACT | VITE",
          description: "A full-stack healthcare management system engineered to track patient records, medical equipment logistics, and health unit operations via a secure API architecture.",
          imagePath: "/images/Glysera.webp",
          repoLink: "https://github.com/Quentalheitor/Glysera_backend"
        },
        {
          title: "Whisper Transcriber",
          stack: "TORCH | PULSEAUDIO | WHISPER MODEL | CUDA",
          description: "Standalone voice-transcription application executing ambient noise calibration and processing locally on CUDA hardware using the Whisper small model.",
          imagePath: "/images/transcriptor.webp",
          repoLink: "https://github.com/Quentalheitor/Whisper_Transcriber"
        }
      ]
    },
    operations: {
      title: "Active Operations",
      subtitle: "Current deployments, coursework, and academic focus.",
      lastUpdated: "Last Updated: September 8, 2026",
      tasks: [
        {
          category: "Latest Accomplishment",
          title: "FlyRank AI & ML Tracks",
          detail: "Completed the Machine Learning and AI Fluency tracks of my FlyRank internship, gaining applied experience in artificial intelligence development and enterprise machine learning deployments."
        },
        {
          category: "Project",
          title: "On med",
          detail: "Developing a Ruby on Rails and React management platform for hospital coordinators in Recife. Centralizing nursing staff profiles and real-time availability to eliminate scheduling chaos and ensure compliant staff-to-patient ratios."
        },
        {
          category: "UI/UX Engineering",
          title: "Portfolio Project Upgrades",
          detail: "Designing and implementing modernized frontend interfaces and UX flows for the Transcriptor, Buffet Brain, and Jarvis applications."
        },
        {
          category: "Certification",
          title: "ISC2 CC Exam",
          detail: "Currently preparing for the official ISC2 Certified in Cybersecurity (CC) exam, scheduled for September 21st."
        },
        {
          category: "Coursework",
          title: "Anthropic Claude Ecosystem",
          detail: "Completing integration courses focused on Claude with Amazon Bedrock, Claude with Google Cloud's Vertex AI, and Building with the Claude API."
        },
        {
          category: "Coursework",
          title: "Advanced Python Architecture",
          detail: "Reached 50% completion of 'Python 3 do básico ao avançado - com projetos reais' by Luiz Otávio Miranda."
        },
        {
          category: "Research",
          title: "AI & Machine Learning Systems",
          detail: "Ongoing research into neural network architectures, machine learning algorithms, data science practices, and practical AI workflow uses."
        }
      ]
    },
    certs: {
      title: "Credentials & Validation",
      subtitle: "Verified proficiencies, completed pathways, and academic achievements.",
      modalClose: "CLOSE",
      modalSubtitle: (count) => `${count} verified framework and implementation certificates.`,
      groups: {
        anthropic: {
          title: (count) => `Anthropic Certificates (${count})`,
          desc: "A comprehensive collection of Anthropic certifications covering Claude ecosystems, prompt engineering, agent skills, and AI Fluency frameworks. Click to view all.",
          modalTitle: "Anthropic Collection"
        },
        flyrank: {
          title: (count) => `FlyRank Internship (${count})`,
          desc: "Official letter of recommendation and certificates of completion for applied artificial intelligence and machine learning development during the FlyRank internship. Click to view all.",
          modalTitle: "FlyRank Internship Documents & Recommendation"
        },
        senac: {
          title: (count) => `Senac Certifications (${count})`,
          desc: "Software development training spanning front-end, back-end, and logical programming architectures. Click to view all.",
          modalTitle: "Senac Qualifications"
        },
        isc2: {
          title: (count) => `ISC2 Competencies (${count})`,
          desc: "Cybersecurity operational proficiency spanning 5 security domains. Click to view all.",
          modalTitle: "ISC2 Competency Domains"
        },
        events: {
          title: (count) => `Hackathons & Events (${count})`,
          desc: "Competitive deployments and practical problem-solving events. Click to view all.",
          modalTitle: "Hackathons, Ideathons & Events"
        }
      },
      anthropicList: [
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
      ],
      flyrankList: [
        {
          title: "FlyRank Recommendation Letter",
          description: "Official executive letter of recommendation from FlyRank's CEO detailing applied artificial intelligence contributions, engineering performance, and work ethic.",
          imagePath: [
            "/images/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-1.webp",
            "/images/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-2.webp"
          ]
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
      ],
      senacList: [
        { title: "Senac Fullstack Web Development", description: "Comprehensive training in front-end and back-end web development architectures.", imagePath: "/images/certs/Fullstack_senac.png" },
        { title: "Senac Logic Programming", description: "Foundational training in programming logic and algorithm structuring.", imagePath: "/images/certs/Logic_senac.png" }
      ],
      isc2List: [
        { title: "ISC2 CC Domain 1", description: "Security Principles: Foundation of security concepts, risk management, and security controls.", imagePath: "/images/isc2_domain_1_competency.webp" },
        { title: "ISC2 CC Domain 2", description: "Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts.", imagePath: "/images/isc2_domain_2_competency.webp" },
        { title: "ISC2 CC Domain 3", description: "Access Controls Concepts: Physical and logical access controls and identity management.", imagePath: "/images/isc2_domain_3_competency.webp" },
        { title: "ISC2 CC Domain 4", description: "Network Security: Computer networking concepts and securing network architectures.", imagePath: "/images/isc2_domain_4_competency.webp" },
        { title: "ISC2 CC Domain 5", description: "Security Operations: Data security, system hardening, and security policies.", imagePath: "/images/isc2_domain_5_competency.webp" }
      ],
      eventList: [
        { title: "BBTS Hackathon", description: "Participation and project deployment in the Banco do Brasil Tecnologia e Serviços competitive hackathon.", imagePath: "/images/certs/BBTS_hackathon.png" },
        { title: "Ideathon — Maratona de Ideias", description: "Certificate of participation and collaborative solution structuring in the Ideathon innovation marathon.", imagePath: "/images/Heitor Quental Feitosa Kehrle do Amaral-1.webp" }
      ],
      otherList: [
        { title: "Microsoft Azure AI Fundamentals", description: "Foundational certification validating knowledge of machine learning and artificial intelligence concepts.", imagePath: "/images/certs/AI-900.png" },
        { title: "Cambridge C1 Advanced English", description: "High-level English proficiency certification demonstrating language ability for complex professional environments.", imagePath: "/images/certs/C1_english.png" }
      ]
    },
    contact: {
      title: "Initiate Connection",
      subtitle: "Interested in discussing infrastructure, security, or deploying new models? Open a secure channel below.",
      namePlaceholder: "Identity / Name",
      emailPlaceholder: "Return Address / Email",
      messagePlaceholder: "Payload / Message",
      submitBtn: "Transmit Payload",
      submittingBtn: "Transmitting...",
      successTitle: "Payload Delivered.",
      successDesc: "Your transmission has been received. I will establish contact shortly.",
      error: "Transmission failed. Please verify your connection and try again."
    },
    footer: {
      builtBy: "Built by Heitor Quental.",
      cvLabel: "Curriculum Vitae"
    }
  },

  pt: {
    hero: {
      subtitle: "Engenharia de pipelines de IA, plataformas full-stack e automação Linux.",
      cta: "Inicializar Protocolo"
    },
    about: {
      title: "Protocolo do Sistema",
      p1: "Estudante de Sistemas de Informação na UFRPE. Meu foco profissional está diretamente na convergência entre inteligência artificial e cibersegurança—desenvolvendo sistemas locais e seguros com métricas e benchmarks mensuráveis.",
      p2: "Desenvolvo aplicações de software utilizando Python, Ruby on Rails, SQL, PostgreSQL, React e Vite, operando diariamente em ambientes Linux Mint e Kali Linux.",
      p3: "Certificado em Microsoft Azure AI Fundamentals com status ativo de ISC2 Candidate."
    },
    projects: {
      title: "Arquiteturas Implementadas",
      subtitle: "Projetos em produção destacando minha stack técnica.",
      repoBtn: "Ver Repositório",
      items: [
        {
          title: "Buffet Brain",
          stack: "REDES NEURAIS LSTM | ANÁLISE DE SÉRIES TEMPORAIS",
          description: "Classificador de perfil de investidor integrando classificação de risco e projeções temporais para justificar estratégias de alocação de carteira.",
          imagePath: "/images/buffet-brain.webp",
          repoLink: "https://github.com/Quentalheitor/Buffet_Brain"
        },
        {
          title: "Jarvis",
          stack: "PYTHON | INTEGRAÇÃO DE APIS EXTERNAS",
          description: "Framework automatizado que executa integrações com APIs externas via comandos de voz. Conta com ciclos completos de comando-resposta e telemetria no terminal.",
          imagePath: "/images/jarvis.webp",
          repoLink: "https://github.com/Quentalheitor/Jarvis-project"
        },
        {
          title: "Glysera",
          stack: "RUBY ON RAILS | REACT | VITE",
          description: "Sistema full-stack para gestão em saúde focado no rastreamento de prontuários, logística de insumos médicos e operações de unidades de saúde via API segura.",
          imagePath: "/images/Glysera.webp",
          repoLink: "https://github.com/Quentalheitor/Glysera_backend"
        },
        {
          title: "Whisper Transcriber",
          stack: "TORCH | PULSEAUDIO | MODELO WHISPER | CUDA",
          description: "Aplicação autônoma para transcrição de áudio com calibração de ruído ambiente, processada 100% localmente em hardware CUDA usando o modelo Whisper small.",
          imagePath: "/images/transcriptor.webp",
          repoLink: "https://github.com/Quentalheitor/Whisper_Transcriber"
        }
      ]
    },
    operations: {
      title: "Operações Ativas",
      subtitle: "Projetos em andamento, estudos e direcionamento acadêmico.",
      lastUpdated: "Última Atualização: 8 de Setembro de 2026",
      tasks: [
        {
          category: "Conquista Recente",
          title: "Trilhas de IA e ML da FlyRank",
          detail: "Conclusão das trilhas de Machine Learning e AI Fluency no estágio na FlyRank, adquirindo experiência prática em desenvolvimento de IA e implementação corporativa de ML."
        },
        {
          category: "Projeto",
          title: "On med",
          detail: "Desenvolvimento de plataforma em Ruby on Rails e React para coordenadores hospitalares em Recife, centralizando perfis de enfermagem e disponibilidade em tempo real."
        },
        {
          category: "Engenharia de UI/UX",
          title: "Modernização do Portfólio",
          detail: "Concepção e implementação de interfaces modernas e fluxos de usuário aprimorados para o Transcritor, Buffet Brain e Jarvis."
        },
        {
          category: "Certificação",
          title: "Exame ISC2 CC",
          detail: "Preparação intensiva para o exame oficial ISC2 Certified in Cybersecurity (CC), agendado para 21 de setembro."
        },
        {
          category: "Cursos",
          title: "Ecossistema Anthropic Claude",
          detail: "Conclusão de cursos de integração voltados para Claude na Amazon Bedrock, Claude no Google Cloud Vertex AI e desenvolvimento com a API Claude."
        },
        {
          category: "Cursos",
          title: "Arquitetura Python Avançada",
          detail: "50% de conclusão do curso 'Python 3 do básico ao avançado - com projetos reais' por Luiz Otávio Miranda."
        },
        {
          category: "Pesquisa",
          title: "Sistemas de IA e Machine Learning",
          detail: "Pesquisa contínua em arquiteturas de redes neurais, algoritmos de machine learning, práticas de ciência de dados e fluxos de trabalho com IA aplicada."
        }
      ]
    },
    certs: {
      title: "Credenciais & Validação",
      subtitle: "Proficiências comprovadas, formações concluídas e conquistas acadêmicas.",
      modalClose: "FECHAR",
      modalSubtitle: (count) => `${count} certificações e implementações verificadas.`,
      groups: {
        anthropic: {
          title: (count) => `Certificados Anthropic (${count})`,
          desc: "Coleção abrangente de certificações Anthropic cobrindo o ecossistema Claude, engenharia de prompt, agent skills e o framework AI Fluency. Clique para ver todos.",
          modalTitle: "Coleção Anthropic"
        },
        flyrank: {
          title: (count) => `Estágio FlyRank (${count})`,
          desc: "Carta de recomendação oficial e certificados de conclusão em inteligência artificial aplicada e machine learning durante o estágio na FlyRank. Clique para ver todos.",
          modalTitle: "Documentos e Recomendação - FlyRank"
        },
        senac: {
          title: (count) => `Certificações Senac (${count})`,
          desc: "Formações em desenvolvimento de software cobrindo arquiteturas front-end, back-end e lógica de programação. Clique para ver todos.",
          modalTitle: "Qualificações Senac"
        },
        isc2: {
          title: (count) => `Competências ISC2 (${count})`,
          desc: "Proficiência operacional em segurança da informação cobrindo 5 domínios fundamentais. Clique para ver todos.",
          modalTitle: "Domínios de Competência ISC2"
        },
        events: {
          title: (count) => `Hackathons & Eventos (${count})`,
          desc: "Projetos competitivos e resolução prática de problemas em eventos tecnológicos. Clique para ver todos.",
          modalTitle: "Hackathons, Ideathons & Eventos"
        }
      },
      anthropicList: [
        { title: "Anthropic Claude 101", description: "Treinamento fundamental cobrindo o ecossistema Claude, engenharia de prompt e implementação de LLMs.", imagePath: "/images/certs/Heitor_Quental_Claude_101_certificate.png" },
        { title: "Anthropic Claude Code 101", description: "Treinamento técnico sobre implementação e geração de código utilizando a API do Claude.", imagePath: "/images/certs/Heitor_Quental_Claude_Code_101_certificate.png" },
        { title: "Anthropic Claude Code in Action", description: "Aplicação prática e implantação de códigos gerados através dos modelos Claude da Anthropic.", imagePath: "/images/certs/Heitor_Quental_Claude_Code_in_Action.png" },
        { title: "Anthropic Claude Platform 101", description: "Visão abrangente do console de desenvolvedores e recursos da plataforma da Anthropic.", imagePath: "/images/certs/Heitor_Quental_Claude_Platform_101.png" },
        { title: "Anthropic: Intro to Agent Skills", description: "Capacitação em habilidades customizadas e ferramentas externas para agentes autônomos de IA.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_agent_skills.png" },
        { title: "Anthropic: Intro to Claude Cowork", description: "Integração do Claude como parceiro cognitivo em fluxos de trabalho empresariais.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_Claude_Cowork.png" },
        { title: "Anthropic: Intro to Subagents", description: "Arquitetura de sistemas multiagentes delegando tarefas complexas para subagentes especializados.", imagePath: "/images/certs/Heitor_Quental_Introduction_to_subagents.png" },
        { title: "Intro to Model Context Protocol", description: "Introdução à arquitetura de integrações seguras e escaláveis com Model Context Protocol.", imagePath: "/images/certs/Heitor_Amaral_Introduction_to_model_context_protocol.png" },
        { title: "Model Context Protocol: Advanced", description: "Implementação avançada do Model Context Protocol para conexão segura com fontes de dados.", imagePath: "/images/certs/Heitor_Quental_Model_Context_Protocol:_Advanced_Topics.png" },
        { title: "AI Fluency: Capabilities & Limitations", description: "Estrutura para compreender as capacidades realistas e limitações de sistemas modernos de IA.", imagePath: "/images/certs/AI_Fluency:_AI_Capabilities__Limitations.png" },
        { title: "AI Fluency Certificate", description: "Certificação central cobrindo conceitos fundamentais e operacionais de fluência em IA.", imagePath: "/images/certs/Heitor_Amaral_AI_Fluency_certificate.png" },
        { title: "AI Fluency for Builders", description: "Diretrizes práticas voltadas para engenheiros de software e desenvolvedores de produtos com IA.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_builders.png" },
        { title: "AI Fluency for Educators", description: "Metodologias de implantação de fluxos de trabalho e ferramentas de IA no setor educacional.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_educators.png" },
        { title: "AI Fluency for Nonprofits", description: "Estratégias de expansão de capacidade operacional via IA para organizações sem fins lucrativos.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_nonprofits.png" },
        { title: "AI Fluency for Small Businesses", description: "Frameworks para automação e escalabilidade de pequenas e médias empresas com IA.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_small_businesses.png" },
        { title: "AI Fluency for Students", description: "Técnicas de aceleração acadêmica e assistência em pesquisa utilizando IA.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_For_Students_certificate.png" },
        { title: "Teaching the AI Fluency Framework", description: "Metodologias para treinamento de equipes e clientes no framework de fluência em IA.", imagePath: "/images/certs/Heitor_Quental_Teaching_the_AI_Fluency_Framework.png" }
      ],
      flyrankList: [
        {
          title: "Carta de Recomendação FlyRank",
          description: "Carta executiva de recomendação do CEO da FlyRank detalhando contribuições em inteligência artificial aplicada, desempenho de engenharia e ética de trabalho.",
          imagePath: [
            "/images/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-1.webp",
            "/images/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-2.webp"
          ]
        },
        {
          title: "FlyRank AI Fluency",
          description: "Certificado de conclusão em fluência de inteligência artificial aplicada e integração empresarial.",
          imagePath: "/images/certs/flyrank-certificate-of-completion-ai-fluency.png"
        },
        {
          title: "FlyRank Machine Learning",
          description: "Certificado de conclusão focado em implementação de modelos de machine learning.",
          imagePath: "/images/certs/flyrank-certificate-of-completion_ML.png"
        }
      ],
      senacList: [
        { title: "Senac Desenvolvimento Web Fullstack", description: "Formação abrangente em arquiteturas de desenvolvimento web front-end e back-end.", imagePath: "/images/certs/Fullstack_senac.png" },
        { title: "Senac Lógica de Programação", description: "Formação fundamental em lógica de programação e estruturação de algoritmos.", imagePath: "/images/certs/Logic_senac.png" }
      ],
      isc2List: [
        { title: "ISC2 CC Domínio 1", description: "Princípios de Segurança: Fundamentos de segurança, gestão de riscos e controles de segurança.", imagePath: "/images/isc2_domain_1_competency.webp" },
        { title: "ISC2 CC Domínio 2", description: "Continuidade de Negócios (BC), Recuperação de Desastres (DR) e Conceitos de Resposta a Incidentes.", imagePath: "/images/isc2_domain_2_competency.webp" },
        { title: "ISC2 CC Domínio 3", description: "Conceitos de Controle de Acesso: Controles de acesso físico e lógico e gestão de identidade.", imagePath: "/images/isc2_domain_3_competency.webp" },
        { title: "ISC2 CC Domínio 4", description: "Segurança de Redes: Conceitos de redes de computadores e proteção de arquiteturas de rede.", imagePath: "/images/isc2_domain_4_competency.webp" },
        { title: "ISC2 CC Domínio 5", description: "Operações de Segurança: Segurança de dados, hardening de sistemas e políticas de segurança.", imagePath: "/images/isc2_domain_5_competency.webp" }
      ],
      eventList: [
        { title: "Hackathon BBTS", description: "Participação e implementação de projeto no hackathon competitivo do Banco do Brasil Tecnologia e Serviços.", imagePath: "/images/certs/BBTS_hackathon.png" },
        { title: "Ideathon — Maratona de Ideias", description: "Certificado de participação e estruturação de soluções colaborativas na maratona de inovação Ideathon.", imagePath: "/images/certs/Heitor Quental Feitosa Kehrle do Amaral-1.webp" }
      ],
      otherList: [
        { title: "Microsoft Azure AI Fundamentals", description: "Certificação fundamental validando conhecimentos em conceitos de inteligência artificial e machine learning.", imagePath: "/images/certs/AI-900.png" },
        { title: "Cambridge C1 Advanced English", description: "Certificação de proficiência avançada em inglês demonstrando domínio para ambientes profissionais complexos.", imagePath: "/images/certs/C1_english.png" }
      ]
    },
    contact: {
      title: "Iniciar Conexão",
      subtitle: "Interessado em discutir infraestrutura, segurança ou implementação de novos modelos? Abra um canal seguro abaixo.",
      namePlaceholder: "Identidade / Nome",
      emailPlaceholder: "Endereço de Retorno / E-mail",
      messagePlaceholder: "Mensagem / Payload",
      submitBtn: "Transmitir Payload",
      submittingBtn: "Transmitindo...",
      successTitle: "Payload Entregue.",
      successDesc: "Sua transmissão foi recebida com sucesso. Retornarei o contato em breve.",
      error: "Falha na transmissão. Verifique sua conexão e tente novamente."
    },
    footer: {
      builtBy: "Desenvolvido por Heitor Quental.",
      cvLabel: "Currículo (CV)"
    }
  }
};

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

        <SocialLink href="/heitor_quental_cv.pdf">
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
