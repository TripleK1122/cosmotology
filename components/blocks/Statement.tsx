"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import BookButton from "@/components/ui/BookButton";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Statement() {
    return (
        <section className="st">
            <Container>
                {/* soft divider */}
                <div className="divider" aria-hidden="true" />

                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease }}
                >
                    {/* glow */}
                    <div className="glow" aria-hidden="true" />
                    <div className="border" aria-hidden="true" />

                    <div className="inner">
                        <Reveal>
                            <div className="kicker">
                                <span className="dot" />
                                Private Studio Philosophy
                            </div>
                        </Reveal>

                        <Reveal delay={0.05} y={18}>
                            <h2 className="title">
                                This is not a salon.
                                <br />
                                This is a private space.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.12} y={14}>
                            <p className="sub">
                                Every treatment is performed in complete privacy, with undivided attention to your comfort and results.
                                <span className="sub2"> No distractions. No rush. Just you and your skin’s transformation.</span>
                            </p>
                        </Reveal>

                        <Reveal delay={0.18} y={12}>
                            <div className="ctaRow">
                                <BookButton label="Book Appointment" className="cta" />
                                <div className="miniNote">
                                    <span className="q">“</span> Calm, clean, intentional care. <span className="q">”</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </motion.div>
            </Container>

            <style>{`
        .st{
          padding: 64px 0 42px;
          position: relative;
          background:
            radial-gradient(900px 520px at 50% 0%, rgba(46,42,37,0.08), rgba(255,255,255,0) 70%),
            radial-gradient(900px 520px at 15% 30%, rgba(184,150,74,0.10), rgba(255,255,255,0) 72%);
        }

        .divider{
          width: min(760px, 92%);
          height: 1px;
          margin: 0 auto 34px;
          background: linear-gradient(
            to right,
            rgba(46,42,37,0),
            rgba(46,42,37,0.18),
            rgba(46,42,37,0)
          );
        }

        .card{
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.26);
          box-shadow: 0 34px 120px rgba(0,0,0,0.12);
          padding: 46px 40px;
          text-align: center;
        }

        .glow{
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(900px 480px at 50% 0%, rgba(184,150,74,0.16), rgba(255,255,255,0) 60%),
            radial-gradient(700px 420px at 80% 35%, rgba(46,42,37,0.10), rgba(255,255,255,0) 62%);
          opacity: 0.9;
          pointer-events:none;
        }

        .border{
          position:absolute;
          inset:0;
          border-radius: 28px;
          border: 1px solid rgba(46,42,37,0.10);
          pointer-events:none;
        }

        .inner{ position: relative; z-index: 2; }

        .kicker{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
          margin-bottom: 14px;
        }
        .dot{
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(184,150,74,0.70);
          box-shadow: 0 0 0 6px rgba(184,150,74,0.12);
        }

        .title{
          margin: 0;
          font-family: ui-serif;
          font-weight: 500;
          font-size: 52px;
          line-height: 1.07;
          letter-spacing: -0.01em;
          color: rgba(46,42,37,0.92);
        }

        .sub{
          margin: 18px auto 0;
          max-width: 760px;
          color: rgba(46,42,37,0.62);
          line-height: 1.9;
          font-size: 16px;
        }
        .sub2{ color: rgba(46,42,37,0.58); }

        .ctaRow{
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2e2a25;
          color: #f7f1e8;
          padding: 14px 18px;
          border-radius: 999px;
          font-size: 14px;
          border: 1px solid rgba(46,42,37,0.22);
          box-shadow: 0 18px 50px rgba(46,42,37,0.14);
          transition: transform 220ms ease, opacity 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }
        .cta:hover{
          transform: translateY(-2px);
          opacity: 0.97;
          box-shadow: 0 28px 90px rgba(46,42,37,0.16);
        }

        .miniNote{
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(46,42,37,0.06);
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.75);
          font-size: 13px;
        }
        .q{
          font-family: ui-serif;
          font-size: 18px;
          color: rgba(184,150,74,0.85);
          line-height: 1;
        }

        @media (max-width: 980px){
          .card{ padding: 36px 22px; text-align: left; }
          .title{ font-size: 40px; }
          .sub{ font-size: 15px; margin-left: 0; }
          .ctaRow{ justify-content: flex-start; }
          .divider{ margin-bottom: 22px; }
        }

        @media (max-width: 520px){
          .st{ padding: 44px 0 28px; }
          .title{ font-size: 34px; line-height: 1.08; }
          .miniNote{ display: none; }
        }
      `}</style>
        </section>
    );
}
