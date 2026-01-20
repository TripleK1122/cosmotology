"use client";

import { useEffect } from "react";

export default function Modal({
    open,
    onClose,
    title,
    children,
}: {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}) {
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(0,0,0,0.35)",
                display: "grid",
                placeItems: "center",
                padding: 18,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "min(860px, 100%)",
                    borderRadius: 26,
                    border: "1px solid rgba(46,42,37,0.12)",
                    background: "rgba(247, 241, 232, 0.98)",
                    boxShadow: "0 26px 80px rgba(0,0,0,0.25)",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        padding: "18px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid rgba(46,42,37,0.10)",
                    }}
                >
                    <div style={{ fontFamily: "ui-serif", fontSize: 20, color: "rgba(46,42,37,0.88)" }}>
                        {title}
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            border: "1px solid rgba(46,42,37,0.18)",
                            background: "rgba(255,255,255,0.35)",
                            borderRadius: 999,
                            padding: "10px 14px",
                            cursor: "pointer",
                        }}
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                <div style={{ padding: 22 }}>{children}</div>
            </div>
        </div>
    );
}
