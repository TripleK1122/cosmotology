import Container from "@/components/layout/Container";
import ServicesExplorer from "@/components/blocks/ServicesExplorer";

export const metadata = {
    title: "Services | Janet Esthetics",
};

export default function ServicesPage() {
    return (
        <section style={{ padding: "44px 0 60px" }}>
            <Container>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 16,
                    }}
                >
                    <div>
                        <h1 style={{ fontFamily: "ui-sans-serif", fontWeight: 700, fontSize: 34, margin: 0 }}>
                            Explore Services
                        </h1>
                        <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                            Choose a category, then select a service to view details, benefits, and pricing.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: 18 }}>
                    <ServicesExplorer />
                </div>
            </Container>
        </section>
    );
}
