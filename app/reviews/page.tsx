import Container from "@/components/layout/Container";
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

export const metadata = {
    title: "Reviews | Janet Esthetics",
};

export default function ReviewsPage() {
    return (
        <section style={{ padding: "54px 0 44px" }}>
            <Container>
                <div style={{ textAlign: "center", marginBottom: 26 }}>
                    <div style={{ fontFamily: "cursive", opacity: 0.45 }}>Client Words</div>
                    <h1 style={{ margin: "10px 0 0", fontFamily: "ui-serif", fontWeight: 500, fontSize: 64 }}>
                        Reviews
                    </h1>
                    <p style={{ marginTop: 14, color: "var(--muted)", maxWidth: 720, marginInline: "auto", lineHeight: 1.8 }}>
                        Every appointment is designed to feel calm, private, and results-driven. Here’s what clients are saying.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: "var(--surface)",
                                borderRadius: "var(--radius-lg)",
                                padding: 20,
                                boxShadow: "var(--shadow)",
                                border: "1px solid rgba(46,42,37,0.06)",
                            }}
                        >
                            <Stars n={r.rating} />

                            <div style={{ marginTop: 12, color: "rgba(46,42,37,0.82)", lineHeight: 1.8, fontSize: 15.5 }}>
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
