"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import ResultsPremium from "@/components/blocks/ResultsPremium"; // ✅ ADD

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  {
    title: "Medical Team Support",
    text: "Advanced protocols are supported by licensed medical professionals, ensuring provider-led standards and safety-first care.",
    tag: "Provider-led",
  },
  {
    title: "Personalized Care Plans",
    text: "A plan built around your skin, goals, and timeline — guided by shared protocols and consistent standards of care.",
    tag: "Custom approach",
  },
  {
    title: "Private Studio Experience",
    text: "Quiet, discreet experience — never rushed. Calm precision, focused attention, and thoughtful pacing.",
    tag: "Calm environment",
  },
] as const;

export default function ServicesPreview() {
  return (
    <>
      {/* ✅ RESULTS FIRST (ultra-premium flow) */}
      <ResultsPremium />

      {/* ✅ TRUST BLOCK */}
      <section className="svc">
        <Container>
          <div className="head">
            <Reveal>
              <div className="kicker">Trust</div>
            </Reveal>

            <Reveal delay={0.06} y={18}>
              <h2 className="h-serif title">
                Why Clients Choose <span className="brandBreak">Janet Esthetics</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} y={14}>
              <p className="sub">
                A calm, private studio with carefully designed protocols, supported by licensed medical professionals —
                focused on safety, consistency, and personalized care.
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
            className="trustGrid"
          >
            {trust.map((t) => (
              <motion.div
                key={t.title}
                className="gridItem"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
              >
                <div className="card">
                  <div className="top">
                    <div className="cardTitleWrap">
                      <div className="h-serif cardTitle">{t.title}</div>
                    </div>

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
          .svc{ padding: 24px 0 10px; }

          .svc .head{
            text-align: center;
            margin-bottom: 16px;
            max-width: 840px;
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
            margin: 6px 0 6px;
            font-weight: 500;
            font-size: 40px;
            letter-spacing: -0.02em;
            color: rgba(46,42,37,0.92);
          }

          .svc .brandBreak{ white-space: nowrap; }

          .svc .sub{
            margin: 0 auto;
            max-width: 740px;
            color: rgba(46,42,37,0.58);
            font-size: 15px;
            line-height: 1.6;
          }

          .svc .trustGrid{
            display: grid;
            grid-template-columns: repeat(3, minmax(0,1fr));
            gap: 18px;
            margin-top: 18px;
            align-items: start;
            min-height: 0 !important;
          }

          .svc .gridItem{ height: auto; }

          .svc .card{
            position: relative;
            height: auto;
            display: flex;
            flex-direction: column;
            padding: 14px;
            gap: 8px;
            border-radius: 24px;
            background: rgba(255,255,255,0.22);
            border: 1px solid rgba(46,42,37,0.10);
            box-shadow: 0 14px 36px rgba(0,0,0,0.07);
            transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
            overflow: hidden;
          }

          .svc .card:hover{
            transform: translateY(-3px);
            box-shadow: 0 28px 72px rgba(0,0,0,0.10);
            border-color: rgba(184,150,74,0.22);
          }

          .svc .top{ position: relative; z-index: 2; }

          .svc .cardTitleWrap{
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            margin-bottom: 8px;
            border-radius: 12px;
            background: rgba(250,244,236,0.75);
            border: 1px solid rgba(46,42,37,0.10);
            box-shadow: 0 10px 24px rgba(46,42,37,0.06);
          }

          .svc .cardTitle{
            font-size: 21px;
            line-height: 1.25;
            font-weight: 500;
            color: rgba(46,42,37,0.95);
            letter-spacing: -0.01em;
            margin: 0;
          }

          .svc .meta{
            color: rgba(46,42,37,0.62);
            line-height: 1.55;
            font-size: 13px;
            max-width: 520px;
            margin-top: 2px;
          }

          .svc .media{
            margin-top: 8px;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(46,42,37,0.10);
            background:
              radial-gradient(900px 520px at 20% 10%, rgba(184,150,74,0.18), rgba(255,255,255,0) 62%),
              radial-gradient(900px 520px at 80% 30%, rgba(46,42,37,0.08), rgba(255,255,255,0) 62%),
              linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06));
            padding: 8px;
          }

          .svc .badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding:6px 8px;
            border-radius:999px;
            background: rgba(250,244,236,0.78);
            border:1px solid rgba(46,42,37,0.10);
            backdrop-filter: blur(10px);
            font-size:11px;
            color: rgba(46,42,37,0.75);
          }

          .svc .badgeDot{
            width:7px; height:7px;
            border-radius:999px;
            background: rgba(184,150,74,0.95);
            box-shadow: 0 0 0 4px rgba(184,150,74,0.12);
          }

          .svc .mini{ margin-top:6px; }

          .svc .miniLabel{
            font-size: 10.5px;
            color: rgba(46,42,37,0.55);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom:6px;
          }

          .svc .miniRow{ display:flex; gap:8px; flex-wrap:wrap; }

          .svc .chip{
            font-size:11px;
            padding:5px 8px;
            border-radius:999px;
            background: rgba(46,42,37,0.06);
            border:1px solid rgba(46,42,37,0.10);
            color: rgba(46,42,37,0.72);
          }

          .svc .shine{
            position:absolute;
            inset:0;
            background: radial-gradient(500px 240px at 30% 0%, rgba(255,255,255,0.30), rgba(255,255,255,0) 60%);
            opacity:0.7;
            pointer-events:none;
          }

          .svc .ring{
            position:absolute;
            inset:-2px;
            border-radius:26px;
            background:
              radial-gradient(900px 520px at 15% 15%, rgba(184,150,74,0.16), rgba(255,255,255,0) 60%),
              radial-gradient(900px 520px at 85% 0%, rgba(46,42,37,0.10), rgba(255,255,255,0) 58%);
            opacity:0;
            transition:opacity 220ms ease;
            pointer-events:none;
          }
          .svc .card:hover .ring{ opacity: 1; }

          @media (max-width: 900px){
            .svc .trustGrid{ grid-template-columns: 1fr; }
            .svc .title{ font-size: 34px; }
            .svc .card{ padding: 14px; border-radius: 22px; }

            .svc .brandBreak{
              display: block;
              white-space: normal;
            }

            .svc .cardTitle{ font-size: 22px; }
          }
        `}</style>
      </section>
    </>
  );
}
