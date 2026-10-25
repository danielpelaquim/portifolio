import type { Language } from './content/translations'
import { projectImageSource, type PortfolioProject } from './content/projects'

type ProjectCardProps = {
  project: PortfolioProject
  language: Language
  repositoryLabel: string
  demoLabel: string
  opensNewTabLabel: string
  inProgressLabel: string
}

export default function ProjectCard({
  project,
  language,
  repositoryLabel,
  demoLabel,
  opensNewTabLabel,
  inProgressLabel,
}: ProjectCardProps) {
  return (
    <article className={`project-card${project.status === 'in-progress' ? ' is-in-progress' : ''}`}>
      {project.image && project.imageAlt && (
        <img
          className="project-card-image"
          src={projectImageSource(project.image)}
          alt={project.imageAlt[language]}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="project-card-content">
        {project.status === 'in-progress' && (
          <p className="project-status">{inProgressLabel}</p>
        )}
        <h3>{project.title[language]}</h3>
        <p className="project-summary">{project.summary[language]}</p>
        <p className="project-description">{project.description[language]}</p>
        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {(project.repository || project.demo) && (
          <div className="project-links">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                {repositoryLabel}
                <span className="sr-only">
                  {' '}
                  — {project.title[language]} ({opensNewTabLabel})
                </span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                {demoLabel}
                <span className="sr-only">
                  {' '}
                  — {project.title[language]} ({opensNewTabLabel})
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
