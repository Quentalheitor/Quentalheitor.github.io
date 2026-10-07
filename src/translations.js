export const translations = {
  en: {
    hero: {
      subtitle: "Engineering AI pipelines, ML systems, and secure backend architectures.",
      cta: "Initialize Protocol"
    },
    about: {
      title: "System Protocol",
      p1: "Information Systems student at UFRPE (3rd academic term, GPA 9.10/10 - top 3.19% of class). My professional focus centers on the intersection of Machine Learning engineering, applied AI, and cybersecurity, building robust, auditable architectures backed by empirical benchmarks.",
      p2: "Experienced in end-to-end ML pipelines and backend systems utilizing Python, FastAPI, Pydantic v2, DuckDB, Scikit-Learn, PyTorch, Docker, PostgreSQL, React, and Vite, operating daily within Linux Mint and Kali Linux environments.",
      p3: "Credentialed in ISC2 Certified in Cybersecurity (CC) and Microsoft Azure AI Fundamentals (AI-900), with 17 verified Anthropic Academy certifications."
    },
    projects: {
      title: "Deployed Architecture",
      subtitle: "Production architectures, ML pipelines, and security tooling.",
      repoBtn: "View Repository",
      items: [
        {
          title: "Endpoint Arbiter",
          stack: "PYTHON | FASTAPI | PYDANTIC V2 | DUCKDB | OCSF 1.3",
          description: "SOC alert triage engine with an architectural trust boundary: a quarantined extractor reads attacker text emitting solely strict enums, while a privileged arbiter enforces 5 invariants against indirect prompt injection over OCSF 1.3 telemetry.",
          imagePath: "/images/endpoint-arbiter-demo.webp",
          repoLink: "https://github.com/Quentalheitor/endpoint-arbiter"
        },
        {
          title: "Beyond the Backlink",
          stack: "SCIKIT-LEARN | PANDAS | DUCKDB | GROUP SHUFFLE SPLIT",
          description: "Predictive ML pipeline and audit evaluating 176,568 production pages (79M rows in Parquet) against LLM citation traffic leakage using Group Shuffle Split, ROC-AUC, and interpretable reason codes.",
          imagePath: "/images/beyond-the-backlink.webp",
          repoLink: "https://github.com/Quentalheitor/Flyrank-ML-Track"
        },
        {
          title: "Buffet Brain",
          stack: "LSTM NEURAL NETWORKS | TIME-SERIES ANALYSIS | FLASK",
          description: "Autonomous investor risk classification and asset allocation engine utilizing an LSTM network trained on 10 years of market data with integrated LLM investment thesis synthesis.",
          imagePath: "/images/buffet-brain.webp",
          repoLink: "https://github.com/Quentalheitor/Buffet_Brain"
        },
        {
          title: "Glysera",
          stack: "FASTAPI | SQLMODEL | REACT | POSTGRESQL | SUPABASE",
          description: "Healthcare logistics and resource tracking platform featuring strict data constraints, CPF validation, secure JWT auth, and an interactive equipment allocation dashboard.",
          imagePath: "/images/Glysera.webp",
          repoLink: "https://github.com/Quentalheitor/Glysera_backend"
        },
        {
          title: "Jarvis",
          stack: "PYTHON | DOCKER | LINUX | PYAUTOGUI | XVFB",
          description: "Containerized, headless Linux virtual voice assistant framework delivering sub-350ms command execution, OS telemetry, and external API integrations.",
          imagePath: "/images/jarvis.webp",
          repoLink: "https://github.com/Quentalheitor/Jarvis-project"
        },
        {
          title: "Whisper Transcriber",
          stack: "PYTORCH | OPENAI WHISPER | SPEECHRECOGNITION | CUDA",
          description: "High-performance local speech transcription engine featuring dynamic noise threshold calibration and GPU-accelerated acoustic decoding.",
          imagePath: "/images/transcriptor.webp",
          repoLink: "https://github.com/Quentalheitor/Whisper_Transcriber"
        }
      ]
    },
    operations: {
      title: "Active Operations",
      subtitle: "Current deployments, coursework, and academic focus.",
      lastUpdated: "Last Updated: October 6, 2026",
      tasks: [
        {
          category: "Research & Development",
          title: "Endpoint Arbiter (Phase 2 & 3)",
          detail: "Engineering Phase 2 of Endpoint Arbiter, expanding the Sigma rule engine, calibrating ML alert classifiers, and preparing the public benchmark for SOC defensive evaluation."
        },
        {
          category: "Latest Accomplishment",
          title: "FlyRank AI Internship Completed",
          detail: "Successfully completed 420h across 3 tracks (Machine Learning, Backend AI Engineering, and AI Fluency) with 4/4 accepted capstones, 44 practical tasks, and formal executive recommendation by CEO Alen Malkoc."
        },
        {
          category: "Certification Attained",
          title: "ISC2 Certified in Cybersecurity (CC)",
          detail: "Officially certified and designated as an active ISC2 member (Certificate #4079917, valid through Sep 2029) covering security governance, network defense, access control, and incident response."
        },
        {
          category: "Academic Term",
          title: "UFRPE - 3rd Academic Period",
          detail: "Advancing in the Bachelor of Information Systems at UFRPE, maintaining a cumulative GPA of 9.10/10 (top 3.19% ranking) with focus on algorithms, computer architecture, and systems theory."
        },
        {
          category: "Applied Engineering",
          title: "Event-Driven & Agentic Systems",
          detail: "Designing asynchronous orchestration workflows with FastAPI, Inngest, DuckDB, and Model Context Protocol (MCP) servers for robust, rate-limited multi-agent execution."
        }
      ]
    },
    certs: {
      title: "Credentials & Validation",
      subtitle: "Verified proficiencies, completed pathways, and academic achievements.",
      modalClose: "CLOSE",
      modalSubtitle: (count) => `${count} verified framework and implementation certificates.`,
      groups: {
        isc2: {
          title: (count) => `ISC2 Certification (${count})`,
          desc: "Official Certified in Cybersecurity (CC) credential and domain competencies across core security principles, IAM, and incident response. Click to view.",
          modalTitle: "ISC2 Cybersecurity Credentials"
        },
        flyrank: {
          title: (count) => `FlyRank AI Internship (${count})`,
          desc: "Official executive letter of recommendation, Backend AI Engineering certificate, and ML Track graduation documents. Click to view all.",
          modalTitle: "FlyRank Internship Documents & Credentials"
        },
        anthropic: {
          title: (count) => `Anthropic Academy (${count})`,
          desc: "A verified collection of 17 Anthropic certifications covering Claude ecosystems, MCP, agent skills, subagents, and AI Fluency frameworks. Click to view all.",
          modalTitle: "Anthropic Collection"
        },
        senac: {
          title: (count) => `Senac Certifications (${count})`,
          desc: "Software development training spanning front-end, back-end, and logical programming architectures. Click to view all.",
          modalTitle: "Senac Qualifications"
        },
        events: {
          title: (count) => `Hackathons & Events (${count})`,
          desc: "Competitive deployments and practical problem-solving events. Click to view all.",
          modalTitle: "Hackathons, Ideathons & Events"
        }
      },
      isc2List: [
        { 
          title: "ISC2 Certified in Cybersecurity (CC)", 
          description: "Official credential awarded by the ISC2 Board of Directors (Cert #4079917). Validates fundamental security operations, access controls, network defense, and incident response.", 
          imagePath: "/images/certs/CC_cert_isc2.webp" 
        },
        { title: "ISC2 CC Domain 1", description: "Security Principles: Foundation of security concepts, risk management, and security controls.", imagePath: "/images/isc2_domain_1_competency.webp" },
        { title: "ISC2 CC Domain 2", description: "Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts.", imagePath: "/images/isc2_domain_2_competency.webp" },
        { title: "ISC2 CC Domain 3", description: "Access Controls Concepts: Physical and logical access controls and identity management.", imagePath: "/images/isc2_domain_3_competency.webp" },
        { title: "ISC2 CC Domain 4", description: "Network Security: Computer networking concepts and securing network architectures.", imagePath: "/images/isc2_domain_4_competency.webp" },
        { title: "ISC2 CC Domain 5", description: "Security Operations: Data security, system hardening, and security policies.", imagePath: "/images/isc2_domain_5_competency.webp" }
      ],
      flyrankList: [
        {
          title: "FlyRank Recommendation Letter",
          description: "Official executive letter of recommendation from FlyRank's CEO detailing applied AI contributions, 420h logged, and engineering performance.",
          imagePath: [
            "/images/certs/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-1.webp",
            "/images/certs/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-2.webp"
          ]
        },
        {
          title: "FlyRank Backend AI Engineering",
          description: "Certificate of completion for the Backend AI Engineering Internship Program covering FastAPI, Docker Compose, LLM eval suites, and Supabase auth (ID: FR-D11-2A718-D278D).",
          imagePath: "/images/certs/flyrank-certificate-of-completion-backend-ai-engineering.webp"
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
      senacList: [
        { title: "Senac Fullstack Web Development", description: "Comprehensive training in front-end and back-end web development architectures.", imagePath: "/images/certs/Fullstack_senac.png" },
        { title: "Senac Logic Programming", description: "Foundational training in programming logic and algorithm structuring.", imagePath: "/images/certs/Logic_senac.png" }
      ],
      eventList: [
        { title: "BBTS Hackathon", description: "Participation and project deployment in the Banco do Brasil Tecnologia e Serviços competitive hackathon.", imagePath: "/images/certs/BBTS_hackathon.png" },
        { 
          title: "Ideathon - Maratona de Ideias", 
          description: "Certificate of participation and winner award voucher for collaborative innovation and solution structuring in the Ideathon marathon.", 
          imagePath: [
            "/images/Heitor Quental Feitosa Kehrle do Amaral-1.webp",
            "/images/6992ed8b-82c1-4532-9509-1318af7905c8.webp"
          ]
        }
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
      subtitle: "Engenharia de pipelines de IA, sistemas de ML e arquiteturas backend seguras.",
      cta: "Inicializar Protocolo"
    },
    about: {
      title: "Protocolo do Sistema",
      p1: "Estudante de Sistemas de Informação na UFRPE (3.º período, Média Geral 9,10/10 - top 3,19% do curso). Meu foco profissional concentra-se na convergência entre Engenharia de Machine Learning, IA aplicada e segurança da informação, construindo arquiteturas auditáveis e seguras sustentadas por benchmarks empíricos.",
      p2: "Experiência prática em pipelines de ML ponta a ponta e sistemas backend com Python, FastAPI, Pydantic v2, DuckDB, Scikit-Learn, PyTorch, Docker, PostgreSQL, React e Vite, atuando diariamente em ambientes Linux Mint e Kali Linux.",
      p3: "Certificado pelo ISC2 em Certified in Cybersecurity (CC) e Microsoft Azure AI Fundamentals (AI-900), com 17 cursos verificados na Anthropic Academy."
    },
    projects: {
      title: "Arquiteturas Implementadas",
      subtitle: "Projetos em produção, pipelines de ML e soluções defensivas.",
      repoBtn: "Ver Repositório",
      items: [
        {
          title: "Endpoint Arbiter",
          stack: "PYTHON | FASTAPI | PYDANTIC V2 | DUCKDB | OCSF 1.3",
          description: "Motor de triagem de alertas de SOC com fronteira de confiança arquitetural: um extrator em quarentena lê o texto do invasor e emite estritamente enums/flags, enquanto um árbitro privilegiado impõe 5 invariantes contra prompt injection indireta sobre telemetria OCSF 1.3.",
          imagePath: "/images/endpoint-arbiter-demo.webp",
          repoLink: "https://github.com/Quentalheitor/endpoint-arbiter"
        },
        {
          title: "Beyond the Backlink",
          stack: "SCIKIT-LEARN | PANDAS | DUCKDB | GROUP SHUFFLE SPLIT",
          description: "Pipeline de ML e auditoria preditiva sobre 176.568 páginas de produção (79M de linhas em Parquet) com validação agrupada contra data leakage, ROC-AUC, Precision@K e interpretabilidade por reason codes.",
          imagePath: "/images/beyond-the-backlink.webp",
          repoLink: "https://github.com/Quentalheitor/Flyrank-ML-Track"
        },
        {
          title: "Buffet Brain",
          stack: "REDES NEURAIS LSTM | ANÁLISE TEMPORAL | FLASK",
          description: "Classificador autônomo de perfil de investidor integrando rede LSTM sobre 10 anos de histórico da B3, cálculo de tolerância a risco e teses de investimento fundamentadas por LLM.",
          imagePath: "/images/buffet-brain.webp",
          repoLink: "https://github.com/Quentalheitor/Buffet_Brain"
        },
        {
          title: "Glysera",
          stack: "FASTAPI | SQLMODEL | REACT | POSTGRESQL | SUPABASE",
          description: "Sistema de gestão em saúde com validação de CPF, integridade referencial, autenticação segura JWT e dashboard React para busca e alocação de equipamentos hospitalares.",
          imagePath: "/images/Glysera.webp",
          repoLink: "https://github.com/Quentalheitor/Glysera_backend"
        },
        {
          title: "Jarvis",
          stack: "PYTHON | DOCKER | LINUX | PYAUTOGUI | XVFB",
          description: "Assistente virtual autônomo para desktop Linux com despacho de comandos por voz abaixo de 350ms e execução headless em ambiente totalmente containerizado.",
          imagePath: "/images/jarvis.webp",
          repoLink: "https://github.com/Quentalheitor/Jarvis-project"
        },
        {
          title: "Whisper Transcriber",
          stack: "PYTORCH | OPENAI WHISPER | SPEECHRECOGNITION | CUDA",
          description: "Aplicação autônoma para transcrição de áudio com calibração de ruído ambiente, processada 100% localmente em hardware CUDA usando o modelo Whisper small.",
          imagePath: "/images/transcriptor.webp",
          repoLink: "https://github.com/Quentalheitor/Whisper_Transcriber"
        }
      ]
    },
    operations: {
      title: "Operações Ativas",
      subtitle: "Projetos em andamento, estudos e direcionamento acadêmico.",
      lastUpdated: "Última Atualização: 6 de Outubro de 2026",
      tasks: [
        {
          category: "Pesquisa & Desenvolvimento",
          title: "Endpoint Arbiter (Fase 2 & 3)",
          detail: "Desenvolvimento da Fase 2 do Endpoint Arbiter, implementando motor de regras Sigma, calibração do classificador de ML para alertas de SOC e preparação de benchmark público."
        },
        {
          category: "Conquista Recente",
          title: "Conclusão de Estágio na FlyRank AI",
          detail: "Conclusão de 420h de estágio nas 3 trilhas (Machine Learning, Backend AI Engineering e AI Fluency) com 4/4 capstones aprovados, 44 entregas práticas e carta executiva de recomendação do CEO Alen Malkoc."
        },
        {
          category: "Certificação Oficial",
          title: "ISC2 Certified in Cybersecurity (CC)",
          detail: "Aprovação e credenciamento oficial como membro do ISC2 (Certificado nº 4079917, ciclo até set/2029), validando governança de segurança, resposta a incidentes e proteção de redes."
        },
        {
          category: "Formação Acadêmica",
          title: "UFRPE - 3.º Período Letivo",
          detail: "Avanço no Bacharelado em Sistemas de Informação na UFRPE, mantendo Coeficiente de Rendimento de 9,10/10 (top 3,19% do curso) com ênfase em teoria da computação e arquitetura de software."
        },
        {
          category: "Engenharia Aplicada",
          title: "Sistemas Event-Driven & Multiagentes",
          detail: "Desenvolvimento de fluxos assíncronos e orquestração de microsserviços com FastAPI, Inngest, DuckDB e Model Context Protocol (MCP) para execução robusta e com controle de taxas."
        }
      ]
    },
    certs: {
      title: "Credenciais & Validação",
      subtitle: "Proficiências comprovadas, formações concluídas e conquistas acadêmicas.",
      modalClose: "FECHAR",
      modalSubtitle: (count) => `${count} certificações e implementações verificadas.`,
      groups: {
        isc2: {
          title: (count) => `Certificação ISC2 (${count})`,
          desc: "Credencial oficial Certified in Cybersecurity (CC) e competências nos 5 domínios essenciais de segurança da informação e governança. Clique para ver todos.",
          modalTitle: "Credenciais ISC2 de Cibersegurança"
        },
        flyrank: {
          title: (count) => `Estágio FlyRank AI (${count})`,
          desc: "Carta executiva de recomendação, certificado em Backend AI Engineering e documentos de conclusão da trilha de Machine Learning. Clique para ver todos.",
          modalTitle: "Documentos e Certificados - FlyRank AI"
        },
        anthropic: {
          title: (count) => `Anthropic Academy (${count})`,
          desc: "Coleção de 17 certificações verificadas da Anthropic cobrindo o ecossistema Claude, MCP, agent skills, subagentes e AI Fluency. Clique para ver todos.",
          modalTitle: "Coleção Anthropic"
        },
        senac: {
          title: (count) => `Certificações Senac (${count})`,
          desc: "Formações em desenvolvimento de software cobrindo arquiteturas front-end, back-end e lógica de programação. Clique para ver todos.",
          modalTitle: "Qualificações Senac"
        },
        events: {
          title: (count) => `Hackathons & Eventos (${count})`,
          desc: "Projetos competitivos e resolução prática de problemas em eventos tecnológicos. Clique para ver todos.",
          modalTitle: "Hackathons, Ideathons & Eventos"
        }
      },
      isc2List: [
        { 
          title: "ISC2 Certified in Cybersecurity (CC)", 
          description: "Certificação profissional oficial emitida pelo Conselho Diretor do ISC2 (Certificado nº 4079917), validando princípios de segurança, controle de acesso e defesa cibernética.", 
          imagePath: "/images/certs/CC_cert_isc2.webp" 
        },
        { title: "ISC2 CC Domínio 1", description: "Princípios de Segurança: Fundamentos de segurança, gestão de riscos e controles de segurança.", imagePath: "/images/isc2_domain_1_competency.webp" },
        { title: "ISC2 CC Domínio 2", description: "Continuidade de Negócios (BC), Recuperação de Desastres (DR) e Conceitos de Resposta a Incidentes.", imagePath: "/images/isc2_domain_2_competency.webp" },
        { title: "ISC2 CC Domínio 3", description: "Conceitos de Controle de Acesso: Controles de acesso físico e lógico e gestão de identidade.", imagePath: "/images/isc2_domain_3_competency.webp" },
        { title: "ISC2 CC Domínio 4", description: "Segurança de Redes: Conceitos de redes de computadores e proteção de arquiteturas de rede.", imagePath: "/images/isc2_domain_4_competency.webp" },
        { title: "ISC2 CC Domínio 5", description: "Operações de Segurança: Segurança de dados, hardening de sistemas e políticas de segurança.", imagePath: "/images/isc2_domain_5_competency.webp" }
      ],
      flyrankList: [
        {
          title: "Carta de Recomendação FlyRank",
          description: "Carta executiva de recomendação do CEO da FlyRank detalhando contribuições em inteligência artificial aplicada, 420h registradas e desempenho de engenharia.",
          imagePath: [
            "/images/certs/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-1.webp",
            "/images/certs/flyrank-recommendation-letter-2cc4c222-cfa1-4a6d-9167-0d79d060c49c-2.webp"
          ]
        },
        {
          title: "FlyRank Backend AI Engineering",
          description: "Certificado de conclusão da trilha Backend AI Engineering cobrindo FastAPI, Docker Compose, triagem com LLM, evals e autenticação JWT (ID: FR-D11-2A718-D278D).",
          imagePath: "/images/certs/flyrank-certificate-of-completion-backend-ai-engineering.webp"
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
        { title: "AI Fluency for Small Businesses", description: "Capacitação para automação e escalabilidade de processos empresariais com IA.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_for_small_businesses.png" },
        { title: "AI Fluency for Students", description: "Uso estratégico de IA generativa para pesquisa acadêmica e aceleração de aprendizagem.", imagePath: "/images/certs/Heitor_Quental_AI_Fluency_For_Students_certificate.png" },
        { title: "Teaching the AI Fluency Framework", description: "Metodologias de capacitação de equipes e clientes no framework de AI Fluency.", imagePath: "/images/certs/Heitor_Quental_Teaching_the_AI_Fluency_Framework.png" }
      ],
      senacList: [
        { title: "Senac Fullstack Web Development", description: "Formação completa em arquiteturas web front-end e back-end.", imagePath: "/images/certs/Fullstack_senac.png" },
        { title: "Senac Lógica de Programação", description: "Fundamentos de lógica algorítmica e estruturas de dados essenciais.", imagePath: "/images/certs/Logic_senac.png" }
      ],
      eventList: [
        { title: "Hackathon'Play BBTS", description: "Participação e desenvolvimento de projeto competitivo no hackathon do BB Tecnologia e Serviços.", imagePath: "/images/certs/BBTS_hackathon.png" },
        { 
          title: "Ideathon - Maratona de Ideias", 
          description: "Certificado de participação e premiação pelo projeto cultconnect / Canto do Bem no congresso Sesc.", 
          imagePath: [
            "/images/Heitor Quental Feitosa Kehrle do Amaral-1.webp",
            "/images/6992ed8b-82c1-4532-9509-1318af7905c8.webp"
          ]
        }
      ],
      otherList: [
        { title: "Microsoft Azure AI Fundamentals (AI-900)", description: "Certificação internacional validando conceitos de inteligência artificial e serviços cognitivos em nuvem.", imagePath: "/images/certs/AI-900.png" },
        { title: "Inglês C1 Avançado (Cultura Inglesa)", description: "Proficiência linguística em nível avançado C1 para comunicação técnica e ambientes globais.", imagePath: "/images/certs/C1_english.png" }
      ]
    },
    contact: {
      title: "Iniciar Conexão",
      subtitle: "Interessado em discutir infraestrutura, segurança ou implantação de novos modelos? Abra um canal seguro abaixo.",
      namePlaceholder: "Identidade / Nome",
      emailPlaceholder: "Endereço de Retorno / Email",
      messagePlaceholder: "Payload / Mensagem",
      submitBtn: "Transmitir Payload",
      submittingBtn: "Transmitindo...",
      successTitle: "Payload Entregue.",
      successDesc: "Sua transmissão foi recebida. Entrarei em contato em breve.",
      error: "Falha na transmissão. Verifique sua conexão e tente novamente."
    },
    footer: {
      builtBy: "Desenvolvido por Heitor Quental.",
      cvLabel: "Curriculum Vitae"
    }
  }
};
