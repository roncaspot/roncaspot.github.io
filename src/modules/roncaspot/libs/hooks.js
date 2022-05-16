import { useEffect, useState } from "react";

export function useMarkdownContent(markdown, replacements) {
    let [content, setContent] = useState({ md: "" });

    useEffect(() => {
        fetch(markdown)
            .then((res) => res.text())
            .then((mdRaw) => {

                const md = mdRaw.replace(
                    /%(\w+)%/g,
                    (placeholderWithDelimiters, placeholderWithoutDelimiters) =>
                        replacements.hasOwnProperty(
                            placeholderWithoutDelimiters
                        )
                            ? replacements[placeholderWithoutDelimiters]
                            : placeholderWithDelimiters
                );

                setContent({ md });
            });
    }, [markdown, replacements]);

    return content;
}
