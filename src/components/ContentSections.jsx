import RichBlocks from "./RichBlocks.jsx";

export function About({ profile, ui, years }) {
    const intro = profile.about.introTemplate.replace("{{years}}", years);

    return (
        <section className="content-section about" id="about">
            <div>
                <span className="kicker">{ui.sections.about.kicker}</span>
                <h2>
                    {ui.sections.about.headingLines.map((line, index) => (
                        <span key={line}>
                            {line}
                            {index < ui.sections.about.headingLines.length - 1 && <br />}
                        </span>
                    ))}
                </h2>
            </div>
            <div>
                <p className="about-intro">{intro}</p>
                <details>
                    <summary>
                        {ui.sections.about.disclosure}
                        <span aria-hidden="true">{ui.symbols.expand}</span>
                    </summary>
                    <div className="expanded-copy">
                        <RichBlocks blocks={profile.about.expanded} />
                    </div>
                </details>
            </div>
        </section>
    );
}

export function Skills({ skills, ui }) {
    return (
        <section className="content-section" id="skills">
            <div className="intro">
                <div>
                    <span className="kicker">{ui.sections.skills.kicker}</span>
                    <h2>{ui.sections.skills.heading}</h2>
                </div>
            </div>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <article key={skill.id}>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export function Projects({ projects, ui }) {
    const total = projects.featured.length + projects.archive.length;
    const summary = ui.projects.archiveSummaryTemplate.replace("{{count}}", total);

    return (
        <section className="content-section" id="projects">
            <div className="intro">
                <div>
                    <span className="kicker">{ui.sections.projects.kicker}</span>
                    <h2>{ui.sections.projects.heading}</h2>
                </div>
                <p>
                    {ui.sections.projects.introLines.map((line, index) => (
                        <span key={line}>
                            {line}
                            {index < ui.sections.projects.introLines.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            <div className="project-grid">
                {projects.featured.map((project) => {
                    const content = (
                        <span className="card-body">
                            <span className="year">{project.year}</span>
                            <span className="card-name">
                                {project.name}
                                {project.url && (
                                    <span className="go" aria-hidden="true">
                                        {ui.symbols.external}
                                    </span>
                                )}
                            </span>
                            <span className="card-desc">{project.description}</span>
                        </span>
                    );

                    return project.url ? (
                        <a className="project-card" href={project.url} key={project.name}>
                            {content}
                        </a>
                    ) : (
                        <div className="project-card" key={project.name}>
                            {content}
                        </div>
                    );
                })}
            </div>
            <details className="archive">
                <summary>
                    {summary}
                    <span aria-hidden="true">{ui.symbols.expand}</span>
                </summary>
                <ul className="archive-rows">
                    {projects.archive.map((project) => (
                        <li key={project.name}>
                            {project.url ? (
                                <a href={project.url}>
                                    {project.name}
                                    <span aria-hidden="true">{ui.symbols.external}</span>
                                </a>
                            ) : (
                                <span className="row-name">{project.name}</span>
                            )}
                            <span className="row-year">{project.year}</span>
                            <span className="row-desc">{project.description}</span>
                        </li>
                    ))}
                </ul>
            </details>
        </section>
    );
}

export function Background({ education, ui }) {
    return (
        <section className="content-section" id="education">
            <div className="intro">
                <div>
                    <span className="kicker">{ui.sections.background.kicker}</span>
                    <h2>{ui.sections.background.heading}</h2>
                </div>
            </div>
            <div className="background-grid">
                <div>
                    <h3>{ui.sections.background.education}</h3>
                    {education.studies.map((study) => (
                        <details key={study.name}>
                            <summary>
                                <span>
                                    <strong>{study.name}</strong>
                                    <small>{study.institution}</small>
                                </span>
                                <span className="date">
                                    {study.dates}{ui.symbols.space}{ui.symbols.expand}
                                </span>
                            </summary>
                            <div className="expanded-copy">
                                {study.level && <p>{study.level}</p>}
                                {study.subjectsLabel && <p>{study.subjectsLabel}</p>}
                                {study.subjects && (
                                    <ul>
                                        {study.subjects.map((subject) => (
                                            <li key={subject}>{subject}</li>
                                        ))}
                                    </ul>
                                )}
                                {study.paragraphs?.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                {study.thesis && (
                                    <p>
                                        <strong>{study.thesisLabel}</strong>
                                        <br />
                                        <br />
                                        {study.thesis}
                                    </p>
                                )}
                                {study.thesisDescription && <p>{study.thesisDescription}</p>}
                            </div>
                        </details>
                    ))}
                </div>
                <div>
                    <h3>{ui.sections.background.outsideWork}</h3>
                    <ul className="hobby-tags">
                        {education.outsideWork.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function Contact({ profile, ui }) {
    return (
        <section id="contact" className="contact-section">
            <div>
                <span className="kicker">{ui.sections.contact.kicker}</span>
                <h2>
                    {ui.sections.contact.headingLines.map((line, index) => (
                        <span key={line}>
                            {line}
                            {index < ui.sections.contact.headingLines.length - 1 && <br />}
                        </span>
                    ))}
                </h2>
                <p>
                    {ui.sections.contact.bodyLines.map((line, index) => (
                        <span key={line}>
                            {line}
                            {index < ui.sections.contact.bodyLines.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            <div className="contact-links">
                <a href={profile.contacts.emailHref}>
                    {profile.contacts.email}{ui.symbols.space}{ui.symbols.external}
                </a>
                <div>
                    <a href={profile.contacts.linkedin}>{ui.heroActions.linkedin}</a>
                    <a href={profile.contacts.github}>{ui.heroActions.github}</a>
                </div>
            </div>
        </section>
    );
}
