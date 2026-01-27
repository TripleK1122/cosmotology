"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  {
    title: "Licensed / Certified",
    text: "Professional standards and safe technique.",
    tag: "Professional care",
  },
  {
    title: "Personalized plan",
    text: "Built around your skin, goals, and timeline.",
    tag: "Custom approach",
  },
  {
    title: "Private studio",
    text: "Quiet, discreet experience — never rushed.",
    tag: "Calm environment",
  },
] as const;

export default function ServicesPreview() {
  return (
    <section className="svc">
      <Container>
        <div className="head">
          <Reveal>
            <div className="kicker">Trust</div>
          </Reveal>

          <Reveal delay={0.06} y={18}>
            <h2 className="h-serif title">Why Clients Choose Janet</h2>
          </Reveal>

          <Reveal delay={0.1} y={14}>
            <p className="sub">
              A calm, private studio with thoughtful protocols and a plan made for your skin — not trends.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.06 },
            },
          }}
          className="grid"
        >
          {trust.map((t) => (
            <motion.div
              key={t.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <div className="card">
                <div className="top">
                  <div className="h-serif cardTitle">{t.title}</div>
                  <div className="meta">{t.text}</div>
                </div>

                <div className="media" aria-hidden="true">
                  <div className="badge">
                    <span className="badgeDot" />
                    {t.tag}
                  </div>

                  <div className="mini">
                    <div className="miniLabel">What to expect</div>
                    <div className="miniRow">
                      <span className="chip">Clarity</span>
                      <span className="chip">Comfort</span>
                      <span className="chip">Consistency</span>
                    </div>
                  </div>

                  <div className="shine" />
                </div>

                <div className="ring" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <style>{`
        /* ✅ IMPORTANT: all styles scoped to .svc to not break Hero */
        .svc{ padding: 44px 0 16px; }

        .svc .head{
          text-align: center;
          margin-bottom: 26px;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .svc .kicker{
          font-size: 12px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
        }

        .svc .title{
          margin: 10px 0 10px;
          font-weight: 500;
          font-size: 48px;
          letter-spacing: -0.02em;
          color: rgba(46,42,37,0.92);
        }

        .svc .sub{
          margin: 0 auto;
          max-width: 640px;
          color: rgba(46,42,37,0.58);
          font-size: 16px;
          line-height: 1.75;
        }

        .svc .grid{
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 22px;
          margin-top: 22px;
          align-items: start;
        }

        /* ✅ COMPACT TRUST CARDS (no пустоты) */
        .svc .card{
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 12px;
          border-radius: 26px;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          overflow: hidden;

          height: fit-content;
          align-self: start;
        }

        .svc .card:hover{
          transform: translateY(-3px);
          box-shadow: 0 34px 90px rgba(0,0,0,0.12);
          border-color: rgba(184,150,74,0.22);
        }

        .svc .top{ position: relative; z-index: 2; }

        .svc .cardTitle{
          font-size: 21px;
          margin-bottom: 8px;
          color: rgba(46,42,37,0.92);
          letter-spacing: -0.01em;
        }

        .svc .meta{
          color: rgba(46,42,37,0.62);
          line-height: 1.7;
          font-size: 14px;
          max-width: 420px;
        }

        .svc .media{
          margin-top: 6px;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(46,42,37,0.10);
          background:
            radial-gradient(900px 520px at 20% 10%, rgba(184,150,74,0.18), rgba(255,255,255,0) 62%),
            radial-gradient(900px 520px at 80% 30%, rgba(46,42,37,0.08), rgba(255,255,255,0) 62%),
            linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06));
          padding: 10px;
          transition: transform 220ms ease;
        }
        .svc .card:hover .media{ transform: translateY(-1px); }

        .svc .badge{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 9px;
          border-radius: 999px;
          background: rgba(250,244,236,0.78);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
          font-size: 11.5px;
          letter-spacing: 0.02em;
          color: rgba(46,42,37,0.75);
          width: fit-content;
          position: relative;
          z-index: 2;
        }

        .svc .badgeDot{
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(184,150,74,0.95);
          box-shadow: 0 0 0 5px rgba(184,150,74,0.12);
        }

        .svc .mini{ margin-top: 8px; position: relative; z-index: 2; }

        .svc .miniLabel{
          font-size: 11px;
          color: rgba(46,42,37,0.55);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .svc .miniRow{
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .svc .chip{
          font-size: 11.5px;
          padding: 6px 9px;
          border-radius: 999px;
          background: rgba(46,42,37,0.06);
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.72);
          line-height: 1;
        }

        .svc .shine{
          position: absolute;
          inset: 0;
          background: radial-gradient(500px 240px at 30% 0%, rgba(255,255,255,0.30), rgba(255,255,255,0) 60%);
          opacity: 0.7;
          pointer-events: none;
        }

        .svc .ring{
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
        .svc .card:hover .ring{ opacity: 1; }

        @media (max-width: 900px){
          .svc .grid{ grid-template-columns: 1fr; }
          .svc .title{ font-size: 36px; }
          .svc .card{ padding: 18px; border-radius: 22px; }
        }
      `}</style>
    </section>
  );
}
