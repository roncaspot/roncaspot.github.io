import React, { useRef } from "react"
import html2pdf from 'html2pdf.js';
import ReactToPrint from 'react-to-print';
import Data from "./curriculum/data/data"
import { HashLink } from 'react-router-hash-link';

import AvatarPng from "../../data/pictures/avatar.png"

import Curriculum from "./curriculum"

async function downloadEuropass() {
    const url = 'https://europass.cedefop.europa.eu/rest/v1/document/to/pdf-cv';
    var data = Data;
    delete data.CV

    function filterObject(obj, key) {
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                filterObject(obj[i], key);
            } else if (i.startsWith(key)) {
                delete obj[key];
            }
        }
        return obj;
    }

    filterObject(data, "__hwc")

    console.log(data)

    try {
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': "en"
            }
        });

        var blob = await response.blob();

        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            window.navigator.msSaveBlob(blob, "europass_cv.pdf");
        } else {
            var URL = window.URL || window.webkitURL;
            var downloadUrl = URL.createObjectURL(blob);
            //This way it downloads the file in the 3 major browsers with file name:
            var a = document.createElement("a");
            // safari doesn't support this yet
            if (typeof a.download === 'undefined') {
                window.location = downloadUrl;
            } else {
                a.href = downloadUrl;
                a.download = "europass_cv.pdf";
                document.body.appendChild(a);
                a.click();
            }
            setTimeout(function () {
                URL.revokeObjectURL(downloadUrl);
            }, 100); // cleanup 100
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export default (props) => {
    var CVElem = useRef(null);

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
                                <span>UX / UI Developer</span>
                                <span>Frontend / Backend  Developer</span>
                            </div>
                            <span id="typed" style={{ whiteSpace: 'pre' }} />
                        </div>
                        <Curriculum innerRef={CVElem} print={true} />
                        {/*<ReactToPrint
                            trigger={() => <button>Print this out!</button>}
                            content={() => CVElem.current}
                        />*/}
                        <button onClick={() => html2pdf().set({
                            jsPDF: { unit: "px", format: [1271, 2000] }
                        }).from(CVElem.current).save("curriculum.pdf")} className="download-link hvr-shutter-out-horizontal">Resume PDF</button>
                        <button onClick={async () => await downloadEuropass()} className="download-link hvr-shutter-out-horizontal">Europass PDF</button>
                    </div>
                </div>
                <HashLink className="scroll-down" title="Scroll Down" to="/#about"><i className="fa fa-circle" aria-hidden="true" /></HashLink>
            </div>
        </>
    )
}
