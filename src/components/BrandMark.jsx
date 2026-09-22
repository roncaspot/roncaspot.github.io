export default function BrandMark({ mark, extraClass = "" }) {
    if (!mark) {
        return null;
    }

    const className = ["inline-mark", mark.className, extraClass]
        .filter(Boolean)
        .join(" ");

    if (mark.type === "image") {
        return (
            <span className={className} aria-hidden="true">
                <img src={mark.src} alt="" />
            </span>
        );
    }

    return (
        <span className={className} aria-hidden="true">
            {mark.text}
        </span>
    );
}
