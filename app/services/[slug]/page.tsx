import Container from "@/components/layout/Container";

export const metadata = {
    title: "About | Janet Esthetics",
};

export default function AboutPage() {
    return (
        <section style={{ padding: "54px 0 44px" }}>
            <Container>
                <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
                    <div style={{ fontFamily: "cursive", opacity: 0.45 }}>Our Studio</div>
                    <h1 style={{ margin: "10px 0 0", fontFamily: "ui-serif", fontWeight: 500, fontSize: 56 }}>
                        About Janet Esthetics
                    </h1>
                    <p style={{ marginTop: 14, color: "rgba(46,42,37,0.6)", lineHeight: 1.8 }}>
                        Private aesthetic studio focused on refined, natural results and a calm client experience.
                    </p>
                </div>
            </Container>
        </section>
    );
}
