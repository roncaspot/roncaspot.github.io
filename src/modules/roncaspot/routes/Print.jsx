import React from 'react';


import Curriculum from "./Home/curriculum"
import html2pdf from 'html2pdf.js';
import Data from "./Home/curriculum/data/data"

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
                    <button onClick={async () => await downloadEuropass()} className="download-link hvr-shutter-out-horizontal">Europass PDF</button>
                    <Curriculum innerRef={CVElem} print={true} display={true} />
                </div>
                {/* END CONTENT  */}
            </div>
        </div>
    </div>
}
