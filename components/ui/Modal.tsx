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

                // ✅ если модалка выше экрана — пусть контейнер тоже умеет скроллиться
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
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

                    // ✅ главное: НЕ hidden, иначе скролла не будет
                    overflow: "hidden",

                    // ✅ ограничиваем высоту модалки под экран и включаем скролл внутри
                    maxHeight: "calc(100dvh - 36px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                {/* (опционально) если хочешь показывать title — можно вернуть header.
            Сейчас оставляю без плашки, как ты просил. */}

                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        border: "1px solid rgba(46,42,37,0.18)",
                        background: "rgba(255,255,255,0.35)",
                        borderRadius: 999,
                        width: 40,
                        height: 40,
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        zIndex: 2,
                    }}
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {/* ✅ тут будет скролл */}
                <div
                    style={{
                        padding: 22,
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
