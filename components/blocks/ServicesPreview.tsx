"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { services } from "@/lib/services";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// маленькие “benefit tags” — можно потом подставить из данных
const badges = ["Glow + Texture", "Firming + Lift", "Recovery + Calm"];

export default function ServicesPreview() {
    return (
        <section className="svc">
            <Container>
                <div className="head">
                    <Reveal>
                        <div className="kicker">Our Treatments</div>
                    </Reveal>

                    <Reveal delay={0.06} y={18}>
                        <h2 className="h-serif title">Curated Services</h2>
                    </Reveal>

                    <Reveal delay={0.1} y={14}>
                        <p className="sub">
                            Choose from a refined selection of treatments designed for visible results and a calm, private experience.
                        </p>
                    </Reveal>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
                    }}
                    className="grid"
                >
                    {services.slice(0, 3).map((s, i) => (
                        <motion.div
                            key={s.slug}
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                            }}
                        >
                            <Link href={`/services/${s.slug}`} className="card">
                                <div className="top">
                                    <div className="h-serif cardTitle">{s.title}</div>
                                    <div className="meta">
                                        {s.duration} <span className="dot">•</span> {s.price}
                                    </div>
                                </div>

                                <div className="more">
                                    View details <span className="arr">→</span>
                                </div>

                                {/* ✅ visual filler (premium) */}
                                <div className="media">
                                    <div className="badge">
                                        <span className="badgeDot" />
                                        {badges[i % badges.length]}
                                    </div>

                                    <div className="mini">
                                        <div className="miniLabel">Recommended for</div>
                                        <div className="miniRow">
                                            <span className="chip">Texture</span>
                                            <span className="chip">Glow</span>
                                            <span className="chip">Tone</span>
                                        </div>
                                    </div>

                                    <div className="shine" />
                                </div>

                                <div className="ring" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="all">
                    <Link href="/services" className="pill">
                        View all services <span className="arr">→</span>
                    </Link>
                </div>
            </Container>

            <style>{`
        .svc{ padding: 44px 0 16px; }

        .head{
          text-align: center;
          margin-bottom: 26px;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .title{
          margin: 10px 0 10px;
          font-weight: 500;
          font-size: 48px;
          letter-spacing: -0.02em;
          color: rgba(46,42,37,0.92);
        }

        .sub{
          margin: 0 auto;
          max-width: 640px;
          color: rgba(46,42,37,0.58);
          font-size: 16px;
          line-height: 1.75;
        }

        .grid{
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 22px;
          margin-top: 22px;
        }

        .card{
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          overflow: hidden;
          min-height: 320px; /* ✅ чтобы низ был красивым */
        }
        .card:hover{
          transform: translateY(-3px);
          box-shadow: 0 34px 90px rgba(0,0,0,0.12);
          border-color: rgba(184,150,74,0.22);
        }

        .top{ position: relative; z-index: 2; }

        .cardTitle{
          font-size: 22px;
          margin-bottom: 8px;
          color: rgba(46,42,37,0.92);
        }

        .meta{
          color: rgba(46,42,37,0.58);
          line-height: 1.7;
          font-size: 14.5px;
        }
        .dot{ opacity: .55; }

        .more{
          color: rgba(46,42,37,0.82);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          opacity: 0.92;
          transform: translateY(2px);
          transition: transform 220ms ease, opacity 220ms ease;
          position: relative;
          z-index: 2;
          font-size: 14px;
          width: fit-content;
        }
        .card:hover .more{ transform: translateY(0px); opacity: 1; }

        .arr{
          display:inline-block;
          transform: translateX(0);
          transition: transform 220ms ease;
        }
        .card:hover .arr{ transform: translateX(2px); }

        /* ✅ Premium “media” area */
        .media{
          margin-top: auto; /* ✅ прижимает вниз */
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(46,42,37,0.10);
          background:
            radial-gradient(900px 520px at 20% 10%, rgba(184,150,74,0.18), rgba(255,255,255,0) 62%),
            radial-gradient(900px 520px at 80% 30%, rgba(46,42,37,0.08), rgba(255,255,255,0) 62%),
            linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06));
          min-height: 140px;
          padding: 14px;
          transition: transform 220ms ease;
        }
        .card:hover .media{ transform: translateY(-1px); }

        .badge{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(250,244,236,0.78);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
          font-size: 12px;
          letter-spacing: 0.02em;
          color: rgba(46,42,37,0.75);
          width: fit-content;
        }
        .badgeDot{
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(184,150,74,0.95);
          box-shadow: 0 0 0 5px rgba(184,150,74,0.12);
        }

        .mini{
          margin-top: 14px;
        }
        .miniLabel{
          font-size: 12px;
          color: rgba(46,42,37,0.55);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .miniRow{
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chip{
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(46,42,37,0.06);
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.72);
        }

        .shine{
          position: absolute;
          inset: 0;
          background: radial-gradient(500px 240px at 30% 0%, rgba(255,255,255,0.30), rgba(255,255,255,0) 60%);
          opacity: 0.7;
          pointer-events: none;
        }

        /* subtle premium glow */
        .ring{
          position:absolute;
          inset: -2px;
          border-radius: 28px;
          background:
            radial-gradient(900px 520px at 15% 15%, rgba(184,150,74,0.16), rgba(255,255,255,0) 60%),
            radial-gradient(900px 520px at 85% 0%, rgba(46,42,37,0.10), rgba(255,255,255,0) 58%);
          opacity: 0.0;
          transition: opacity 220ms ease;
          pointer-events:none;
        }
        .card:hover .ring{ opacity: 1; }

        .all{
          margin-top: 18px;
          display: flex;
          justify-content: center;
        }
        .pill{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(46,42,37,0.06);
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.78);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
          font-size: 14px;
        }
        .pill:hover{
          transform: translateY(-1px);
          background: rgba(46,42,37,0.08);
          border-color: rgba(184,150,74,0.22);
        }
        .pill:hover .arr{ transform: translateX(2px); }

        @media (max-width: 900px){
          .grid{ grid-template-columns: 1fr; }
          .title{ font-size: 36px; }
          .card{ padding: 18px; border-radius: 22px; }
        }
      `}</style>
        </section>
    );
}
