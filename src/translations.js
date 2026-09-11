export const translations = {
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
      flyrankList: [
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
      flyrankList: [
        {
          title: "Carta de Recomendação FlyRank",
          description: "Carta executiva de recomendação do CEO da FlyRank detalhando contribuições em inteligência artificial aplicada, desempenho de engenharia e ética de trabalho.",
          imagePath: "/images/certs/flyrank-recommendation-letter.png"
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
