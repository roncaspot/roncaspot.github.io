import React from "react"
import ReactDOMServer from 'react-dom/server';

export function jsx2Html(element) {
    return ReactDOMServer.renderToStaticMarkup(element)
}

export function html(data) {
    return <div dangerouslySetInnerHTML={{ __html: data }} />
}

export const chunk = (input, size) => {
    return input.reduce((arr, item, idx) => {
        return idx % size === 0
            ? [...arr, [item]]
            : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
};
