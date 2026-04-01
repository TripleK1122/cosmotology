import Container from "@/components/layout/Container";

const BOOKING_URL =
    "https://ilmnp.myaestheticrecord.com/online-booking?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnizV-mJtIEFewUT53uPB1-gwWnSYm_8BWE3MmWNFpTTcWRU2AQGMH2iC1lk0_aem_yw2WJJx84VIhygZNJOEUyA";

export const metadata = {
    title: "Booking | Janet Esthetics",
};

export default function BookingPage() {
    return (
        <section className="je-booking">
            <Container>
                <div className="je-booking__hero">
                    <div className="je-booking__kicker">Reserve Your Time</div>

                    <h1 className="je-booking__title">Book an Appointment</h1>

                    <p className="je-booking__lead">
                        Secure your appointment through our booking system. You’ll receive a
                        confirmation email within 24 hours.
                    </p>

                    <div className="je-booking__ctaWrap">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="je-booking__cta"
                        >
                            Continue to Booking <span className="je-booking__ctaArrow">→</span>
                        </a>

                        <div className="je-booking__micro">
                            You’ll be redirected to our secure booking provider.
                        </div>
                    </div>
                </div>

                <div className="je-booking__expect">
                    <div className="je-booking__expectHead">
                        <div className="je-booking__expectTitle">What to Expect</div>
                        <div className="je-booking__expectSub">
                            Calm, clear guidelines — designed to make your visit effortless.
                        </div>
                    </div>

                    <div className="je-booking__rows">
                        <div className="je-booking__row">
                            <div className="je-booking__rowTitle">Before your appointment</div>
                            <div className="je-booking__rowText">
                                You’ll receive a confirmation email with preparation guidelines, studio details and a link to complete your New Patient and Medical History forms within 24 hours.
                            </div>
                        </div>

                        <div className="je-booking__row">
                            <div className="je-booking__rowTitle">During your visit</div>
                            <div className="je-booking__rowText">
                                Please arrive 10 minutes early. The studio is private — one
                                client per appointment, focused entirely on your treatment and
                                comfort.
                            </div>
                        </div>

                        <div className="je-booking__row">
                            <div className="je-booking__rowTitle">Cancellation policy</div>
                            <div className="je-booking__rowText">
                                We kindly request at least 24 hours notice for any appointment
                                changes or cancellations.
                            </div>
                        </div>
                    </div>

                    <div className="je-booking__expectGlow" aria-hidden="true" />
                </div>

                <div className="je-booking__triples">
                    {[
                        { title: "Private", desc: "One client per appointment" },
                        { title: "Flexible", desc: "Rescheduling available with notice" },
                        { title: "Personal", desc: "Tailored individually" },
                    ].map((x) => (
                        <div key={x.title} className="je-booking__mini">
                            <div className="je-booking__miniTitle">{x.title}</div>
                            <div className="je-booking__miniDesc">{x.desc}</div>
                            <div className="je-booking__miniGlow" aria-hidden="true" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
