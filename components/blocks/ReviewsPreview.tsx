import Container from "@/components/layout/Container";
import Link from "next/link";
import { reviews } from "@/lib/reviews";

function Stars({ n }: { n: number }) {
    return (
        <div style={{ display: "flex", gap: 4, opacity: 0.75 }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ fontSize: 12 }}>
                    {i < n ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

export default function ReviewsPreview() {
    const top = reviews.slice(0, 3);

    return (
        <section style={{ padding: "46px 0 18px" }}>
            <Container>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                    <div>
                        <div style={{ fontFamily: "cursive", opacity: 0.45 }}>Client Words</div>
                        <h2 style={{ margin: "10px 0 0", fontFamily: "ui-serif", fontWeight: 500, fontSize: 54 }}>
                            Reviews
                        </h2>
                    </div>

                    <Link
                        href="/reviews"
                        style={{
                            fontSize: 14,
                            color: "rgba(46,42,37,0.72)",
                            padding: "10px 14px",
                            borderRadius: 999,
                            background: "rgba(46,42,37,0.06)",
                            border: "1px solid rgba(46,42,37,0.08)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        View All
                    </Link>
                </div>

                <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                    {top.map((r, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: "var(--surface)",
                                borderRadius: "var(--radius-lg)",
                                padding: 18,
                                boxShadow: "var(--shadow)",
                                border: "1px solid rgba(46,42,37,0.06)",
                            }}
                        >
                            <Stars n={r.rating} />
                            <div style={{ marginTop: 10, color: "rgba(46,42,37,0.78)", lineHeight: 1.75 }}>
                                “{r.text}”
                            </div>
                            <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", color: "rgba(46,42,37,0.55)", fontSize: 13 }}>
                                <span>{r.name}</span>
                                <span>{r.date ?? ""}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
