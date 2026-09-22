import { useEffect, useMemo, useRef, useState } from "react";
import BackgroundData from "./data/education.json";
import ExperienceData from "./data/experience.json";
import Profile from "./data/profile.json";
import ProjectsData from "./data/projects.json";
import SkillsData from "./data/skills.json";
import Ui from "./data/ui.json";
import {
    About,
    Background,
    Contact,
    Projects,
    Skills,
} from "./components/ContentSections.jsx";
import DetailDialog from "./components/DetailDialog.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import PrintableCv from "./components/PrintableCv.jsx";

export default function App() {
    const [theme, setTheme] = useState("system");
    const [view, setView] = useState("graph");
    const [selectedId, setSelectedId] = useState(null);
    const [highlightedId, setHighlightedId] = useState(null);
    const [status, setStatus] = useState("");
    const openerRef = useRef(null);
    const years = String(new Date().getFullYear() - Profile.careerStartYear);
    const nodes = useMemo(
        () => Object.fromEntries(ExperienceData.nodes.map((node) => [node.id, node])),
        [],
    );

    useEffect(() => {
        document.title = Profile.siteTitle;
        let description = document.querySelector('meta[name="description"]');
        if (!description) {
            description = document.createElement("meta");
            description.name = "description";
            document.head.append(description);
        }
        description.content = Profile.description;
    }, []);

    useEffect(() => {
        if (theme === "system") {
            delete document.documentElement.dataset.theme;
        } else {
            document.documentElement.dataset.theme = theme;
        }
    }, [theme]);

    const openNode = (id, opener) => {
        openerRef.current = opener;
        setSelectedId(id);
        setHighlightedId(id);
        setStatus(Ui.experience.dialog.openedTemplate.replace("{{name}}", nodes[id].name));
    };

    const closeNode = () => {
        setStatus(Ui.experience.dialog.closed);
        setSelectedId(null);
        setHighlightedId(null);
    };

    const highlight = (id) => {
        setHighlightedId(id || selectedId);
    };

    return (
        <>
            <a className="skip" href="#main">
                {Ui.skipToContent}
            </a>
            <div className="screen-site shell" id="home">
                <main id="main">
                    <Hero
                        profile={Profile}
                        ui={Ui}
                        nodes={nodes}
                        theme={theme}
                        onThemeChange={setTheme}
                        onOpenNode={openNode}
                    />
                    <About profile={Profile} ui={Ui} years={years} />
                    <Skills skills={SkillsData} ui={Ui} />
                    <Experience
                        data={ExperienceData}
                        nodes={nodes}
                        ui={Ui}
                        view={view}
                        onViewChange={setView}
                        onOpenNode={openNode}
                        selectedId={selectedId}
                        highlightedId={highlightedId}
                        onHighlight={highlight}
                    />
                    <Projects projects={ProjectsData} ui={Ui} />
                    <Background education={BackgroundData} ui={Ui} />
                    <Contact profile={Profile} ui={Ui} />
                </main>
                <footer className="foot">
                    <span>{Ui.footer.identity}</span>
                    <button className="small-button" onClick={() => window.print()}>
                        {Ui.footer.print}
                    </button>
                    <a href="#home">{Ui.symbols.backToTop}</a>
                </footer>
            </div>
            <PrintableCv
                profile={Profile}
                skills={SkillsData}
                education={BackgroundData}
                experience={ExperienceData}
                nodes={nodes}
                ui={Ui}
                years={years}
            />
            <DetailDialog
                node={selectedId ? nodes[selectedId] : null}
                ui={Ui}
                onClose={closeNode}
                openerRef={openerRef}
            />
            <div className="sr-only" role="status" aria-live="polite">
                {status}
            </div>
        </>
    );
}

