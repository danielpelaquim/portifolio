import type { Language } from './translations'

type LocalizedText = Record<Language, string>

export type Experience = {
  company: string
  role: LocalizedText
  period: LocalizedText
  responsibilities: Record<Language, string[]>
}

export type Education = {
  institution: string
  title: LocalizedText
  year: string
}

export const aboutParagraphs: Record<Language, string[]> = {
  'pt-BR': [
    'Sou engenheiro eletricista, com experiência profissional na área de TI, pós-graduação em Desenvolvimento Full Stack e interesse crescente em Inteligência Artificial.',
    'Minha trajetória profissional me proporcionou contato com desafios técnicos que exigem análise, raciocínio lógico e busca por soluções eficientes. Paralelamente, desenvolvi conhecimentos em programação e desenvolvimento de software, ampliando minhas possibilidades de transformar problemas em soluções tecnológicas.',
    'Atualmente, busco integrar engenharia, desenvolvimento de software e inteligência artificial na criação de aplicações, automações e ferramentas capazes de otimizar processos e resolver problemas reais.',
    'Acredito que minha experiência em engenharia, aliada aos conhecimentos em desenvolvimento e IA, me permite abordar desafios sob diferentes perspectivas: compreender o problema, estruturar uma solução e explorar as tecnologias mais adequadas para implementá-la.',
    'Meu objetivo é continuar evoluindo tecnicamente e desenvolver projetos que demonstrem, na prática, como a combinação dessas áreas pode gerar soluções úteis e eficientes.',
  ],
  en: [
    'I am an electrical engineer with professional experience in IT, a postgraduate specialization in Full Stack Development, and a growing interest in Artificial Intelligence.',
    'My professional background has exposed me to technical challenges that require analysis, logical reasoning, and the pursuit of efficient solutions. In parallel, I have developed knowledge of programming and software development, expanding my ability to turn problems into technological solutions.',
    'I am currently seeking to bring engineering, software development, and artificial intelligence together to create applications, automations, and tools that can optimize processes and solve real-world problems.',
    'I believe my engineering experience, combined with my knowledge of software development and AI, allows me to approach challenges from different perspectives: understand the problem, structure a solution, and explore the most suitable technologies to implement it.',
    'My goal is to keep growing technically and develop projects that demonstrate, in practice, how combining these fields can produce useful and efficient solutions.',
  ],
}

export const experiences: Experience[] = [
  {
    company: 'CELESC',
    role: { 'pt-BR': 'Engenheiro', en: 'Engineer' },
    period: { 'pt-BR': 'Dezembro de 2023 – Atual', en: 'December 2023 – Present' },
    responsibilities: {
      'pt-BR': [
        'Automação de processos.',
        'Elaboração de projetos elétricos.',
        'Administração de softwares de engenharia.',
        'Treinamento de equipes.',
      ],
      en: [
        'Process automation.',
        'Preparation of electrical engineering projects.',
        'Administration of engineering software.',
        'Team training.',
      ],
    },
  },
  {
    company: 'INTERTECHNE',
    role: { 'pt-BR': 'Engenheiro', en: 'Engineer' },
    period: { 'pt-BR': 'Janeiro de 2021 – Dezembro de 2023', en: 'January 2021 – December 2023' },
    responsibilities: {
      'pt-BR': [
        'Modelagem 3D utilizando nuvens de pontos e projetos.',
        'Acompanhamento e fiscalização de projetos de engenharia.',
        'Verificação de interferências em projetos básicos e detalhados.',
        'Padronização de procedimentos e treinamento de equipes.',
        'Customização e extração de plantas e listas de materiais.',
        'Customização e manutenção de desenhos isométricos.',
        'Criação e administração de bancos de dados Oracle e SQL.',
        'Desenvolvimento de programas para otimização dos processos de engenharia.',
      ],
      en: [
        '3D modeling using point clouds and project data.',
        'Monitoring and inspection of engineering projects.',
        'Clash checking in basic and detailed designs.',
        'Procedure standardization and team training.',
        'Customization and extraction of drawings and material lists.',
        'Customization and maintenance of isometric drawings.',
        'Creation and administration of Oracle and SQL databases.',
        'Development of programs to optimize engineering processes.',
      ],
    },
  },
  {
    company: 'KEMPETRO',
    role: { 'pt-BR': 'Engenheiro', en: 'Engineer' },
    period: { 'pt-BR': 'Fevereiro de 2018 – Setembro de 2019', en: 'February 2018 – September 2019' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de projetos básicos e executivos de elétrica e tubulação.',
        'Modelagem 3D com nuvens de pontos e projetos.',
        'Acompanhamento, fiscalização e verificação de interferências em projetos.',
        'Padronização de procedimentos e treinamento de equipes.',
        'Customização e extração de plantas e listas de materiais.',
        'Customização e manutenção de desenhos isométricos.',
        'Criação e administração de bancos de dados Oracle e SQL.',
        'Desenvolvimento de programas para otimização de processos de engenharia.',
      ],
      en: [
        'Preparation of basic and detailed electrical and piping designs.',
        '3D modeling using point clouds and project data.',
        'Monitoring, inspection, and clash checking of projects.',
        'Procedure standardization and team training.',
        'Customization and extraction of drawings and material lists.',
        'Customization and maintenance of isometric drawings.',
        'Creation and administration of Oracle and SQL databases.',
        'Development of programs to optimize engineering processes.',
      ],
    },
  },
  {
    company: 'BUREAU VERITAS',
    role: { 'pt-BR': 'Engenheiro', en: 'Engineer' },
    period: { 'pt-BR': 'Junho de 2017 – Fevereiro de 2018', en: 'June 2017 – February 2018' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de projetos básicos e executivos de elétrica e tubulação.',
        'Modelagem 3D utilizando nuvens de pontos e projetos.',
        'Acompanhamento e fiscalização de projetos e verificação de interferências.',
        'Padronização de procedimentos e treinamento de equipes.',
        'Customização e extração de plantas e listas de materiais.',
        'Customização e manutenção de desenhos isométricos.',
        'Criação e administração de bancos de dados Oracle e SQL.',
        'Desenvolvimento de programas para otimização de processos de engenharia.',
      ],
      en: [
        'Preparation of basic and detailed electrical and piping designs.',
        '3D modeling using point clouds and project data.',
        'Project monitoring and inspection, including clash checking.',
        'Procedure standardization and team training.',
        'Customization and extraction of drawings and material lists.',
        'Customization and maintenance of isometric drawings.',
        'Creation and administration of Oracle and SQL databases.',
        'Development of programs to optimize engineering processes.',
      ],
    },
  },
  {
    company: 'DORIS ENGENHARIA',
    role: { 'pt-BR': 'Engenheiro Eletricista', en: 'Electrical Engineer' },
    period: { 'pt-BR': 'Maio de 2017 – Julho de 2017', en: 'May 2017 – July 2017' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de plantas utilizando SM3D.',
        'Customização e extração de plantas e listas de materiais.',
        'Participação em reuniões técnicas com clientes.',
        'Definição de escopo e prazos.',
        'Mapeamento de processos e viabilização de projetos.',
        'Dimensionamento de circuitos elétricos e elaboração de listas de materiais.',
      ],
      en: [
        'Preparation of drawings using SM3D.',
        'Customization and extraction of drawings and material lists.',
        'Participation in technical meetings with clients.',
        'Definition of project scope and deadlines.',
        'Process mapping and project feasibility work.',
        'Electrical circuit sizing and preparation of material lists.',
      ],
    },
  },
  {
    company: 'SEI CONSULTORIA',
    role: { 'pt-BR': 'Gerente de Sistemas', en: 'Systems Manager' },
    period: { 'pt-BR': 'Julho de 2015 – Julho de 2016', en: 'July 2015 – July 2016' },
    responsibilities: {
      'pt-BR': [
        'Gerenciamento de equipes de modelagem 2D e 3D.',
        'Gerenciamento de redes e servidores.',
        'Definição de escopo, prazos e processos.',
        'Implementação de soluções de automação e desenvolvimento de programas para otimização de processos.',
        'Criação, administração e padronização de catálogos de engenharia.',
        'Customização de softwares para atendimento a normas.',
        'Criação e administração de bancos de dados.',
        'Acompanhamento e fiscalização de projetos e treinamento de equipes.',
      ],
      en: [
        'Management of 2D and 3D modeling teams.',
        'Management of networks and servers.',
        'Definition of scope, deadlines, and processes.',
        'Implementation of automation solutions and development of programs to optimize processes.',
        'Creation, administration, and standardization of engineering catalogs.',
        'Customization of software to meet standards.',
        'Creation and administration of databases.',
        'Project monitoring and inspection, and team training.',
      ],
    },
  },
  {
    company: 'INTERTECHNE',
    role: { 'pt-BR': 'Administrador de Sistemas', en: 'Systems Administrator' },
    period: { 'pt-BR': 'Outubro de 2013 – Julho de 2015', en: 'October 2013 – July 2015' },
    responsibilities: {
      'pt-BR': [
        'Administração de sistemas e ferramentas de engenharia.',
        'Elaboração de projetos de elétrica e tubulação.',
        'Definição de escopo e prazos e mapeamento de processos.',
        'Proposição e viabilização de soluções de automação.',
        'Gerenciamento e treinamento de equipes de modelagem 2D e 3D.',
        'Desenvolvimento de programas para otimização de processos.',
        'Criação, administração e padronização de catálogos de engenharia.',
        'Customização de softwares para atendimento a normas e padronização de procedimentos.',
        'Criação e administração de bancos de dados.',
      ],
      en: [
        'Administration of engineering systems and tools.',
        'Preparation of electrical and piping designs.',
        'Definition of scope and deadlines, and process mapping.',
        'Proposal and implementation of automation solutions.',
        'Management and training of 2D and 3D modeling teams.',
        'Development of programs to optimize processes.',
        'Creation, administration, and standardization of engineering catalogs.',
        'Customization of software to meet standards and standardization of procedures.',
        'Creation and administration of databases.',
      ],
    },
  },
  {
    company: 'ENGEVIX',
    role: { 'pt-BR': 'Administrador de Sistemas', en: 'Systems Administrator' },
    period: { 'pt-BR': 'Julho de 2012 – Julho de 2013', en: 'July 2012 – July 2013' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de projetos de elétrica e tubulação.',
        'Participação em reuniões técnicas com clientes.',
        'Definição de escopo e prazos e mapeamento de processos.',
        'Gerenciamento de equipes 2D e 3D.',
        'Acompanhamento e fiscalização de projetos e treinamento de equipes.',
        'Desenvolvimento de programas para otimização de processos.',
        'Criação, administração e padronização de catálogos de engenharia.',
        'Customização de softwares para atendimento a normas e padronização de procedimentos.',
        'Criação e administração de bancos de dados.',
      ],
      en: [
        'Preparation of electrical and piping designs.',
        'Participation in technical meetings with clients.',
        'Definition of scope and deadlines, and process mapping.',
        'Management of 2D and 3D teams.',
        'Project monitoring and inspection, and team training.',
        'Development of programs to optimize processes.',
        'Creation, administration, and standardization of engineering catalogs.',
        'Customization of software to meet standards and standardization of procedures.',
        'Creation and administration of databases.',
      ],
    },
  },
  {
    company: 'SISGRAPH',
    role: { 'pt-BR': 'Solution Analyst', en: 'Solution Analyst' },
    period: { 'pt-BR': 'Janeiro de 2010 – Agosto de 2012', en: 'January 2010 – August 2012' },
    responsibilities: {
      'pt-BR': [
        'Identificação das necessidades dos clientes.',
        'Organização de projetos e definição de metas.',
        'Resolução de problemas técnicos.',
        'Criação de padrões e normas dentro dos programas.',
        'Suporte técnico e consultoria.',
        'Desenvolvimento de materiais de treinamento.',
        'Treinamentos nos softwares SP3D, SM3D, SPReview e SPOOLGEN.',
        'Participação em atividades de pré-vendas nas áreas de Óleo, Gás e Mineração.',
      ],
      en: [
        'Identification of client needs.',
        'Project organization and goal setting.',
        'Resolution of technical issues.',
        'Creation of standards and rules within software applications.',
        'Technical support and consulting.',
        'Development of training materials.',
        'Training in SP3D, SM3D, SPReview, and SPOOLGEN software.',
        'Participation in presales activities in the Oil, Gas, and Mining sectors.',
      ],
    },
  },
  {
    company: 'ABB — Vendas em Service PS',
    role: { 'pt-BR': 'Atuação em vendas técnicas', en: 'Technical Sales' },
    period: { 'pt-BR': 'Abril de 2009 – Dezembro de 2009', en: 'April 2009 – December 2009' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de propostas técnico-comerciais de relés de média tensão.',
        'Treinamento e visitas a clientes.',
        'Negociação de produtos.',
        'Desenvolvimento de planilhas em Excel com macros e programação VBA para automatizar o orçamento de projetos e o planejamento.',
      ],
      en: [
        'Preparation of technical and commercial proposals for medium-voltage relays.',
        'Client training and visits.',
        'Product negotiations.',
        'Development of Excel spreadsheets with macros and VBA programming to automate project budgeting and planning.',
      ],
    },
  },
  {
    company: 'ABB — Power Products Trafos Novos',
    role: { 'pt-BR': 'Estagiário', en: 'Intern' },
    period: { 'pt-BR': 'Outubro de 2008 – Abril de 2009', en: 'October 2008 – April 2009' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de projetos elétricos de média e baixa tensão para transformadores de alta potência.',
        'Preparação e envio de desenhos para produção utilizando o Pro/ENGINEER Wildfire 2.0.',
        'Acompanhamento de projetos junto à produção.',
        'Acompanhamento dos prazos de entrega.',
      ],
      en: [
        'Preparation of medium- and low-voltage electrical designs for high-power transformers.',
        'Preparation and submission of production drawings using Pro/ENGINEER Wildfire 2.0.',
        'Project follow-up with the production team.',
        'Monitoring delivery deadlines.',
      ],
    },
  },
  {
    company: 'SCHNEIDER ELECTRIC',
    role: {
      'pt-BR': 'Estagiário — Propostas Técnico-Comerciais',
      en: 'Intern — Technical and Commercial Proposals',
    },
    period: { 'pt-BR': 'Janeiro de 2008 – Outubro de 2008', en: 'January 2008 – October 2008' },
    responsibilities: {
      'pt-BR': [
        'Elaboração de propostas técnico-comerciais de equipamentos elétricos de média e baixa tensão.',
      ],
      en: [
        'Preparation of technical and commercial proposals for medium- and low-voltage electrical equipment.',
      ],
    },
  },
]

export const education: Education[] = [
  {
    institution: 'PUC Minas',
    title: {
      'pt-BR': 'Especialização em Inteligência Artificial e Aprendizado de Máquinas',
      en: 'Specialization in Artificial Intelligence and Machine Learning',
    },
    year: '2026',
  },
  {
    institution: 'PUC Minas',
    title: {
      'pt-BR': 'Especialização em Desenvolvimento Full Stack',
      en: 'Specialization in Full Stack Development',
    },
    year: '2024',
  },
  {
    institution: 'FGV',
    title: {
      'pt-BR': 'MBA em Gerenciamento de Projetos',
      en: 'MBA in Project Management',
    },
    year: '2015',
  },
  {
    institution: 'Escola de Engenharia Mauá',
    title: {
      'pt-BR': 'Engenharia Elétrica',
      en: 'Electrical Engineering',
    },
    year: '2009',
  },
]
