import React from 'react';


import Curriculum from "./Home/curriculum"
import html2pdf from 'html2pdf.js';

export default () => {
    var CVElem = React.useRef(null);

    return <div>
        <div className="container-fluid">
            <div className="row">
                {/* START CONTENT  */}
                <div className="main scroll-page">
                    {/* START HOME SECTION*/}
                    <button onClick={() => html2pdf().set({
                        pagebreak: { mode: 'avoid-all' },
                        jsPDF: { unit: "cm", format: "a3" }
                    }).from(CVElem.current).save("curriculum.pdf")} className="download-link hvr-shutter-out-horizontal">Resume PDF</button>
                    <Curriculum innerRef={CVElem} print={true} display={true} />
                </div>
                {/* END CONTENT  */}
            </div>
        </div>
    </div>
}
