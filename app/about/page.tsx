"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <section className="about">
      <Container>
        <div className="topGrid">
          {/* ✅ СНАЧАЛА фото (на мобилке будет сверху) */}
          <div className="rightCol">
            <PortraitCarousel />
          </div>

          {/* ✅ ПОТОМ текст */}
          <div className="leftCol">
            <Reveal>
              <div className="kicker">About the Founder</div>
            </Reveal>

            <Reveal delay={0.05} y={18}>
              <h1 className="h-serif title">
                Skincare that feels private,
                <br />
                intentional, and quietly
                <br />
                exceptional.
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={16}>
              <p className="lead">
                Janet is a skincare professional whose work begins with respect for the individual. Her approach is
                rooted in natural beauty, intentional care, and confidence that comes not from trends — but from truly
                understanding the skin.
              </p>
            </Reveal>

            <Reveal delay={0.18} y={14}>
              <div className="facts">
                <Fact label="Individual approach" value="Private practice" />
                <Fact label="Focus" value="Skin health & balance" />
                <Fact label="Philosophy" value="Clean, thoughtful protocols" />
              </div>
            </Reveal>

            <Reveal delay={0.22} y={12}>
              <div className="divider" />
            </Reveal>

            <Reveal delay={0.26} y={12}>
              <div className="body">
                <p>
                  This practice was created in response to an industry that too often prioritizes appearance over
                  substance. Here, treatments are never rushed. Each appointment begins with listening — and with
                  building a plan that reflects the real needs of the skin and the person behind it.
                </p>
                <p>
                  Janet’s philosophy is simple: beauty is a practice, not a moment. It emerges when skin is healthy,
                  cared for, and treated with respect over time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <style>{`
        .about{
          padding: 92px 0 72px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(1200px 700px at 20% 5%, rgba(184,150,74,0.12), rgba(255,255,255,0) 60%),
            radial-gradient(1000px 600px at 90% 10%, rgba(46,42,37,0.10), rgba(255,255,255,0) 70%);
        }

        .topGrid{
          display:grid;
          grid-template-columns: 1.18fr 0.82fr;
          gap: 56px;
          align-items: start;
        }

        .leftCol{ position: relative; z-index: 1; }
        .rightCol{ position: relative; z-index: 1; }

        .kicker{
          font-size: 12px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
          margin-bottom: 18px;
        }

        .title{
          font-size: 58px;
          line-height: 1.03;
          margin: 0 0 18px;
          color: rgba(46,42,37,0.92);
          letter-spacing: -0.015em;
        }

        .lead{
          font-size: 17px;
          line-height: 1.9;
          color: rgba(46,42,37,0.70);
          max-width: 640px;
          margin: 0;
        }

        .facts{
          margin-top: 26px;
          display:flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .divider{
          margin: 34px 0 26px;
          height: 1px;
          background: linear-gradient(to right, rgba(46,42,37,0), rgba(46,42,37,0.18), rgba(46,42,37,0));
        }

        .body{
          max-width: 650px;
          color: rgba(46,42,37,0.72);
          line-height: 1.9;
          font-size: 16.5px;
        }
        .body p{ margin: 0; }
        .body p + p{ margin-top: 18px; }

        @media (max-width: 980px){
          .topGrid{
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .rightCol{
            margin-top: 0 !important;
            z-index: 1;
          }

          .title{ font-size: 44px; }
        }

        @media (max-width: 520px){
          .about{ padding: 68px 0 56px; }
          .title{ font-size: 36px; }
        }
      `}</style>
    </section>
  );
}

function PortraitCarousel() {
  const reduce = useReducedMotion();

  // ✅ добавили objectPosition per-slide (подгонишь если надо)
  const slides = useMemo(
    () => [
      { src: "/images/about/portrait-1.jpg", alt: "Founder portrait 1", pos: "50% 18%" },
      { src: "/images/about/portrait-2.jpg", alt: "Founder portrait 2", pos: "50% 22%" },
      { src: "/images/about/portrait-3.jpg", alt: "Founder portrait 3", pos: "50% 14%" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [imgOk, setImgOk] = useState<Record<number, boolean>>({});

  const go = useCallback(
    (next: number) => {
      const n = (next + slides.length) % slides.length;
      setDir(n > index ? 1 : -1);
      setIndex(n);
    },
    [index, slides.length]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce) return;
    if (paused) return;

    const t = window.setInterval(() => {
      setDir(1);
      setIndex((v) => (v + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(t);
  }, [paused, reduce, slides.length]);

  const showRealImage = !!imgOk[index];

  return (
    <div className="carouselWrap">
      <div className="sticky">
        <div
          className="card"
          aria-label="Founder photos carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overlay" />
          <div className="grain" />

          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={slides[index].src}
              custom={dir}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 18, scale: 0.995 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -dir * 18, scale: 0.995 }}
              transition={{ duration: 0.55, ease }}
              className="img"
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (reduce) return;
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
            >
              {/* ✅ placeholder показываем ТОЛЬКО пока фото не загрузилось (убирает “watermark”) */}
              {!showRealImage && (
                <div className="placeholder" aria-hidden="true">
                  <div className="mono">JE</div>
                  <div className="phText">Founder portraits • Coming soon</div>
                </div>
              )}

              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                priority={index === 0}
                sizes="(max-width: 980px) 100vw, 40vw"
                style={{
                  objectFit: "cover",
                  objectPosition: slides[index].pos,
                  opacity: showRealImage ? 1 : 0,
                  transition: "opacity 260ms ease",
                  // ✅ чуть “оживляем” фото (меньше тусклости)
                  filter: "brightness(1.06) contrast(1.04) saturate(1.05)",
                }}
                onLoadingComplete={() => {
                  setImgOk((m) => ({ ...m, [index]: true }));
                }}
                onError={() => {
                  setImgOk((m) => ({ ...m, [index]: false }));
                }}
              />
            </motion.div>
          </AnimatePresence>

          <button className="nav left" type="button" onClick={prev} aria-label="Previous photo">
            ‹
          </button>
          <button className="nav right" type="button" onClick={next} aria-label="Next photo">
            ›
          </button>

          <div className="dots" role="tablist" aria-label="Choose photo">
            {slides.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  type="button"
                  className={`dot ${active ? "active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  aria-pressed={active}
                />
              );
            })}
          </div>

          <div className="label">
            <span className="bullet" />
            Founder • Esthetic Specialist
          </div>

          <div className="border" />
        </div>
      </div>

      <style>{`
        .carouselWrap{ position: relative; }
        .sticky{ position: sticky; top: 110px; }

        .card{
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          height: 620px;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 34px 110px rgba(0,0,0,0.12);
        }

        /* ✅ важно: слой с картинкой выше placeholder, но ниже overlay/nav */
        .img{ position:absolute; inset:0; z-index: 1; }

        .placeholder{
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 520px at 18% 14%, rgba(184,150,74,0.22), rgba(255,255,255,0) 62%),
            radial-gradient(900px 520px at 80% 30%, rgba(46,42,37,0.10), rgba(255,255,255,0) 62%),
            linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05));
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction: column;
          gap: 10px;
          color: rgba(46,42,37,0.70);
          z-index: 0; /* ✅ больше не перекрывает фото */
        }
        .mono{
          font-family: ui-serif;
          font-size: 64px;
          letter-spacing: 0.06em;
          opacity: 0.35;
        }
        .phText{
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        /* ✅ ослабили “дымку”, чтобы фото не было тусклым */
        .overlay{
          position:absolute;
          inset:0;
          background:
            radial-gradient(60% 80% at 70% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%),
            linear-gradient(135deg, rgba(46,42,37,0.08), rgba(46,42,37,0.01));
          pointer-events:none;
          z-index: 2;
        }

        /* ✅ меньше шума = меньше мутности */
        .grain{
          position:absolute;
          inset:-40%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
          opacity: 0.045; /* было 0.085 */
          mix-blend-mode: overlay;
          transform: rotate(8deg);
          pointer-events:none;
          z-index: 3;
        }

        .border{
          position:absolute;
          inset:0;
          border: 1px solid rgba(46,42,37,0.10);
          border-radius: 28px;
          pointer-events:none;
          z-index: 6;
        }

        .nav{
          appearance: none;
          -webkit-appearance: none;
          border: 0;
          cursor: pointer;
          position:absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(250,244,236,0.72);
          border: 1px solid rgba(46,42,37,0.12);
          backdrop-filter: blur(10px);
          color: rgba(46,42,37,0.72);
          font-size: 26px;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index: 7;
          transition: transform 180ms ease, opacity 180ms ease;
          opacity: 0.0;
        }
        .left{ left: 14px; }
        .right{ right: 14px; }

        .card:hover .nav{ opacity: 1; }
        .nav:hover{ transform: translateY(-50%) scale(1.03); }
        .nav:active{ transform: translateY(-50%) scale(0.98); }

        .dots{
          position:absolute;
          left: 0;
          right: 0;
          bottom: 56px;
          display:flex;
          justify-content:center;
          gap: 8px;
          z-index: 7;
        }
        .dot{
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 0;
          cursor:pointer;
          background: rgba(46,42,37,0.25);
          transition: transform 180ms ease, background 180ms ease, width 180ms ease;
        }
        .dot.active{
          background: rgba(184,150,74,0.85);
          width: 22px;
        }

        .label{
          position:absolute;
          left: 18px;
          bottom: 16px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(250,244,236,0.78);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.62);
          display:flex;
          align-items:center;
          gap: 10px;
          z-index: 7;
        }
        .bullet{
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(184,150,74,0.80);
          box-shadow: 0 0 0 6px rgba(184,150,74,0.12);
        }

        @media (max-width: 980px){
          .sticky{ position: relative; top: auto; }
          .card{ height: 420px; }
          .nav{ opacity: 1; }
          .dots{ bottom: 50px; }
        }

        @media (max-width: 520px){
          .card{ height: 360px; border-radius: 24px; }
          .border{ border-radius: 24px; }
          .label{ display:none; }
        }
      `}</style>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 999,
        background: "rgba(250,244,236,0.72)",
        border: "1px solid rgba(46,42,37,0.10)",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(46,42,37,0.70)",
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <span style={{ opacity: 0.6 }}>{label}</span>
      <span style={{ opacity: 0.95 }}>{value}</span>
    </div>
  );
}
