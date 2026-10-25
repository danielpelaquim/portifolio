import type { SkillCategoryId } from './skills'

export type Language = 'pt-BR' | 'en'

type SectionId =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'contact'

type SectionContent = {
  id: SectionId
  label: string
  title: string
  description: string
}

type Translation = {
  navigation: string
  navigationItems: string[]
  language: string
  languageNames: Record<Language, string>
  openMenu: string
  closeMenu: string
  heroKicker: string
  professionalTitle: string
  portraitAlt: string
  projectsCta: string
  seoTitle: string
  seoDescription: string
  openGraphLocale: string
  opensNewTab: string
  socialLinksLabel: string
  skillCategoryLabel: string
  skillCategories: Record<SkillCategoryId, string>
  skillsEmpty: string
  skillsReviewNotice: string
  projectsEmpty: string
  projectRepository: string
  projectDemo: string
  projectInProgress: string
  sections: SectionContent[]
  footer: (year: number) => string
  backToTop: string
}

export const translations: Record<Language, Translation> = {
  'pt-BR': {
    navigation: 'Navegação principal',
    navigationItems: [
      'Início',
      'Sobre mim',
      'Habilidades',
      'Projetos',
      'Experiência',
      'Formação',
      'Contato',
    ],
    language: 'Idioma',
    languageNames: {
      'pt-BR': 'Português',
      en: 'English',
    },
    openMenu: 'Abrir navegação',
    closeMenu: 'Fechar navegação',
    heroKicker: 'Portfólio / Engenharia de Software',
    professionalTitle:
      'Engenheiro de Software | Criando soluções inteligentes com código e IA',
    portraitAlt: 'Foto de Daniel Lopes Pelaquim',
    projectsCta: 'Explorar projetos',
    seoTitle: 'Daniel Lopes Pelaquim | Engenheiro de Software',
    seoDescription:
      'Portfólio de Daniel Lopes Pelaquim, engenheiro eletricista com experiência em TI, desenvolvimento de software e inteligência artificial.',
    openGraphLocale: 'pt_BR',
    opensNewTab: 'abre em uma nova aba',
    socialLinksLabel: 'Redes sociais',
    skillCategoryLabel: 'Categorias de habilidades técnicas',
    skillCategories: {
      frontend: 'Front-end',
      backend: 'Back-end',
      database: 'Banco de Dados',
      ai: 'Inteligência Artificial',
      apis: 'APIs',
      tools: 'Ferramentas',
    },
    skillsEmpty: 'Ainda não há habilidades nesta categoria.',
    skillsReviewNotice:
      'Tecnologias relacionadas a desenvolvimento de software, engenharia e inteligência artificial.',
    projectsEmpty: 'Ainda não há projetos confirmados para apresentar nesta seção.',
    projectRepository: 'Código-fonte',
    projectDemo: 'Demonstração',
    projectInProgress: 'Em desenvolvimento',
    sections: [
      {
        id: 'about',
        label: 'SOBRE MIM',
        title: 'Sobre mim',
        description: 'Engenharia, desenvolvimento de software e inteligência artificial.',
      },
      {
        id: 'skills',
        label: 'HABILIDADES',
        title: 'Habilidades técnicas',
        description:
          'Lista inicial de tecnologias populares para revisão. Confirme o que representa suas habilidades e remova os itens que não se aplicam antes de publicar.',
      },
      {
        id: 'projects',
        label: 'PROJETOS',
        title: 'Projetos',
        description:
          'Projetos selecionados em diferentes etapas de desenvolvimento, com informações e links disponíveis.',
      },
      {
        id: 'experience',
        label: 'EXPERIÊNCIA',
        title: 'Experiência profissional',
        description: 'Experiência em engenharia, sistemas, automação e desenvolvimento de soluções.',
      },
      {
        id: 'education',
        label: 'FORMAÇÃO',
        title: 'Formação acadêmica',
        description: 'Formação em engenharia elétrica, gestão de projetos, desenvolvimento e inteligência artificial.',
      },
      {
        id: 'contact',
        label: 'CONTATO',
        title: 'Contato',
        description: 'Encontre-me nas redes sociais:',
      },
    ],
    footer: (year) => `© ${year} Daniel Lopes Pelaquim. Todos os direitos reservados.`,
    backToTop: 'Voltar ao início ↑',
  },
  en: {
    navigation: 'Main navigation',
    navigationItems: [
      'Home',
      'About',
      'Skills',
      'Projects',
      'Experience',
      'Education',
      'Contact',
    ],
    language: 'Language',
    languageNames: {
      'pt-BR': 'Português',
      en: 'English',
    },
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    heroKicker: 'Portfolio / Software Engineering',
    professionalTitle:
      'Software Engineer | Building Intelligent Solutions with Code and AI',
    portraitAlt: 'Photo of Daniel Lopes Pelaquim',
    projectsCta: 'Explore projects',
    seoTitle: 'Daniel Lopes Pelaquim | Software Engineer',
    seoDescription:
      'Portfolio of Daniel Lopes Pelaquim, an electrical engineer with IT experience in software development and artificial intelligence.',
    openGraphLocale: 'en_US',
    opensNewTab: 'opens in a new tab',
    socialLinksLabel: 'Social media',
    skillCategoryLabel: 'Technical skills categories',
    skillCategories: {
      frontend: 'Front-end',
      backend: 'Back-end',
      database: 'Databases',
      ai: 'Artificial Intelligence',
      apis: 'APIs',
      tools: 'Tools',
    },
    skillsEmpty: 'There are no skills listed in this category yet.',
    skillsReviewNotice:
      'Technologies related to software development, engineering, and artificial intelligence.',
    projectsEmpty: 'There are no confirmed projects to show in this section yet.',
    projectRepository: 'Source code',
    projectDemo: 'Live demo',
    projectInProgress: 'In progress',
    sections: [
      {
        id: 'about',
        label: 'ABOUT ME',
        title: 'About me',
        description: 'Engineering, software development, and artificial intelligence.',
      },
      {
        id: 'skills',
        label: 'SKILLS',
        title: 'Technical skills',
        description:
          'An initial list of popular technologies for review. Confirm which ones represent your skills and remove anything that does not apply before publishing.',
      },
      {
        id: 'projects',
        label: 'PROJECTS',
        title: 'Projects',
        description:
          'Selected projects at different stages of development, with available details and links.',
      },
      {
        id: 'experience',
        label: 'EXPERIENCE',
        title: 'Professional experience',
        description: 'Experience in engineering, systems, automation, and solution development.',
      },
      {
        id: 'education',
        label: 'EDUCATION',
        title: 'Education',
        description: 'Education in electrical engineering, project management, software development, and artificial intelligence.',
      },
      {
        id: 'contact',
        label: 'CONTACT',
        title: 'Contact',
        description: 'Find me on social media:',
      },
    ],
    footer: (year) => `© ${year} Daniel Lopes Pelaquim. All rights reserved.`,
    backToTop: 'Back to top ↑',
  },
}
