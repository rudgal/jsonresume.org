import { Reference } from './types';
import { withTranslation, WithTranslation } from 'react-i18next';

export const References = withTranslation()(
  ({ references, t }: { references: Reference[] } & WithTranslation) =>
    references.length ? (
      <section className="section">
        <header>
          <h2 className="section-title">{t('References')}</h2>
        </header>
        <section id="references">
          {references.map((reference, index) => (
            <div className="item" key={index}>
              {reference.reference && (
                <blockquote className="reference">
                  &#8220;{reference.reference}&#8221;
                  <div>
                    {reference.name && (
                      <>
                        <span className="name">{reference.name}</span>
                        {reference.position && (
                          <span className="institution">
                            {reference.position}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </blockquote>
              )}
            </div>
          ))}
        </section>
      </section>
    ) : null
);
