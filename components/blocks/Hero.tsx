"use client";

import { useMemo, useRef } from "react";
import Container from "@/components/layout/Container";
import BookButton from "@/components/ui/BookButton";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = useMemo(() => {
    if (reduce) return undefined;

    return (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;

      const rx = (0.5 - y) * 2.6;
      const ry = (x - 0.5) * 2.6;

      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    };
  }, [reduce]);

  const onLeave = useMemo(() => {
    return () => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };
  }, []);

  return (
    <section className="hero">
      <Container>
        <div className="grid">
          <div className="left rhythm">
            <Reveal delay={0}>
              <div className="kicker">Private Esthetic Studio • Licensed Professionals</div>
            </Reveal>

            <Reveal delay={0.05} y={22}>
              <h1 className="h-serif title">
                Where Beauty
                <br />
                Meets Serenity
              </h1>
            </Reveal>

            <Reveal delay={0.11} y={18}>
              <p className="sub">
                Experience transformative skincare in an intimate, private setting. Every treatment is delivered by
                licensed professionals working within one shared standard of care — tailored to your skin.
              </p>
            </Reveal>

            <Reveal delay={0.15} y={14}>
              <div className="signature">
                <span className="sigMark" />
                <span className="sigText">
                  Calm, precise, <span className="sigItalic">intentionally</span> personal — across every treatment.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.19} y={12}>
              <div className="ctaRow">
                <BookButton label="Book Appointment" className="heroCta" />
                <a href="/services" className="ghostCta">
                  Explore Services <span className="arr">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, ease, delay: 0.12 }}
            className="right"
          >
            <div ref={cardRef} className="card" onMouseMove={onMove} onMouseLeave={onLeave}>
              <Image
                src="/images/hero.jpg"
                alt="Janet Esthetics — treatment room"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                style={{ objectFit: "cover" }}
              />

              <div className="overlay" />
              <div className="grain" />
              <div className="pill">Treatment room • Private studio</div>
              <div className="border" />
            </div>
          </motion.div>
        </div>
      </Container>

      <style>{`
        .hero{
          padding: 70px 0 28px;
          position: relative;
          background:
            radial-gradient(900px 520px at 18% 6%, rgba(184,150,74,0.16), rgba(255,255,255,0) 62%),
            radial-gradient(900px 520px at 82% 10%, rgba(46,42,37,0.08), rgba(255,255,255,0) 70%);
        }

        .grid{
          display: grid;
          grid-template-columns: 1.05fr 1.15fr;
          gap: 62px;
          align-items: center;
          min-height: 560px;
        }

        /* ✅ CONSISTENT VERTICAL SPACING (same rhythm across breakpoints) */
        .rhythm > * + *{ margin-top: 18px; }
        @media (max-width: 520px){
          .rhythm > * + *{ margin-top: 16px; }
        }

        .title{
          font-weight: 500;
          font-size: 72px;
          line-height: 0.98;
          margin: 0;
          color: rgba(46,42,37,0.92);
          letter-spacing: -0.02em;
        }

        .sub{
          margin-top: 0;
          color: rgba(46,42,37,0.62);
          line-height: 1.85;
          font-size: 17px;
          max-width: 520px;
        }

        .signature{
          margin-top: 0;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.20);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
        }
        .sigMark{
          width: 8px; height: 8px;
          border-radius: 999px;
          background: rgba(184,150,74,0.95);
          box-shadow: 0 0 0 6px rgba(184,150,74,0.12);
        }
        .sigText{
          font-size: 13px;
          color: rgba(46,42,37,0.72);
          letter-spacing: 0.02em;
        }
        .sigItalic{
          font-family: var(--font-serif);
          font-style: italic;
          letter-spacing: -0.01em;
          color: rgba(46,42,37,0.82);
        }

        .ctaRow{
          margin-top: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .heroCta{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2e2a25;
          color: #f7f1e8;
          padding: 13px 20px;
          border-radius: 999px;
          font-size: 14px;
          border: 1px solid rgba(46,42,37,0.22);
          box-shadow: 0 18px 50px rgba(46,42,37,0.14);
          transition: transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease;
          white-space: nowrap;
        }
        .heroCta:hover{ transform: translateY(-2px); opacity: 0.97; box-shadow: 0 28px 90px rgba(46,42,37,0.16); }
        .heroCta:active{ transform: translateY(0px); opacity: 0.92; }

        .ghostCta{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 999px;
          font-size: 14px;
          color: rgba(46,42,37,0.82);
          background: rgba(46,42,37,0.05);
          border: 1px solid rgba(46,42,37,0.10);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
          white-space: nowrap;
        }
        .ghostCta:hover{
          transform: translateY(-1px);
          background: rgba(46,42,37,0.07);
          border-color: rgba(184,150,74,0.22);
        }
        .arr{
          display:inline-block;
          transform: translateX(0);
          transition: transform 180ms ease;
        }
        .ghostCta:hover .arr{ transform: translateX(2px); }

        .right{ display: flex; justify-content: flex-end; }

        .card{
          width: 100%;
          max-width: 650px;
          height: 430px;
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--surface-2);
          box-shadow: 0 34px 110px rgba(0,0,0,0.12);
          transform: perspective(1200px);
          transition: transform 220ms ease, box-shadow 220ms ease;
          will-change: transform;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:
            radial-gradient(60% 80% at 70% 30%, rgba(255,255,255,0.20), rgba(255,255,255,0) 62%),
            linear-gradient(135deg, rgba(46,42,37,0.16), rgba(46,42,37,0.02));
          pointer-events:none;
        }

        .grain{
          position:absolute;
          inset:-40%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
          opacity: 0.085;
          mix-blend-mode: overlay;
          transform: rotate(8deg);
          pointer-events:none;
        }

        .pill{
          position:absolute;
          left: 16px;
          top: 16px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(250,244,236,0.78);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
          font-size: 12px;
          letter-spacing: 0.02em;
          color: rgba(46,42,37,0.75);
          pointer-events:none;
        }

        .border{
          position:absolute;
          inset:0;
          border: 1px solid rgba(46,42,37,0.10);
          border-radius: var(--radius-xl);
          pointer-events:none;
        }

        @media (max-width: 980px){
          .grid{
            grid-template-columns: 1fr;
            gap: 26px;
            min-height: auto;
          }
          .right{ justify-content: flex-start; }
          .card{ height: 360px; max-width: 760px; }
          .title{ font-size: 56px; }
        }

        @media (max-width: 520px){
          /* ✅ keep hero spacing consistent */
          .hero{ padding: 70px 0 28px; }
          .title{ font-size: 42px; }
          .sub{ font-size: 16px; }
          .card{ height: 300px; }
          .pill{ display:none; }
        }
      `}</style>
    </section>
  );
}
