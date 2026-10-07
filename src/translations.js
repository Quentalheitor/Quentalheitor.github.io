export const translations = {
  en: {
    hero: {
      subtitle: "Engineering AI pipelines, ML systems, and secure backend architectures.",
      cta: "Initialize Protocol"
    },
    about: {
      title: "System Protocol",
      p1: "Information Systems student at UFRPE (3rd academic term, GPA 9.10/10, top 3.19% of class). My professional focus centers on the intersection of Machine Learning engineering, applied AI, and cybersecurity building robust, auditable architectures backed by empirical benchmarks.",
      p2: "Experienced in end-to-end ML pipelines and backend systems utilizing Python, FastAPI, Pydantic v2, DuckDB, Scikit-Learn, PyTorch, Docker, PostgreSQL, React, and Vite, operating daily within Linux Mint and Kali Linux environments.",
      p3: "Credentialed in ISC2 Certified in Cybersecurity (CC) and Microsoft Azure AI Fundamentals (AI-900), with 17 verified Anthropic Academy certifications."
    },
    projects: {
      title: "Deployed Architecture",
      subtitle: "Production architectures, ML pipelines, and security tooling.",
      repoBtn: "View Repository",
      expandHint: "Click to inspect telemetry",
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
          category: "Research and Development",
          title: "Endpoint Arbiter (Phase 2 and 3)",
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
          title: "UFRPE: 3rd Academic Period",
          detail: "Advancing in the Bachelor of Information Systems at UFRPE, maintaining a cumulative GPA of 9.10/10 (top 3.19% ranking) with focus on algorithms, computer architecture, and systems theory."
        },
        {
          category: "Applied Engineering",
          title: "Event-Driven and Agentic Systems",
          detail: "Designing asynchronous orchestration workflows with FastAPI, Inngest, DuckDB, and Model Context Protocol (MCP) servers for robust, rate-limited multi-agent execution."
        }
      ]
    },
    certs: {
      title: "Credentials and Validation",
      subtitle: "Verified proficiencies, completed pathways, and academic achievements.",
      modalClose: "CLOSE",
      viewBtn: "View Credentials",
      groups: [
        {
          id: "flyrank",
          title: "FlyRank AI Internship (4)",
          desc: "Executive recommendation letter, Backend AI Engineering certificate, AI Fluency, and ML Track completion.",
          image: "/images/certs/flyrank-certificate-of-completion-backend-ai-engineering.webp"
        },
        {
          id: "isc2",
          title: "ISC2 Cybersecurity (6)",
          desc: "Official CC credential (#4079917) and 5 domain competencies in access control, network defense, and operations.",
          image: "/images/certs/CC_cert_isc2.webp"
        },
        {
          id: "anthropic",
          title: "Anthropic Academy (17)",
          desc: "Verified certifications covering Claude ecosystems, MCP architecture, agent skills, and AI Fluency frameworks.",
          image: "/images/certs/Heitor_Quental_Claude_101_certificate.png"
        },
        {
          id: "senac",
          title: "Senac Qualifications (2)",
          desc: "Fullstack web development and logic programming certifications from Senac Pernambuco.",
          image: "/images/certs/Fullstack_senac.png"
        }
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
      p1: "Estudante de Sistemas de Informacao na UFRPE (3. periodo, Media Geral 9,10/10, top 3,19% do curso). Meu foco profissional concentra-se na convergencia entre Engenharia de Machine Learning, IA aplicada e seguranca da informacao construindo arquiteturas auditaveis e seguras sustentadas por benchmarks empiricos.",
      p2: "Experiencia pratica em pipelines de ML ponta a ponta e sistemas backend com Python, FastAPI, Pydantic v2, DuckDB, Scikit-Learn, PyTorch, Docker, PostgreSQL, React e Vite, atuando diariamente em ambientes Linux Mint e Kali Linux.",
      p3: "Certificado pelo ISC2 em Certified in Cybersecurity (CC) e Microsoft Azure AI Fundamentals (AI-900), com 17 cursos verificados na Anthropic Academy."
    },
    projects: {
      title: "Arquiteturas Implementadas",
      subtitle: "Projetos em producao, pipelines de ML e solucoes defensivas.",
      repoBtn: "Ver Repositorio",
      expandHint: "Clique para inspecionar a telemetria",
      items: [
        {
          title: "Endpoint Arbiter",
          stack: "PYTHON | FASTAPI | PYDANTIC V2 | DUCKDB | OCSF 1.3",
          description: "Motor de triagem de alertas de SOC com fronteira de confianca arquitetural: um extrator em quarentena le o texto do invasor e emite estritamente enums/flags, enquanto um arbitro privilegiado impoe 5 invariantes contra prompt injection indireta sobre telemetria OCSF 1.3.",
          imagePath: "/images/endpoint-arbiter-demo.webp",
          repoLink: "https://github.com/Quentalheitor/endpoint-arbiter"
        },
        {
          title: "Beyond the Backlink",
          stack: "SCIKIT-LEARN | PANDAS | DUCKDB | GROUP SHUFFLE SPLIT",
          description: "Pipeline de ML e auditoria preditiva sobre 176.568 paginas de producao (79M de linhas em Parquet) com validacao agrupada contra data leakage, ROC-AUC, Precision@K e interpretabilidade por reason codes.",
          imagePath: "/images/beyond-the-backlink.webp",
          repoLink: "https://github.com/Quentalheitor/Flyrank-ML-Track"
        },
        {
          title: "Buffet Brain",
          stack: "REDES NEURAIS LSTM | ANALISE TEMPORAL | FLASK",
          description: "Classificador autonomo de perfil de investidor integrando rede LSTM sobre 10 anos de historico da B3, calculo de tolerancia a risco e teses de investimento fundamentadas por LLM.",
          imagePath: "/images/buffet-brain.webp",
          repoLink: "https://github.com/Quentalheitor/Buffet_Brain"
        },
        {
          title: "Glysera",
          stack: "FASTAPI | SQLMODEL | REACT | POSTGRESQL | SUPABASE",
          description: "Sistema de gestao em saude com validacao de CPF, integridade referencial, autenticacao segura JWT e dashboard React para busca e alocacao de equipamentos hospitalares.",
          imagePath: "/images/Glysera.webp",
          repoLink: "https://github.com/Quentalheitor/Glysera_backend"
        },
        {
          title: "Jarvis",
          stack: "PYTHON | DOCKER | LINUX | PYAUTOGUI | XVFB",
          description: "Assistente virtual autonomo para desktop Linux com despacho de comandos por voz abaixo de 350ms e execucao headless em ambiente totalmente containerizado.",
          imagePath: "/images/jarvis.webp",
          repoLink: "https://github.com/Quentalheitor/Jarvis-project"
        },
        {
          title: "Whisper Transcriber",
          stack: "PYTORCH | OPENAI WHISPER | SPEECHRECOGNITION | CUDA",
          description: "Aplicacao autonoma para transcricao de audio com calibracao de ruido ambiente, processada 100% localmente em hardware CUDA usando o modelo Whisper small.",
          imagePath: "/images/transcriptor.webp",
          repoLink: "https://github.com/Quentalheitor/Whisper_Transcriber"
        }
      ]
    },
    operations: {
      title: "Operacoes Ativas",
      subtitle: "Projetos em andamento, estudos e direcionamento academico.",
      lastUpdated: "Ultima Atualizacao: 6 de Outubro de 2026",
      tasks: [
        {
          category: "Pesquisa e Desenvolvimento",
          title: "Endpoint Arbiter (Fase 2 e 3)",
          detail: "Desenvolvimento da Fase 2 do Endpoint Arbiter, implementando motor de regras Sigma, calibracao do classificador de ML para alertas de SOC e preparacao de benchmark publico."
        },
        {
          category: "Conquista Recente",
          title: "Conclusao de Estagio na FlyRank AI",
          detail: "Conclusao de 420h de estagio nas 3 trilhas (Machine Learning, Backend AI Engineering e AI Fluency) com 4/4 capstones aprovados, 44 entregas praticas e carta executiva de recomendacao do CEO Alen Malkoc."
        },
        {
          category: "Certificacao Oficial",
          title: "ISC2 Certified in Cybersecurity (CC)",
          detail: "Aprovacao e credenciamento oficial como membro do ISC2 (Certificado n. 4079917, ciclo ate set/2029), validando governanca de seguranca, resposta a incidentes e protecao de redes."
        },
        {
          category: "Formacao Academica",
          title: "UFRPE: Periodo Letivo",
          detail: "Avanco no Bacharelado em Sistemas de Informacao na UFRPE, mantendo Coeficiente de Rendimento de 9,10/10 (top 3,19% do curso) com enfase em teoria da computacao e arquitetura de software."
        },
        {
          category: "Engenharia Aplicada",
          title: "Sistemas Event-Driven e Multiagentes",
          detail: "Desenvolvimento de fluxos assincronos e orquestracao de microsservicos com FastAPI, Inngest, DuckDB e Model Context Protocol (MCP) para execucao robusta e com controle de taxas."
        }
      ]
    },
    certs: {
      title: "Credenciais e Validacao",
      subtitle: "Proficiencias comprovadas, formacoes concluidas e conquistas academicas.",
      modalClose: "FECHAR",
      viewBtn: "Ver Credenciais",
      groups: [
        {
          id: "flyrank",
          title: "Estagio FlyRank AI (4)",
          desc: "Carta executiva de recomendacao, certificado Backend AI Engineering, AI Fluency e conclusao da trilha de Machine Learning.",
          image: "/images/certs/flyrank-certificate-of-completion-backend-ai-engineering.webp"
        },
        {
          id: "isc2",
          title: "Certificacao ISC2 CC (6)",
          desc: "Credencial oficial CC (#4079917) e 5 certificados de competencia em controle de acesso, redes e operacoes.",
          image: "/images/certs/CC_cert_isc2.webp"
        },
        {
          id: "anthropic",
          title: "Colecao Anthropic (17)",
          desc: "17 certificacoes cobrindo o ecossistema Claude, integracao MCP, agent skills e fluencia em IA.",
          image: "/images/certs/Heitor_Quental_Claude_101_certificate.png"
        },
        {
          id: "senac",
          title: "Qualificacoes Senac (2)",
          desc: "Formacoes profissionais em desenvolvimento fullstack e logica de programacao no Senac Pernambuco.",
          image: "/images/certs/Fullstack_senac.png"
        }
      ]
    },
    contact: {
      title: "Iniciar Conexao",
      subtitle: "Interessado em discutir infraestrutura, seguranca ou implantacao de novos modelos? Abra um canal seguro abaixo.",
      namePlaceholder: "Identidade / Nome",
      emailPlaceholder: "Endereco de Retorno / Email",
      messagePlaceholder: "Payload / Mensagem",
      submitBtn: "Transmitir Payload",
      submittingBtn: "Transmitindo...",
      successTitle: "Payload Entregue.",
      successDesc: "Sua transmissao foi recebida. Entrarei em contato em breve.",
      error: "Falha na transmissao. Verifique sua conexao e tente novamente."
    },
    footer: {
      builtBy: "Desenvolvido por Heitor Quental.",
      cvLabel: "Curriculum Vitae"
    }
  }
};
