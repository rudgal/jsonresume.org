import { Project } from './types';
import { MY } from './dateHelpers';
import { withTranslation, WithTranslation } from 'react-i18next';
import i18n from 'i18next';

export const Projects = withTranslation()(
  ({ projects, t }: { projects: Project[] } & WithTranslation) => (
    <>
      {projects.length > 0 && (
        <section className="section">
          <header>
            <h2 className="section-title">
              {t('Projects')}{' '}
              <span className="item-count">({projects.length})</span>
            </h2>
          </header>
          <section id="projects">
            {projects.map((project, index) => (
              <section className="project-item" key={index}>
                {project.name && (
                  <>
                    {project.name && (
                      <label htmlFor={`project-item-${index}`} />
                    )}
                    <header className="clear">
                      <div className="date">
                        {project.startDate && (
                          <span className="startDate">
                            {MY(project.startDate, i18n.language)}
                            {'\u00A0'}
                          </span>
                        )}
                        {project.endDate ? (
                          <span className="endDate">
                            - {MY(project.endDate, i18n.language)}
                          </span>
                        ) : (
                          <span className="endDate">- {t('Current')}</span>
                        )}
                      </div>
                      {project.name && (
                        <div className="position">{project.name}</div>
                      )}
                      {project.entity && (
                        <div className="company">{project.entity}</div>
                      )}
                    </header>
                  </>
                )}

                {project.url && (
                  <span className="website">
                    <span className="fas fa-external-link-alt"></span>
                    <a target="_blank" href={project.url} rel="noreferrer">
                      {'\u00A0'}
                      {project.url}
                    </a>
                  </span>
                )}
                {project.keywords?.length && (
                  <ul className="keywords">
                    {project.keywords.map((keyword, index) => (
                      <li key={index}>{keyword}</li>
                    ))}
                  </ul>
                )}
                <div className="item">
                  {project.description && (
                    <div className="summary">{project.description}</div>
                  )}
                  {project.highlights?.length && (
                    <ul className="highlights">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </section>
        </section>
      )}
    </>
  )
);
