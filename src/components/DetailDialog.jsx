import { useEffect, useRef } from "react";
import BrandMark from "./BrandMark.jsx";
import { DetailContent } from "./Experience.jsx";

export default function DetailDialog({ node, ui, onClose, openerRef }) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);

    useEffect(() => {
        const dialogElement = dialogRef.current;
        if (node && dialogElement && !dialogElement.open) {
            dialogElement.showModal();
            closeRef.current?.focus();
        }
    }, [node]);

    const finishClose = () => {
        onClose();
        if (openerRef.current?.isConnected && openerRef.current.checkVisibility()) {
            openerRef.current.focus();
        }
    };

    const close = () => dialogRef.current?.close();

    const handleBackdrop = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
        ) {
            close();
        }
    };

    return (
        <dialog
            className="detail-panel"
            id="detail-panel"
            aria-labelledby="detail-title"
            data-entity={node?.id}
            ref={dialogRef}
            onClose={finishClose}
            onClick={handleBackdrop}
        >
            {node && (
                <>
                    <div className="panel-top">
                        <span id="detail-type" className="kicker">
                            {node.type}
                        </span>
                        <button
                            id="close-panel"
                            className="close-panel"
                            aria-label={ui.experience.dialog.close}
                            onClick={close}
                            ref={closeRef}
                        >
                            {ui.symbols.close}
                        </button>
                    </div>
                    <h2 id="detail-title">{node.name}</h2>
                    <div id="detail-body">
                        <div className="detail-identity">
                            <BrandMark mark={node.mark} />
                        </div>
                        <DetailContent node={node} ui={ui} />
                    </div>
                </>
            )}
        </dialog>
    );
}

