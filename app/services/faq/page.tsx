export const metadata = {
    title: "FAQ — Janet Esthetics",
    description: "Frequently asked questions about PRP hair therapy, PRP skin treatments, and microneedling.",
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
                a: "A small blood sample is collected and processed in a centrifuge to separate and concentrate the platelets. The PRP is then applied or injected into the treatment area to support skin rejuvenation and tissue repair.",
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
                a: "Microneedling is a minimally invasive skin rejuvenation treatment that uses very fine sterile needles to stimulate the skin’s natural collagen production. It helps improve skin texture, reduce the appearance of fine lines and scars, and promote smoother, healthier-looking skin",
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
        <main className="faq">
            <div className="wrap">
                <div className="kicker">FAQ</div>

                <h1 className="h1">Frequently Asked Questions</h1>

                <p className="lead">
                    Clear, honest answers about PRP and microneedling treatments. If you’re unsure what’s best for you, a
                    consultation is always the right place to start.
                </p>

                <div className="rule" />

                {sections.map((section) => (
                    <section key={section.title} className="section">
                        <h2 className="h2">{section.title}</h2>

                        <div className="list">
                            {section.items.map((item) => (
                                <details key={item.q} className="item">
                                    <summary className="q">
                                        <span className="qText">{item.q}</span>
                                        <span className="icon" aria-hidden="true">
                                            +
                                        </span>
                                    </summary>
                                    <div className="a">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <style>{`
          .faq{
            padding: 92px 0 76px;
            position: relative;
            overflow: hidden;
            background:
              radial-gradient(1200px 700px at 20% 5%, rgba(184,150,74,0.10), rgba(255,255,255,0) 60%),
              radial-gradient(1000px 600px at 90% 10%, rgba(46,42,37,0.08), rgba(255,255,255,0) 70%);
          }
  
          .wrap{
            max-width: 980px;
            margin: 0 auto;
            padding: 0 18px;
          }
  
          .kicker{
            font-size: 12px;
            letter-spacing: .28em;
            text-transform: uppercase;
            color: rgba(46,42,37,0.55);
            margin-bottom: 14px;
          }
  
          .h1{
            font-family: ui-serif;
            font-size: 52px;
            line-height: 1.05;
            margin: 0 0 16px;
            color: rgba(46,42,37,0.92);
            letter-spacing: -0.015em;
          }
  
          .lead{
            max-width: 760px;
            color: rgba(46,42,37,0.70);
            line-height: 1.9;
            margin: 0;
            font-size: 16.5px;
          }
  
          .rule{
            height: 1px;
            margin: 26px 0 28px;
            background: linear-gradient(to right, rgba(46,42,37,0), rgba(46,42,37,0.16), rgba(46,42,37,0));
          }
  
          .section{
            margin-bottom: 34px;
          }
  
          .h2{
            font-size: 13px;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: rgba(46,42,37,0.78);
            margin: 0 0 12px;
          }
  
          .list{
            display: grid;
            gap: 10px;
          }
  
          .item{
            border-radius: 18px;
            border: 1px solid rgba(46,42,37,0.10);
            background: rgba(255,255,255,0.18);
            box-shadow: 0 14px 46px rgba(0,0,0,0.04);
            overflow: hidden;
            transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
          }
  
          .item:hover{
            border-color: rgba(46,42,37,0.14);
            background: rgba(255,255,255,0.22);
          }
  
          summary{
            list-style: none;
          }
          summary::-webkit-details-marker{
            display:none;
          }
  
          .q{
            cursor: pointer;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 14px;
            align-items: center;
            padding: 14px 16px;
          }
  
          .qText{
            font-weight: 600;
            color: rgba(46,42,37,0.90);
            line-height: 1.45;
            font-size: 15px;
          }
  
          .icon{
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            background: rgba(250,244,236,0.72);
            border: 1px solid rgba(46,42,37,0.10);
            color: rgba(46,42,37,0.70);
            font-size: 18px;
            line-height: 0;
            transition: transform 180ms ease, opacity 180ms ease;
          }
  
          .item[open] .icon{
            transform: rotate(45deg);
            opacity: 0.92;
          }
  
          .a{
            padding: 0 16px 16px;
            color: rgba(46,42,37,0.70);
            line-height: 1.85;
            font-size: 15px;
          }
  
          @media (max-width: 720px){
            .h1{ font-size: 40px; }
            .lead{ font-size: 16px; }
          }
  
          @media (max-width: 520px){
            .faq{ padding: 78px 0 64px; }
            .h1{ font-size: 34px; }
            .q{ padding: 13px 14px; }
            .a{ padding: 0 14px 14px; }
            .icon{ width: 32px; height: 32px; }
          }
        `}</style>
        </main>
    );
}
