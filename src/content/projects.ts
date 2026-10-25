import type { Language } from './translations'

type LocalizedText = Record<Language, string>

export type PortfolioProject = {
  slug: string
  order: number
  status: 'draft' | 'in-progress' | 'completed'
  title: LocalizedText
  summary: LocalizedText
  description: LocalizedText
  technologies: string[]
  repository?: string
  demo?: string
  image?: string
  imageAlt?: LocalizedText
}

const projectFiles = import.meta.glob<string>('./projects/*.project.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function requiredString(value: unknown, field: string, file: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Invalid project file "${file}": "${field}" must be a non-empty string.`)
  }
  return value.trim()
}

function localizedText(value: unknown, field: string, file: string): LocalizedText {
  if (!isRecord(value)) {
    throw new Error(`Invalid project file "${file}": "${field}" must include pt-BR and en.`)
  }
  return {
    'pt-BR': requiredString(value['pt-BR'], `${field}.pt-BR`, file),
    en: requiredString(value.en, `${field}.en`, file),
  }
}

function optionalUrl(value: unknown, field: string, file: string): string | undefined {
  if (value === undefined || value === null || value === '') return undefined
  const url = requiredString(value, field, file)
  try {
    const parsedUrl = new URL(url)
    if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') {
      throw new Error()
    }
  } catch {
    throw new Error(`Invalid project file "${file}": "${field}" must be an HTTP or HTTPS URL.`)
  }
  return url
}

function optionalImage(value: unknown, file: string): string | undefined {
  if (value === undefined || value === null || value === '') return undefined
  const image = requiredString(value, 'image', file)
  if (/^https:\/\//i.test(image)) return image
  if (image.startsWith('//') || image.includes('\\') || image.split('/').includes('..')) {
    throw new Error(`Invalid project file "${file}": "image" must be an HTTPS URL or a public asset path.`)
  }
  return image.replace(/^\/+/, '')
}

function parseProjectFile(file: string, markdown: string): PortfolioProject {
  const slug = file.split('/').pop()?.replace(/\.project\.md$/, '')
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!slug || !frontmatter) {
    throw new Error(`Invalid project file "${file}": expected a JSON front matter block.`)
  }

  let metadata: unknown
  try {
    metadata = JSON.parse(frontmatter[1])
  } catch (error) {
    throw new Error(`Invalid project file "${file}": front matter must contain valid JSON.`, {
      cause: error,
    })
  }
  if (!isRecord(metadata)) {
    throw new Error(`Invalid project file "${file}": front matter must be a JSON object.`)
  }
  if (
    metadata.status !== 'draft'
    && metadata.status !== 'in-progress'
    && metadata.status !== 'completed'
  ) {
    throw new Error(
      `Invalid project file "${file}": "status" must be "draft", "in-progress", or "completed".`,
    )
  }
  if (typeof metadata.order !== 'number' || !Number.isInteger(metadata.order) || metadata.order < 0) {
    throw new Error(`Invalid project file "${file}": "order" must be a non-negative integer.`)
  }
  if (!Array.isArray(metadata.technologies) || metadata.technologies.some(
    (technology) => typeof technology !== 'string' || technology.trim() === '',
  )) {
    throw new Error(`Invalid project file "${file}": "technologies" must be an array of non-empty strings.`)
  }

  const image = optionalImage(metadata.image, file)
  const imageAlt = image ? localizedText(metadata.imageAlt, 'imageAlt', file) : undefined
  return {
    slug,
    order: metadata.order,
    status: metadata.status,
    title: localizedText(metadata.title, 'title', file),
    summary: localizedText(metadata.summary, 'summary', file),
    description: localizedText(metadata.description, 'description', file),
    technologies: metadata.technologies.map((technology: string) => technology.trim()),
    repository: optionalUrl(metadata.repository, 'repository', file),
    demo: optionalUrl(metadata.demo, 'demo', file),
    image,
    imageAlt,
  }
}

export const projects = Object.entries(projectFiles)
  .map(([file, markdown]) => parseProjectFile(file, markdown))
  .filter((project) => project.status !== 'draft')
  .sort((first, second) => first.order - second.order || first.slug.localeCompare(second.slug))

export function projectImageSource(image: string): string {
  if (/^https:\/\//i.test(image)) return image
  return `${import.meta.env.BASE_URL}${image}`
}
