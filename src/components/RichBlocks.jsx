export default function RichBlocks({ blocks }) {
    return blocks.map((block, index) => {
        if (block.type === "list") {
            return (
                <ul key={index}>
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        }

        return (
            <p
                key={index}
                dangerouslySetInnerHTML={{ __html: block.html }}
            />
        );
    });
}
