export const metadata = {
    title: "FAQ — Janet Esthetics",
    description:
        "Frequently asked questions about PRP hair therapy, PRP skin treatments, and microneedling.",
};

const sections = [
    {
        title: "PRP Hair Injections — FAQ",
        items: [
            {
                q: "What is PRP hair therapy and how does it work?",
                a: "PRP is made from your own blood and contains growth factors that help stimulate hair follicles. It supports stronger, thicker hair and healthier scalp function.",
            },
            {
                q: "Who is a good candidate for PRP hair injections?",
                a: "PRP is best for early to moderate hair thinning and shedding. A consultation helps confirm if your hair loss type will respond well.",
            },
            {
                q: "Is the treatment safe and natural?",
                a: "Yes—PRP uses your own platelets, so it’s a natural treatment with a very low risk of allergic reactions. It’s performed with sterile medical technique for safety.",
            },
            {
                q: "Is there any downtime after the procedure?",
                a: "Downtime is minimal—most people return to normal activities the same day. You may have mild tenderness or scalp sensitivity for 24–48 hours.",
            },
            {
                q: "How many sessions are recommended for best results?",
                a: "Most clients do a series of 3 sessions spaced about 4–6 weeks apart. Maintenance is often recommended every 4–6 months depending on your goals.",
            },
            {
                q: "When can I expect visible hair growth?",
                a: "Many people notice reduced shedding within 4–6 weeks. Visible thickening typically appears around 3–4 months as hair cycles.",
            },
            {
                q: "Can PRP help with hair thinning and hair loss?",
                a: "PRP can help reduce shedding and improve density, especially with thinning hair. Results depend on the cause of hair loss and consistency of sessions.",
            },
            {
                q: "Can PRP be combined with other hair treatments?",
                a: "Yes, PRP is often combined with microneedling, topical treatments, or certain hair-growth programs. We can build a plan that fits your scalp and goals.",
            },
        ],
    },
    {
        title: "PRP / Platelet-Rich Plasma — Frequently Asked Questions",
        items: [
            {
                q: "What is PRP and how is it different from regular plasma?",
                a: "PRP is plasma with a higher concentration of platelets and growth factors. That’s why it’s used to support healing, collagen, and tissue renewal.",
            },
            {
                q: "How is PRP prepared?",
                a: "A small blood sample is taken and spun in a centrifuge to separate and concentrate platelets. The PRP is then applied or injected into the treatment area.",
            },
            {
                q: "Is PRP safe?",
                a: "Yes—because it’s made from your own blood, PRP is considered very safe. Side effects are usually mild, like redness or temporary swelling.",
            },
            {
                q: "What areas can be treated with PRP (face, scalp, neck)?",
                a: "PRP can be used for the scalp, face, neck, and under-eye area depending on the technique. The best area and method are chosen during consultation.",
            },
            {
                q: "Is there a risk of allergic reactions?",
                a: "Allergic reactions are extremely rare because PRP comes from your own body. Any risk is typically related to injection sensitivity, not the PRP itself.",
            },
            {
                q: "How many treatments are needed?",
                a: "Most people need a series of 3 treatments, about 4–6 weeks apart. Maintenance sessions help keep results long-term.",
            },
            {
                q: "When will results appear and how long do they last?",
                a: "Skin glow and texture may improve within a few weeks, while collagen changes take 2–3 months. Results can last 6–12 months depending on lifestyle and skin condition.",
            },
            {
                q: "Can PRP be combined with microneedling or injections?",
                a: "Yes—PRP pairs beautifully with microneedling or targeted injections. Combination treatment often boosts results and improves recovery.",
            },
        ],
    },
    {
        title: "Microneedling — Frequently Asked Questions",
        items: [
            {
                q: "What is microneedling and how does it work?",
                a: "Microneedling uses tiny sterile needles to create micro-channels in the skin. This triggers collagen production and improves texture and tone.",
            },
            {
                q: "What skin concerns does microneedling treat?",
                a: "It can improve fine lines, enlarged pores, acne scars, uneven texture, and dullness. It also helps skin look smoother and more refined.",
            },
            {
                q: "Is the procedure painful?",
                a: "Most clients feel mild discomfort, and numbing can be used for comfort. The sensation is often described as light pressure or scratching.",
            },
            {
                q: "How long is the downtime?",
                a: "Typically 1–3 days of redness similar to a sunburn. Some dryness or light flaking may happen as the skin renews.",
            },
            {
                q: "When will I see results?",
                a: "Many people notice glow within a week. Stronger collagen results build over 4–6 weeks and continue improving with each session.",
            },
            {
                q: "How many sessions are recommended?",
                a: "Most clients need 3–6 sessions, depending on the concern being treated. We personalize the plan based on your skin goals.",
            },
            {
                q: "Can microneedling be done for acne scars or pigmentation?",
                a: "Yes—microneedling is commonly used for acne scars and uneven pigmentation. For deeper scarring or darker pigmentation, a customized approach is important for safety.",
            },
            {
                q: "Can microneedling be combined with PRP or other treatments?",
                a: "Yes—PRP can be added to enhance healing and improve outcomes. It can also be paired with selected professional skincare for better long-term results.",
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <main style={{ padding: "88px 0 72px" }}>
            <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 18px" }}>
                <div
                    style={{
                        fontSize: 12,
                        letterSpacing: ".28em",
                        textTransform: "uppercase",
                        color: "rgba(46,42,37,0.55)",
                        marginBottom: 14,
                    }}
                >
                    FAQ
                </div>

                <h1
                    style={{
                        fontFamily: "ui-serif",
                        fontSize: 52,
                        lineHeight: 1.05,
                        margin: "0 0 18px",
                        color: "rgba(46,42,37,0.92)",
                        letterSpacing: "-0.015em",
                    }}
                >
                    Frequently Asked Questions
                </h1>

                <p style={{ maxWidth: 760, color: "rgba(46,42,37,0.70)", lineHeight: 1.9 }}>
                    Clear, honest answers about PRP and microneedling treatments. If you’re unsure what’s best for you, a
                    consultation is always the right place to start.
                </p>

                <div style={{ height: 1, margin: "26px 0", background: "rgba(46,42,37,0.10)" }} />

                {sections.map((section) => (
                    <section key={section.title} style={{ marginBottom: 34 }}>
                        <h2
                            style={{
                                fontSize: 16,
                                letterSpacing: ".08em",
                                textTransform: "uppercase",
                                color: "rgba(46,42,37,0.80)",
                                marginBottom: 12,
                            }}
                        >
                            {section.title}
                        </h2>

                        <div style={{ display: "grid", gap: 10 }}>
                            {section.items.map((item) => (
                                <details
                                    key={item.q}
                                    style={{
                                        borderRadius: 16,
                                        border: "1px solid rgba(46,42,37,0.10)",
                                        background: "rgba(255,255,255,0.18)",
                                        padding: "14px 16px",
                                    }}
                                >
                                    <summary
                                        style={{
                                            cursor: "pointer",
                                            fontWeight: 600,
                                            color: "rgba(46,42,37,0.92)",
                                            lineHeight: 1.5,
                                            listStyle: "none",
                                        }}
                                    >
                                        {item.q}
                                    </summary>
                                    <div style={{ marginTop: 10, color: "rgba(46,42,37,0.70)", lineHeight: 1.8 }}>
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
