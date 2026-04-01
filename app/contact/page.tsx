import Container from "@/components/layout/Container";

export const metadata = {
    title: "Contact | Janet Esthetics",
};

const CONTACT = {
    addressLines: ["325 N Milwaukee Ave, Suite G1 Wheeling, IL 60090"],
    phoneDisplay: "847-454-4749",
    phoneHref: "847-454-4749",
    email: "ztsybulyak@yahoo.com",
    instagramHandle: "@janetesthetics",
    instagramUrl: "https://www.instagram.com/janet_esthetics/",

    mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.244620850394!2d-87.9124952231376!3d42.14505187121383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbec93cf09e81%3A0xc349b27cae197f5!2s325%20N%20Milwaukee%20Ave%20g1%2C%20Wheeling%2C%20IL%2060090!5e0!3m2!1sru!2sus!4v1768883069528!5m2!1sru!2sus",

    mapOpenUrl: "https://maps.app.goo.gl/gmS8Ku8kfoCDVHYg9",
};

export default function ContactPage() {
    return (
        <section className="je-contact">
            <Container>
                <header className="je-contact__head">
                    <div className="je-contact__kicker">Connect</div>
                    <h1 className="je-contact__title">Contact</h1>
                    <p className="je-contact__sub">
                        Studio details, hours, and directions — all in one place.
                    </p>
                </header>

                <div className="je-contact__grid">
                    <div className="je-contact__left">
                        <div className="je-contact__card">
                            <div className="je-contact__cardTitle">Studio Information</div>

                            <div className="je-contact__rows">
                                <div className="je-contact__row">
                                    <div className="je-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M12 10.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>

                                    <div className="je-contact__rowBody">
                                        <div className="je-contact__label">Location</div>
                                        <div className="je-contact__value">
                                            {CONTACT.addressLines.map((l) => (
                                                <div key={l}>{l}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="je-contact__row">
                                    <div className="je-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M8.8 4.5 7.7 3.4c-.7-.7-1.8-.7-2.5 0l-1 1c-.8.8-1 2-.5 3 1.8 3.7 4.9 6.8 8.6 8.6 1 .5 2.2.3 3-.5l1-1c.7-.7.7-1.8 0-2.5l-1.1-1.1c-.6-.6-1.5-.7-2.2-.3l-.7.4c-.6.3-1.3.2-1.8-.2l-2.8-2.8c-.4-.4-.5-1.2-.2-1.8l.4-.7c.4-.7.3-1.6-.3-2.2Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <div className="je-contact__rowBody">
                                        <div className="je-contact__label">Phone</div>
                                        <a className="je-contact__link" href={`tel:${CONTACT.phoneHref}`}>
                                            {CONTACT.phoneDisplay}
                                        </a>
                                    </div>
                                </div>

                                <div className="je-contact__row">
                                    <div className="je-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M4.5 7.5h15A2 2 0 0 1 21.5 9.5v9A2 2 0 0 1 19.5 20.5h-15A2 2 0 0 1 2.5 18.5v-9A2 2 0 0 1 4.5 7.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="m4.5 9 7.5 5 7.5-5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <div className="je-contact__rowBody">
                                        <div className="je-contact__label">Email</div>
                                        <a className="je-contact__link" href={`mailto:${CONTACT.email}`}>
                                            {CONTACT.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="je-contact__row">
                                    <div className="je-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M7.5 3.8h9A3.7 3.7 0 0 1 20.2 7.5v9a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9A3.7 3.7 0 0 1 7.5 3.8Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M12 15.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M17.1 7.2h.01"
                                                stroke="currentColor"
                                                strokeWidth="2.2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>

                                    <div className="je-contact__rowBody">
                                        <div className="je-contact__label">Instagram</div>
                                        <a
                                            className="je-contact__link"
                                            href={CONTACT.instagramUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {CONTACT.instagramHandle}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="je-contact__cardGlow" aria-hidden="true" />
                        </div>

                        <div className="je-contact__card je-contact__hours">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "120px 1fr",
                                    gap: "22px",
                                    alignItems: "start",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "12px",
                                        letterSpacing: "0.28em",
                                        textTransform: "uppercase",
                                        color: "rgba(46, 42, 37, 0.5)",
                                        paddingTop: "4px",
                                    }}
                                >
                                    Hours
                                </div>

                                <div
                                    style={{
                                        display: "grid",
                                        gap: "10px",
                                        color: "rgba(46, 42, 37, 0.72)",
                                        fontSize: "18px",
                                        lineHeight: "1.45",
                                    }}
                                >
                                    <div>Mon–Thu · 9:00–20:00</div>
                                    <div>Fri · 8:00–18:00</div>
                                    <div>Sat · 9:00–17:00</div>
                                    <div>Sunday · By request</div>
                                </div>
                            </div>

                            <div className="je-contact__cardGlow" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="je-contact__mapCard">
                        <div className="je-contact__mapTop">
                            <div className="je-contact__mapTitle">Directions</div>
                            <div className="je-contact__mapHint">
                                Tap “View larger map” for navigation.
                            </div>

                            <div style={{ marginTop: 10 }}>
                                <a
                                    className="je-contact__link"
                                    href={CONTACT.mapOpenUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>

                        <div className="je-contact__mapFrame">
                            <iframe
                                title="Janet Esthetics Map"
                                src={CONTACT.mapEmbedSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>

                        <div className="je-contact__cardGlow" aria-hidden="true" />
                    </div>
                </div>
            </Container>
        </section>
    );
} 