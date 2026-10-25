export const skillCategoryIds = [
  'frontend',
  'backend',
  'database',
  'ai',
  'apis',
  'tools',
] as const

export type SkillCategoryId = (typeof skillCategoryIds)[number]

export const skillsByCategory: Record<SkillCategoryId, Record<'pt-BR' | 'en', string[]>> = {
  frontend: {
    'pt-BR': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    en: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  backend: {
    'pt-BR': ['Node.js', 'Express', 'Python', 'Django', 'Flask'],
    en: ['Node.js', 'Express', 'Python', 'Django', 'Flask'],
  },
  database: {
    'pt-BR': ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    en: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  ai: {
    'pt-BR': ['Inteligência Artificial', 'Machine Learning', 'LLMs', 'Agentes de IA', 'Automação com IA'],
    en: ['Artificial Intelligence', 'Machine Learning', 'LLMs', 'AI Agents', 'AI Automation'],
  },
  apis: {
    'pt-BR': ['APIs REST', 'JSON', 'OpenAPI', 'GraphQL'],
    en: ['REST APIs', 'JSON', 'OpenAPI', 'GraphQL'],
  },
  tools: {
    'pt-BR': ['Git', 'GitHub', 'Visual Studio Code', 'Docker', 'Postman'],
    en: ['Git', 'GitHub', 'Visual Studio Code', 'Docker', 'Postman'],
  },
}
