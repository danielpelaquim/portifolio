import { useEffect, useRef, useState } from 'react'
import MatrixBackground from './MatrixBackground'
import ProjectCard from './ProjectCard'
import { translations, type Language } from './content/translations'
import { skillCategoryIds, skillsByCategory, type SkillCategoryId } from './content/skills'
import { projects } from './content/projects'
import { aboutParagraphs, education, experiences } from './content/professional'
import profileImage from '../assets/daniel-profile-original.png'

const sectionIds = [
  'inicio',
  'sobre',
  'habilidades',
  'projetos',
  'experiencia',
  'formacao',
  'contato',
] as const

type SocialLink = {
  name: string
  href: string | null
  icon: 'linkedin' | 'instagram' | 'facebook'
}

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://br.linkedin.com/in/danielpelaquim', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/danielpelaquim/', icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/dpelaquim', icon: 'facebook' },
] as const

export default function App() {
  const [language, setLanguage] = useState<Language>('pt-BR')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] =
    useState<SkillCategoryId>('frontend')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const content = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.seoTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.seoDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.seoTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.seoDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', content.openGraphLocale)
  }, [content, language])

  const closeMenu = () => setMenuOpen(false)
  const renderProjects = () => {
    if (projects.length === 0) {
      return (
        <p className="project-empty-state">
          {content.projectsEmpty}
        </p>
      )
    }
    return (
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            language={language}
            repositoryLabel={content.projectRepository}
            demoLabel={content.projectDemo}
            opensNewTabLabel={content.opensNewTab}
            inProgressLabel={content.projectInProgress}
          />
        ))}
      </div>
    )
  }

  return (
    <main className="app-shell">
      <MatrixBackground />
      <header className="site-header">
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? content.closeMenu : content.openMenu}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label={content.navigation}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeMenu()
              menuButtonRef.current?.focus()
            }
          }}
        >
          <div className="navigation-links">
            {sectionIds.map((id, index) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {content.navigationItems[index]}
              </a>
            ))}
          </div>
        </nav>
        <div className="language-switch" role="group" aria-label={content.language}>
          {(['pt-BR', 'en'] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-label={content.languageNames[option]}
              aria-pressed={language === option}
              onClick={() => {
                setLanguage(option)
                closeMenu()
              }}
            >
              <span aria-hidden="true">{option === 'pt-BR' ? '🇧🇷' : '🇺🇸'}</span>
              <span className="language-name">{content.languageNames[option]}</span>
              <span className="language-short" aria-hidden="true">
                {option === 'pt-BR' ? 'PT' : 'EN'}
              </span>
            </button>
          ))}
        </div>
      </header>

      <section className="hero page-section" id="inicio" aria-labelledby="hero-name">
        <div className="hero-copy">
          <p className="hero-kicker">{content.heroKicker}</p>
          <h1 id="hero-name">Daniel Lopes Pelaquim</h1>
          <p className="hero-title">
            <span className="sr-only">{content.professionalTitle}</span>
            <span className="hero-title-text" aria-hidden="true">
              {content.professionalTitle}
            </span>
            <span className="typing-cursor" aria-hidden="true" />
          </p>
          <a className="primary-cta" href="#projetos">
            {content.projectsCta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className="portrait">
          <img
            src={profileImage}
            alt={content.portraitAlt}
            width="480"
            height="480"
            fetchPriority="high"
          />
          <span className="portrait-orbit" aria-hidden="true" />
        </figure>
      </section>

      <div className="content-sections">
        {content.sections.map((section, index) => (
          <section
            className="content-section page-section"
            id={sectionIds[index + 1]}
            key={sectionIds[index + 1]}
            aria-labelledby={`${sectionIds[index + 1]}-title`}
          >
            <p className="section-index">{`0${index + 1} / ${section.label}`}</p>
            <h2 id={`${sectionIds[index + 1]}-title`}>{section.title}</h2>
            {section.id === 'skills' ? (
              <>
                <p className="section-description">{section.description}</p>
                <div className="skill-browser">
                  <div
                    className="skill-categories"
                    role="group"
                    aria-label={content.skillCategoryLabel}
                  >
                    {skillCategoryIds.map((categoryId) => (
                      <button
                        key={categoryId}
                        type="button"
                        aria-pressed={activeSkillCategory === categoryId}
                        onClick={() => setActiveSkillCategory(categoryId)}
                      >
                        {content.skillCategories[categoryId]}
                      </button>
                    ))}
                  </div>
                  <div className="skill-list" aria-live="polite">
                    <p className="skills-review-notice">{content.skillsReviewNotice}</p>
                    {skillsByCategory[activeSkillCategory][language].length > 0 ? (
                      <ul>
                        {skillsByCategory[activeSkillCategory][language].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{content.skillsEmpty}</p>
                    )}
                  </div>
                </div>
              </>
            ) : section.id === 'projects' ? (
              <>
                <p className="section-description">{section.description}</p>
                {renderProjects()}
              </>
            ) : section.id === 'about' ? (
              <div className="about-copy">
                {aboutParagraphs[language].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : section.id === 'experience' ? (
              <div className="experience-list">
                {experiences.map((experience) => (
                  <details className="experience-item" key={`${experience.company}-${experience.period.en}`}>
                    <summary>
                      <span className="experience-heading">
                        <strong>{experience.company}</strong>
                        <span>{experience.role[language]}</span>
                      </span>
                      <span className="experience-period">{experience.period[language]}</span>
                    </summary>
                    <ul>
                      {experience.responsibilities[language].map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            ) : section.id === 'education' ? (
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" key={`${item.institution}-${item.year}`}>
                    <p>{item.year}</p>
                    <h3>{item.title[language]}</h3>
                    <span>{item.institution}</span>
                  </article>
                ))}
              </div>
            ) : section.id === 'contact' ? (
              <>
                <p className="section-description">{section.description}</p>
                <ul className="social-links" aria-label={content.socialLinksLabel}>
                  {socialLinks.map((social) => social.href && (
                    <li key={social.name}>
                      <a
                        className="social-link"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.name} (${content.opensNewTab})`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          {social.icon === 'linkedin' ? (
                            <path d="M5 8.5h3v10H5zm1.5-4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10 8.5h2.9v1.4h.04a3.18 3.18 0 0 1 2.86-1.58c3.06 0 3.63 2.01 3.63 4.62v5.56h-3v-4.93c0-1.18-.02-2.7-1.65-2.7-1.66 0-1.91 1.3-1.91 2.62v5.01H10z" />
                          ) : social.icon === 'instagram' ? (
                            <>
                              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="17.5" cy="6.5" r="1.25" />
                            </>
                          ) : (
                            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.6v8z" />
                          )}
                        </svg>
                        <span>{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="section-description">{section.description}</p>
            )}
          </section>
        ))}
      </div>

      <footer className="site-footer">
        <span>{content.footer(new Date().getFullYear())}</span>
        <a href="#inicio">{content.backToTop}</a>
      </footer>
    </main>
  )
}
