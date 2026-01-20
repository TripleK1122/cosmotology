"use client";

import React, { useMemo, useState } from "react";
import type { Review } from "@/lib/reviews";

type Props = { reviews: Review[] };

function Stars({ rating }: { rating: number }) {
    const full = Array.from({ length: rating });
    const empty = Array.from({ length: 5 - rating });
    return (
        <div className="je-reviews__stars" aria-label={`${rating} out of 5 stars`}>
            {full.map((_, i) => (
                <span key={`f-${i}`} className="je-reviews__star je-reviews__star--on">★</span>
            ))}
            {empty.map((_, i) => (
                <span key={`e-${i}`} className="je-reviews__star">★</span>
            ))}
        </div>
    );
}

export default function ReviewsClient({ reviews }: Props) {
    const [filter, setFilter] = useState<"All" | "Google" | "Instagram" | "Direct">("All");
    const [open, setOpen] = useState<Review | null>(null);

    const items = useMemo(() => {
        if (filter === "All") return reviews;
        return reviews.filter((r) => r.source === filter);
    }, [filter, reviews]);

    const avg = useMemo(() => {
        const sum = reviews.reduce((a, r) => a + r.rating, 0);
        return Math.round((sum / reviews.length) * 10) / 10;
    }, [reviews]);

    return (
        <div className="je-reviews">
            <header className="je-reviews__head">
                <div className="je-reviews__kicker">Testimonials</div>
                <h1 className="je-reviews__title">Reviews</h1>
                <p className="je-reviews__sub">
                    Real experiences. Calm, refined, and intentionally personal care.
                </p>

                <div className="je-reviews__summary">
                    <div className="je-reviews__avg">
                        <div className="je-reviews__avgNum">{avg}</div>
                        <div className="je-reviews__avgMeta">
                            <Stars rating={Math.round(avg)} />
                            <div className="je-reviews__count">{reviews.length} reviews</div>
                        </div>
                    </div>

                    <div className="je-reviews__filters" role="tablist" aria-label="Reviews filter">
                        {(["All", "Google", "Instagram", "Direct"] as const).map((x) => (
                            <button
                                key={x}
                                type="button"
                                className={`je-reviews__chip ${filter === x ? "is-active" : ""}`}
                                onClick={() => setFilter(x)}
                            >
                                {x}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="je-reviews__grid">
                {items.map((r) => (
                    <button
                        key={r.id}
                        type="button"
                        className="je-reviews__card"
                        onClick={() => setOpen(r)}
                    >
                        <div className="je-reviews__cardTop">
                            <div className="je-reviews__avatar" aria-hidden="true">
                                {r.initials}
                            </div>

                            <div className="je-reviews__who">
                                <div className="je-reviews__nameRow">
                                    <div className="je-reviews__name">{r.name}</div>
                                    {r.verified ? <span className="je-reviews__badge">Verified</span> : null}
                                </div>

                                <div className="je-reviews__meta">
                                    <Stars rating={r.rating} />
                                    <span className="je-reviews__dot">•</span>
                                    <span>{r.date}</span>
                                    {r.source ? (
                                        <>
                                            <span className="je-reviews__dot">•</span>
                                            <span className="je-reviews__source">{r.source}</span>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="je-reviews__cardTitle">{r.title}</div>
                        <div className="je-reviews__text">
                            {r.text}
                        </div>

                        <div className="je-reviews__cardBottom">
                            {r.treatment ? <span className="je-reviews__pill">{r.treatment}</span> : <span />}
                            <span className="je-reviews__more">Read more →</span>
                        </div>

                        <div className="je-reviews__glow" aria-hidden="true" />
                    </button>
                ))}
            </div>

            {/* Modal */}
            {open ? (
                <div className="je-reviews__modalOverlay" role="dialog" aria-modal="true">
                    <div className="je-reviews__modal">
                        <button className="je-reviews__close" onClick={() => setOpen(null)} aria-label="Close">
                            ✕
                        </button>

                        <div className="je-reviews__modalTop">
                            <div className="je-reviews__avatar je-reviews__avatar--lg" aria-hidden="true">
                                {open.initials}
                            </div>

                            <div className="je-reviews__who">
                                <div className="je-reviews__nameRow">
                                    <div className="je-reviews__name">{open.name}</div>
                                    {open.verified ? <span className="je-reviews__badge">Verified</span> : null}
                                </div>

                                <div className="je-reviews__meta">
                                    <Stars rating={open.rating} />
                                    <span className="je-reviews__dot">•</span>
                                    <span>{open.date}</span>
                                    {open.source ? (
                                        <>
                                            <span className="je-reviews__dot">•</span>
                                            <span className="je-reviews__source">{open.source}</span>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="je-reviews__modalTitle">{open.title}</div>
                        <div className="je-reviews__modalText">{open.text}</div>

                        {open.treatment ? (
                            <div className="je-reviews__modalPills">
                                <span className="je-reviews__pill">{open.treatment}</span>
                            </div>
                        ) : null}
                    </div>

                    <button
                        className="je-reviews__backdrop"
                        aria-label="Close"
                        onClick={() => setOpen(null)}
                    />
                </div>
            ) : null}
        </div>
    );
}
