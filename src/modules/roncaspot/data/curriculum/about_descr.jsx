import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "./about_descr.md";
import { useMarkdownContent } from "../../libs/hooks"

export default () => {
    var startYear = 2007;
    var now = new Date().getFullYear();
    const yearOfExperience = now - startYear;

    const content = useMarkdownContent(markdown, {
        yearOfExperience,
        startYear,
    });

    return (
        <>
            <ReactMarkdown linkTarget="_blank" children={content.md} />
        </>
    );
};
