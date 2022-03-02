import React/* , { useRef } */ from "react"
import { HashLink } from 'react-router-hash-link';

import AvatarPng from "../../data/pictures/avatar.png"

export default (props) => {
    //var CVElem = useRef(null);

    return (
        <>
            <div className="home-overlay" />
            <div className="home-content" id="scroll-down">
                <div className="home-intro">
                    <div className="col-sm-3">
                        <img style={{ width: 238 }} src={AvatarPng} alt="logo" />
                    </div>
                    <div className="col-sm-9">
                        <h2>Hello I'm</h2>
                        <h1>Joseph Roy (Aka Giuseppe Ronca)</h1>
                        <div className="type-wrap">
                            <div id="typed-strings">
                                <span>Software Engineer</span>
                                <span>Full-Stack Developer</span>
                                <span>Team Leader</span>
                            </div>
                            <span id="typed" style={{ whiteSpace: 'pre' }} />
                        </div>
                        <a className="download-link hvr-shutter-out-horizontal" href="/curriculum.pdf" download="curriculum.pdf">Resume PDF</a>
                        {/*<a className="download-link hvr-shutter-out-horizontal" href="/europass_cv.pdf" download="europass_cv.pdf">Europass PDF</a>*/}
                    </div>
                </div>
                <HashLink smooth className="scroll-down" title="Scroll Down" to="/#about"><i className="fa fa-circle" aria-hidden="true" /></HashLink>
            </div>
        </>
    )
}
