"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    title: "Peptide Firming Sculpt Facial",
    subtitle: "Texture + glow refinement",
    before: "/images/results/case-01-before.jpg",
    after: "/images/results/case-01-after.jpg",
  },
  {
    title: "Advanced Customized Facial",
    subtitle: "Calm + recovery support",
    before: "/images/results/case-03-before.jpg",
    after: "/images/results/case-03-after.jpg",
  },

  {
    title: "Mesotherapy",
    subtitle: "Skin texture + rejuvenation",
    before: "/images/results/mesotherapy-before.jpg",
    after: "/images/results/mesotherapy-after.jpg",
  },
  {
    title: "LED Light Therapy Facial",
    subtitle: "Soothing support + skin recovery",
    before: "/images/results/led-light-therapy-facial-before.jpg",
    after: "/images/results/led-light-therapy-facial-after.jpg",
  },
  {
    title: "Men’s Facial Treatment",
    subtitle: "Deep cleansing + skin balance",
    before: "/images/results/mens-facial-1-before.jpg",
    after: "/images/results/mens-facial-1-after.jpg",
  },
  {
    title: "Men’s Facial Treatment",
    subtitle: "Texture improvement + hydration",
    before: "/images/results/mens-facial-2-before.jpg",
    after: "/images/results/mens-facial-2-after.jpg",
  },

  {
    title: "PRP Hair Treatment",
    subtitle: "Hair density + scalp revitalization",
    before: "/images/results/prp-hair-1-before.jpg",
    after: "/images/results/prp-hair-1-after.jpg",
  },
  {
    title: "PRP Hair Treatment",
    subtitle: "Hair regrowth + strengthening",
    before: "/images/results/prp-hair-2-before.jpg",
    after: "/images/results/prp-hair-2-after.jpg",
  },
  {
    title: "Acne Clarifying Facial",
    subtitle: "Breakout control + clearer texture",
    before: "/images/results/acne-clarifying-facial-before.jpg",
    after: "/images/results/acne-clarifying-facial-after.jpg",
  },
  {
    title: "Microneedling with Exosomes",
    subtitle: "Advanced renewal + skin repair",
    before: "/images/results/microneedling-exosomes-before.jpg",
    after: "/images/results/microneedling-exosomes-after.jpg",
  },
] as const;

export default function ResultsPremium() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // ESC closes + block scroll when open
  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeImage]);

  return (
    <section className="results">
      <Container>
        <div className="head">
          <Reveal>
            <div className="kicker">Results</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="title h-serif">Visible Transformations</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="sub">
              Subtle, refined improvements achieved through personalized care and clinically guided protocols.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              className="case"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <div className="images">
                <button
                  type="button"
                  className="img"
                  style={{ backgroundImage: `url(${c.before})` }}
                  onClick={() => setActiveImage(c.before)}
                  aria-label={`${c.title} before`}
                >
                  <span className="label">Before</span>
                </button>

                <button
                  type="button"
                  className="img"
                  style={{ backgroundImage: `url(${c.after})` }}
                  onClick={() => setActiveImage(c.after)}
                  aria-label={`${c.title} after`}
                >
                  <span className="label">After</span>
                </button>

                <div className="frame" aria-hidden="true" />
              </div>

              <div className="cap">
                <div className="caseTitle h-serif">{c.title}</div>
                <div className="caseSub">{c.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>

      {/* LIGHTBOX */}
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)} role="dialog" aria-modal="true">
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage} alt="Result preview" />
            <button type="button" className="close" onClick={() => setActiveImage(null)} aria-label="Close preview">
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        .results{ padding: 78px 0 26px; }

        .head{
          text-align: center;
          max-width: 760px;
          margin: 0 auto 34px;
        }

        .kicker{
          font-size: 12px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
        }

        .title{
          font-size: 40px;
          font-weight: 500;
          margin: 10px 0 10px;
          color: rgba(46,42,37,0.92);
          letter-spacing: -0.02em;
        }

        .sub{
          color: rgba(46,42,37,0.60);
          font-size: 15px;
          line-height: 1.7;
          margin: 0 auto;
          max-width: 680px;
        }

        .grid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 22px;
          margin-top: 18px;
        }

        .case{ text-align: left; }

        .images{
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 12px;
          border-radius: 26px;
          background: rgba(255,255,255,0.20);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 18px 60px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .images:hover{
          transform: translateY(-2px);
          box-shadow: 0 28px 80px rgba(0,0,0,0.10);
          border-color: rgba(184,150,74,0.22);
        }

        .img{
          position: relative;
          padding-top: 112%;
          background-size: cover;
          background-position: center;
          border-radius: 18px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.08);
          overflow: hidden;
          cursor: zoom-in;
          border: 0;
          outline: none;
          background-color: transparent;
        }
        .img:focus-visible{
          box-shadow: 0 0 0 3px rgba(184,150,74,0.35), 0 12px 34px rgba(0,0,0,0.08);
        }

        .label{
          position: absolute;
          bottom: 10px;
          left: 10px;
          padding: 6px 10px;
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          background: rgba(250,244,236,0.86);
          border-radius: 999px;
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.72);
          backdrop-filter: blur(10px);
        }

        .frame{
          position: absolute;
          inset: -2px;
          border-radius: 28px;
          background:
            radial-gradient(900px 520px at 15% 15%, rgba(184,150,74,0.12), rgba(255,255,255,0) 60%),
            radial-gradient(900px 520px at 85% 0%, rgba(46,42,37,0.10), rgba(255,255,255,0) 58%);
          opacity: 0.85;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .cap{ padding: 14px 6px 0; }

        .caseTitle{
          font-size: 20px;
          color: rgba(46,42,37,0.92);
          margin: 0;
        }

        .caseSub{
          margin-top: 4px;
          font-size: 13px;
          color: rgba(46,42,37,0.55);
          line-height: 1.4;
        }

        .note{
          margin-top: 26px;
          text-align: center;
          font-size: 13px;
          color: rgba(46,42,37,0.45);
        }

        /* LIGHTBOX */
        .lightbox{
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 18px;
          animation: fadeIn 0.18s ease;
        }

        .lightboxInner{
          position: relative;
          max-width: 94vw;
          max-height: 92vh;
        }

        .lightboxInner img{
          display: block;
          max-width: 94vw;
          max-height: 92vh;
          border-radius: 18px;
          box-shadow: 0 30px 90px rgba(0,0,0,0.45);
        }

        .close{
          position: absolute;
          top: -10px;
          right: -10px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(0,0,0,0.55);
          color: #fff;
          cursor: pointer;
          display: grid;
          place-items: center;
          font-size: 16px;
        }
        .close:hover{ background: rgba(0,0,0,0.68); }

        @keyframes fadeIn{
          from{ opacity: 0; }
          to{ opacity: 1; }
        }

        @media (max-width: 920px){
          .grid{ grid-template-columns: 1fr; }
          .title{ font-size: 32px; }
          .images{ border-radius: 22px; }
        }
      `}</style>
    </section>
  );
}