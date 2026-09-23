export default function Hero({
    profile,
    ui,
    nodes,
    theme,
    onThemeChange,
    onOpenNode,
}) {
    return (
        <div className="vista-frame">
            <header className="vista-nav">
                <a className="wordmark" href="#home">
                    {profile.wordmark.base}
                    <span>{profile.wordmark.accent}</span>
                </a>
                <nav aria-label={ui.navigation.ariaLabel}>
                    {ui.navigation.items.map((item) => (
                        <a href={item.href} key={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <button
                    type="button"
                    className="theme-toggle"
                    id="theme"
                    aria-pressed={theme === "dark"}
                    aria-label={theme === "dark" ? ui.theme.toLight : ui.theme.toDark}
                    title={theme === "dark" ? ui.theme.toLight : ui.theme.toDark}
                    onClick={onThemeChange}
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        {theme === "dark" ? (
                            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                <circle cx="12" cy="12" r="4.2" />
                                <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
                            </g>
                        ) : (
                            <path
                                fill="currentColor"
                                d="M20.7 14.6A8.8 8.8 0 0 1 9.4 3.3a1 1 0 0 0-1.3-1.2 10.6 10.6 0 1 0 13.8 13.8 1 1 0 0 0-1.2-1.3Z"
                            />
                        )}
                    </svg>
                </button>
            </header>
            <section className="vista-hero">
                <img
                    className="landscape"
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                />
                <div className="photo-shade" />
                <div className="copy">
                    <p className="availability">
                        <i />
                        {profile.availability}
                    </p>
                    <p className="name">{profile.name}</p>
                    <h1>
                        {profile.headline.firstLine}
                        <br />
                        {profile.headline.secondLine}
                        <em>{profile.headline.accent}</em>
                    </h1>
                    <p className="role">
                        {profile.roleLines.map((line, index) => (
                            <span key={line}>
                                {line}
                                {index < profile.roleLines.length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                    <div className="actions">
                        <a className="primary" href={profile.contacts.emailHref}>
                            {ui.heroActions.talk}
                            <b aria-hidden="true">{ui.symbols.external}</b>
                        </a>
                        <a
                            className="secondary"
                            id="download-cv"
                            download={profile.cvDownloadName}
                            href={profile.cvDownload}
                        >
                            {ui.heroActions.download}
                            <b aria-hidden="true">{ui.symbols.download}</b>
                        </a>
                        <a className="social" href={profile.contacts.linkedin}>
                            {ui.heroActions.linkedin}
                        </a>
                    </div>
                    <p className="facts">
                        {profile.location}
                        <span>{ui.symbols.separator}</span>
                        {profile.workStyle}
                    </p>
                </div>
                <span className="photo-note">{profile.photo.caption}</span>
            </section>
            <section className="logo-band" aria-label={ui.identity.ariaLabel}>
                <p className="band-intro">
                    {ui.identity.introFirstLine}
                    <br />
                    {ui.identity.introSecondLine}
                </p>
                <div className="marks">
                    {profile.identityIds.map((id) => {
                        const node = nodes[id];
                        const button = (
                            <button
                                key={id}
                                className="brand"
                                data-node={id}
                                aria-haspopup="dialog"
                                aria-controls="detail-panel"
                                onClick={(event) => onOpenNode(id, event.currentTarget)}
                            >
                                <div className="mark-line">
                                    <img
                                        className={["mark", node.mark.markClass]
                                            .filter(Boolean)
                                            .join(" ")}
                                        src={node.mark.src}
                                        alt=""
                                        width={node.mark.identityWidth}
                                        height={node.mark.identityHeight}
                                    />
                                </div>
                                <span className="brand-name">{node.name}</span>
                                <span className="brand-label">
                                    {ui.identity.labels[id]}
                                </span>
                            </button>
                        );

                        if (id !== "nestdev") {
                            return button;
                        }

                        return (
                            <div className="brand-stack" key={id}>
                                {button}
                                <a className="brand-site" href={profile.contacts.nestdev}>
                                    {ui.identity.nestdevSite}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
