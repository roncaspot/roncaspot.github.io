import BrandMark from "./BrandMark.jsx";

function CvEntry({ node }) {
    const roleHtml = node.printRoleHtml || node.role;
    return (
        <article className="cv-entry">
            <div>
                <h3>
                    <BrandMark mark={node.mark} />
                    {node.id === "nestdev" ? (
                        <a href={node.url}>{node.name}</a>
                    ) : (
                        node.name
                    )}
                </h3>
                <span>{node.dates}</span>
            </div>
            <p className="cv-role" dangerouslySetInnerHTML={{ __html: roleHtml }} />
            <ul>
                {node.printHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
        </article>
    );
}

function CvFooter({ ui, page }) {
    return (
        <footer>
            {ui.print.footer}
            <span>{page}</span>
        </footer>
    );
}

export default function PrintableCv({ profile, skills, education, experience, nodes, ui, years }) {
    const intro = profile.about.introTemplate.replace("{{years}}", years);
    const azeroth = nodes.azerothcore;

    return (
        <section className="print-cv" aria-label={ui.print.ariaLabel}>
            <div className="cv-page">
                <header>
                    <p className="cv-kicker">{profile.print.kicker}</p>
                    <h1>{profile.name}</h1>
                    <p className="cv-title">{profile.print.title}</p>
                    <p>{profile.print.stack}</p>
                    <p>{profile.workStyle}</p>
                    <p className="cv-contact">
                        {profile.print.contactLineOne}
                        <br />
                        {profile.print.contactLineTwo}
                    </p>
                </header>
                <h2>{ui.print.profile}</h2>
                <p>{intro}</p>
                <h2>{ui.print.skills}</h2>
                {skills.map((skill) => (
                    <p className="cv-skill" key={skill.id}>
                        <strong>
                            {skill.name}
                            {ui.symbols.colon}
                        </strong>{ui.symbols.space}
                        {skill.description}
                    </p>
                ))}
                <h2>{ui.print.consultancy}</h2>
                {experience.layout.printPageOne.map((id) => (
                    <CvEntry node={nodes[id]} key={id} />
                ))}
                <CvFooter ui={ui} page={ui.print.pageOne} />
            </div>
            <div className="cv-page">
                <h2>{ui.print.earlierCareer}</h2>
                {experience.layout.printPageTwo.map((id) => (
                    <CvEntry node={nodes[id]} key={id} />
                ))}
                <h2>{ui.print.openSourceProjects}</h2>
                <CvEntry node={azeroth} />
                <p>
                    <strong>
                        <a href={profile.contacts.nestdev}>{ui.print.labPrefix}</a>
                    </strong>{ui.symbols.space}
                    {ui.print.labProjects}
                    <br />
                    <strong>{ui.print.noderouterPrefix}</strong>{ui.symbols.space}
                    {ui.print.noderouterDescription}
                </p>
                <h2>{ui.print.education}</h2>
                {education.studies.map((study) => (
                    <p key={study.name}>
                        <strong>{study.name}</strong>{ui.symbols.space}{ui.symbols.separator}{ui.symbols.space}{study.dates}
                        <br />
                        {study.institution}
                        {study.level && (
                            <>
                                {ui.symbols.space}
                                {ui.symbols.separator}{ui.symbols.space}{study.level}
                            </>
                        )}
                    </p>
                ))}
                <CvFooter ui={ui} page={ui.print.pageTwo} />
            </div>
        </section>
    );
}
