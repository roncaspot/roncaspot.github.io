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
                <label className="theme-control">
                    <span className="sr-only">{ui.theme.label}</span>
                    <select
                        id="theme"
                        value={theme}
                        onChange={(event) => onThemeChange(event.target.value)}
                    >
                        {ui.theme.options.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
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
