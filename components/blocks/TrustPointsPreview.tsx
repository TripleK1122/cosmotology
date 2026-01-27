"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const points = [
    {
        title: "Licensed / Certified",
        text: "Professional standards, medical-grade products, and safe technique.",
    },
    {
        title: "Personalized plan",
        text: "Every treatment is built around your skin, goals, and timeline.",
    },
    {
        title: "Private studio",
        text: "Quiet, discreet space with unhurried, one-on-one care.",
    },
];

export default function TrustPointsPreview() {
    return (
        <section className="trustSection">
            <Container>
                <Reveal>
                    <div className="header">
                        <div className="kicker">Why Clients Choose Us</div>
                        <h2 className="title">Trust & Care</h2>
                        <p className="subtitle">
                            A private approach focused on safety, personalization, and long-term results.
                        </p>
                    </div>
                </Reveal>

                <div className="grid">
                    {points.map((p) => (
                        <Reveal key={p.title} y={14}>
                            <div className="card">
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>

            <style>{`
        .trustSection{
          padding: 92px 0 96px;
          background:
            radial-gradient(1200px 700px at 20% 0%, rgba(184,150,74,0.08), rgba(255,255,255,0) 60%);
        }

        .header{
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }

        .kicker{
          font-size: 12px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
          margin-bottom: 14px;
        }

        .title{
          font-family: ui-serif;
          font-size: 46px;
          margin: 0 0 14px;
          color: rgba(46,42,37,0.92);
        }

        .subtitle{
          color: rgba(46,42,37,0.65);
          line-height: 1.8;
          font-size: 16px;
        }

        .grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .card{
          border-radius: 24px;
          padding: 26px 24px;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 22px 70px rgba(0,0,0,0.06);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .card:hover{
          transform: translateY(-3px);
          box-shadow: 0 34px 90px rgba(0,0,0,0.08);
        }

        .card h3{
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 600;
          color: rgba(46,42,37,0.90);
        }

        .card p{
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(46,42,37,0.65);
        }

        @media (max-width: 900px){
          .grid{
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
