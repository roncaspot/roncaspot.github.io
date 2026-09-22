import { Fragment } from "react";
import BrandMark from "./BrandMark.jsx";

function DetailContent({ node, ui }) {
    return (
        <>
            <p className="detail-role">{node.role}</p>
            {node.contextHtml && (
                <p dangerouslySetInnerHTML={{ __html: node.contextHtml }} />
            )}
            {node.dates && <p className="date">{node.dates}</p>}
            <ul className="highlights">
                {node.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
            {node.tech && (
                <p className="detail-tech">
                    <strong>{ui.experience.tech}</strong> {node.tech}
                </p>
            )}
            {node.relationshipsHtml.map((relationship) => (
                <p
                    className="relationship"
                    key={relationship}
                    dangerouslySetInnerHTML={{ __html: relationship }}
                />
            ))}
            {node.links.length > 0 && (
                <p className="detail-links">
                    {node.links.map((link) => (
                        <a href={link.url} key={link.url}>
                            {link.label}
                        </a>
                    ))}
                </p>
            )}
        </>
    );
}

function GraphNode({
    node,
    label,
    description = node.role,
    className = "",
    onOpen,
    onHighlight,
    selected,
}) {
    return (
        <button
            className={["node", className, selected ? "selected" : ""]
                .filter(Boolean)
                .join(" ")}
            data-node={node.id}
            aria-haspopup="dialog"
            aria-controls="detail-panel"
            onClick={(event) => onOpen(node.id, event.currentTarget)}
            onMouseEnter={() => onHighlight(node.id)}
            onMouseLeave={() => onHighlight(null)}
            onFocus={() => onHighlight(node.id)}
            onBlur={() => onHighlight(null)}
        >
            <span className="mini-label">{label}</span>
            <span className="node-title">
                <BrandMark mark={node.mark} />
                <strong className="node-name">{node.name}</strong>
            </span>
            <span className="node-description">{description}</span>
            {node.dates && <span className="node-date">{node.dates}</span>}
        </button>
    );
}

function ListEntry({ node, ui, onOpen }) {
    return (
        <li>
            <details>
                <summary>
                    <span className="list-identity">
                        <BrandMark mark={node.mark} />
                        <span className="list-copy">
                            <span className="list-name">{node.name}</span>
                            <span className="list-role">{node.role}</span>
                        </span>
                    </span>
                    <span className="date">
                        {node.dates}{ui.symbols.space}
                        <span aria-hidden="true">{ui.symbols.expand}</span>
                    </span>
                </summary>
                <div className="list-detail">
                    <DetailContent node={node} ui={ui} />
                    <button
                        className="small-button"
                        data-node={node.id}
                        aria-haspopup="dialog"
                        aria-controls="detail-panel"
                        onClick={(event) => onOpen(node.id, event.currentTarget)}
                    >
                        {ui.experience.openPanel}
                    </button>
                </div>
            </details>
        </li>
    );
}

export default function Experience({
    data,
    nodes,
    ui,
    view,
    onViewChange,
    onOpenNode,
    selectedId,
    highlightedId,
    onHighlight,
}) {
    const effectiveHighlight = highlightedId || selectedId;

    return (
        <section className="experience" id="experience">
            <div className="intro">
                <div>
                    <span className="kicker">{ui.sections.experience.kicker}</span>
                    <h2>{ui.sections.experience.heading}</h2>
                </div>
                <p>
                    {ui.sections.experience.introLines.map((line, index) => (
                        <span key={line}>
                            {line}
                            {index < ui.sections.experience.introLines.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            <div className="graph-toolbar">
                <div className="view-toggle" role="group" aria-label={ui.experience.viewAriaLabel}>
                    <button
                        id="graph-button"
                        aria-pressed={view === "graph"}
                        aria-controls="graph-view"
                        onClick={() => onViewChange("graph")}
                    >
                        {ui.experience.graph}
                    </button>
                    <button
                        id="list-button"
                        aria-pressed={view === "list"}
                        aria-controls="list-view"
                        onClick={() => onViewChange("list")}
                    >
                        {ui.experience.list}
                    </button>
                </div>
                <p>{ui.experience.instruction}</p>
                <div className="legend">
                    <span>{ui.experience.legendClient}</span>
                    <span className="production-key">{ui.experience.legendProduction}</span>
                </div>
            </div>
            <div id="graph-view" hidden={view !== "graph"}>
                <div className="complete-map">
                    <svg
                        className="map-edges"
                        viewBox="0 0 1280 956"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {data.edges.map((edge) => (
                            <path
                                className={[
                                    "edge",
                                    edge.type,
                                    effectiveHighlight &&
                                    (edge.from === effectiveHighlight || edge.to === effectiveHighlight)
                                        ? "highlight"
                                        : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                data-from={edge.from}
                                data-to={edge.to}
                                data-kind={edge.type}
                                d={edge.path}
                                key={[edge.from, edge.to, edge.type].join("-")}
                            />
                        ))}
                    </svg>
                    <article className="node hub nestdev-node" data-entity="nestdev">
                        <span className="mini-label">{ui.experience.companyType}</span>
                        <h3>
                            <BrandMark mark={nodes.nestdev.mark} />
                            <a
                                href={nodes.nestdev.url}
                                data-highlight="nestdev"
                                onMouseEnter={() => onHighlight("nestdev")}
                                onMouseLeave={() => onHighlight(null)}
                                onFocus={() => onHighlight("nestdev")}
                                onBlur={() => onHighlight(null)}
                            >
                                {nodes.nestdev.name}{ui.symbols.space}{ui.symbols.external}
                            </a>
                        </h3>
                        <p>{ui.experience.companyDates}</p>
                        <button
                            className="hub-details"
                            data-node="nestdev"
                            aria-haspopup="dialog"
                            aria-controls="detail-panel"
                            onClick={(event) => onOpenNode("nestdev", event.currentTarget)}
                        >
                            {ui.experience.viewDetails}
                            <span aria-hidden="true">{ui.symbols.external}</span>
                        </button>
                    </article>
                    <section
                        className="consultancy-cluster"
                        aria-label={ui.experience.consultancyHeading}
                    >
                        <h3 className="cluster-heading">{ui.experience.consultancyHeading}</h3>
                        <div className="consultancy-nodes">
                            {data.layout.consultancy.map((item) => (
                                <GraphNode
                                    key={item.id}
                                    node={nodes[item.id]}
                                    label={item.label}
                                    className={item.className}
                                    onOpen={onOpenNode}
                                    onHighlight={onHighlight}
                                    selected={selectedId === item.id}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="lab-cluster" aria-labelledby="lab-heading">
                        <div className="cluster-top">
                            <h3
                                id="lab-heading"
                                data-highlight="lab"
                                onMouseEnter={() => onHighlight("lab")}
                                onMouseLeave={() => onHighlight(null)}
                            >
                                <BrandMark mark={nodes.nestdev.mark} />
                                <a href={nodes.nestdev.url}>{ui.experience.labHeadingName}</a>
                                <span>{ui.experience.labHeadingSuffix}</span>
                            </h3>
                            <span className="mini-label">{ui.experience.openSource}</span>
                        </div>
                        <div className="lab-nodes">
                            {data.layout.lab.map((id) => (
                                <GraphNode
                                    key={id}
                                    node={nodes[id]}
                                    label={ui.experience.openSource}
                                    description={nodes[id].highlights[0]}
                                    onOpen={onOpenNode}
                                    onHighlight={onHighlight}
                                    selected={selectedId === id}
                                />
                            ))}
                        </div>
                        <a
                            className="all-projects"
                            data-highlight="lab"
                            href={data.allProjectsUrl}
                            onMouseEnter={() => onHighlight("lab")}
                            onMouseLeave={() => onHighlight(null)}
                        >
                            {ui.experience.allProjects}
                        </a>
                    </section>
                    <section
                        className="azeroth-cluster"
                        aria-label={ui.experience.azerothHeading}
                    >
                        <h3 className="cluster-heading">{ui.experience.azerothHeading}</h3>
                        <GraphNode
                            node={nodes.azerothcore}
                            label={ui.experience.activeOpenSource}
                            className="hub"
                            onOpen={onOpenNode}
                            onHighlight={onHighlight}
                            selected={selectedId === "azerothcore"}
                        />
                        <GraphNode
                            node={nodes.noderouter}
                            label={ui.experience.azerothProject}
                            description={nodes.noderouter.highlights[0]}
                            onOpen={onOpenNode}
                            onHighlight={onHighlight}
                            selected={selectedId === "noderouter"}
                        />
                    </section>
                    <section className="production-cluster" aria-labelledby="production-heading">
                        <h3 id="production-heading">
                            <span className="dash-key" aria-hidden="true" />
                            {ui.experience.productionHeading}
                        </h3>
                        <div className="production-nodes">
                            {data.layout.production.map((id) => {
                                const node = nodes[id];
                                return (
                                    <button
                                        className={[
                                            "production-node",
                                            selectedId === id ? "selected" : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")}
                                        data-node={id}
                                        aria-haspopup="dialog"
                                        aria-controls="detail-panel"
                                        key={id}
                                        onClick={(event) => onOpenNode(id, event.currentTarget)}
                                        onMouseEnter={() => onHighlight(id)}
                                        onMouseLeave={() => onHighlight(null)}
                                        onFocus={() => onHighlight(id)}
                                        onBlur={() => onHighlight(null)}
                                    >
                                        <span className="production-title">
                                            <BrandMark mark={node.mark} />
                                            <strong>{node.productionName || node.name}</strong>
                                        </span>
                                        <span className="production-role">{node.role}</span>
                                        <span className="production-date">{node.dates}</span>
                                        <span className="production-open">
                                            {ui.experience.viewDetails}{ui.symbols.space}{ui.symbols.external}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                </div>
                <section className="career-history" aria-labelledby="career-heading">
                    <div className="section-row">
                        <h3 id="career-heading">{ui.experience.earlierCareer}</h3>
                        <span>{ui.experience.earlierNote}</span>
                    </div>
                    <ol>
                        {data.layout.graphCareer.map((id) => {
                            const node = nodes[id];
                            return (
                                <li key={id}>
                                    <button
                                        data-node={id}
                                        aria-haspopup="dialog"
                                        aria-controls="detail-panel"
                                        className={selectedId === id ? "selected" : undefined}
                                        onClick={(event) => onOpenNode(id, event.currentTarget)}
                                        onMouseEnter={() => onHighlight(id)}
                                        onMouseLeave={() => onHighlight(null)}
                                        onFocus={() => onHighlight(id)}
                                        onBlur={() => onHighlight(null)}
                                    >
                                        <span className="history-date">{node.dates}</span>
                                        <span className="history-identity">
                                            <BrandMark mark={node.mark} />
                                            <span className="history-name">{node.name}</span>
                                        </span>
                                        <span className="history-role">
                                            {node.role}
                                            <span aria-hidden="true">{ui.symbols.external}</span>
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                </section>
            </div>
            <div id="list-view" hidden={view !== "list"}>
                {data.layout.listGroups.slice(0, 3).map((group) => (
                    <Fragment key={group.id}>
                        <section className="list-group">
                            <h3>{ui.experience.listGroups[group.id]}</h3>
                            <ul>
                                {group.nodes.map((id) => (
                                    <ListEntry
                                        key={id}
                                        node={nodes[id]}
                                        ui={ui}
                                        onOpen={onOpenNode}
                                    />
                                ))}
                            </ul>
                        </section>
                        {group.id === "lab" && (
                            <p>
                                <a href={data.allProjectsUrl}>
                                    {ui.experience.allProjects}
                                </a>
                            </p>
                        )}
                    </Fragment>
                ))}
                <div className="list-production">
                    <h3>{ui.experience.productionHeading}</h3>
                    <p>
                        <a href={nodes.nestdev.url}>{ui.experience.productionLead}</a>
                        {data.layout.production.map((id, index) => (
                            <Fragment key={id}>
                                <button
                                    className="inline-node"
                                    data-node={id}
                                    aria-haspopup="dialog"
                                    aria-controls="detail-panel"
                                    onClick={(event) => onOpenNode(id, event.currentTarget)}
                                >
                                    <BrandMark mark={nodes[id].mark} />
                                    {nodes[id].name}
                                </button>
                                {index < data.layout.production.length - 1 &&
                                    ui.symbols.listSeparator}
                            </Fragment>
                        ))}
                    </p>
                </div>
                {data.layout.listGroups.slice(3).map((group) => (
                    <section className="list-group" key={group.id}>
                        <h3>{ui.experience.listGroups[group.id]}</h3>
                        <ul>
                            {group.nodes.map((id) => (
                                <ListEntry
                                    key={id}
                                    node={nodes[id]}
                                    ui={ui}
                                    onOpen={onOpenNode}
                                />
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </section>
    );
}

export { DetailContent };
