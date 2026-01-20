"use client";

import React, { useEffect, useMemo, useState } from "react";

type Petal = {
    id: string;
    left: number;      // vw
    size: number;      // px
    duration: number;  // s
    delay: number;     // s
    drift: number;     // px
    rotate: number;    // deg
    opacity: number;   // 0..1
    flip: number;      // -1 or 1
    sway: number;      // deg
};

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
function pick<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

type Props = {
    /** Сколько лепестков одновременно (визуальная плотность) */
    count?: number;
    /** Общая интенсивность (1 = норм). >1 = активнее, <1 = спокойнее */
    intensity?: number;
    /** Частота появления: меньше = чаще. Например 0.10–0.16 */
    rate?: number;
    /** Максимальная прозрачность (чтобы не мешали тексту) */
    maxOpacity?: number;
};

export default function SakuraPetals({
    count = 28,
    intensity = 1,
    rate = 0.5,        // ✅ чем меньше — тем чаще “стартуют”
    maxOpacity = 0.62,  // ✅ ярче, но ещё фон
}: Props) {
    const [mounted, setMounted] = useState(false);

    // ✅ создаём один раз при mount, чтобы лепестки не пересоздавались
    const petals = useMemo<Petal[]>(() => {
        if (!mounted) return [];

        const base = Date.now().toString(16);

        return Array.from({ length: count }).map((_, i) => ({
            id: `${base}-${i}-${Math.random().toString(16).slice(2)}`,
            left: rand(0, 100),
            size: rand(16, 30),

            // ✅ медленно (не ускоряем). Но чаще появляются за счёт delay/rate и count.
            duration: rand(30, 52) / intensity,

            // ✅ ЧАЩЕ: delay небольшие + волна по i
            // rate ~ 0.10–0.16: 0.10 = чаще, 0.16 = спокойнее
            delay: rand(0, 1.6) + i * (rate / intensity),

            drift: rand(-46, 46),
            rotate: rand(-140, 140),
            sway: rand(6, 18),
            opacity: rand(0.42, maxOpacity),

            flip: pick([-1, 1]),
        }));
    }, [count, intensity, rate, maxOpacity, mounted]);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="sakura sakura--bg" aria-hidden="true">
            {petals.map((p) => (
                <span
                    key={p.id}
                    className="petal"
                    style={
                        {
                            left: `${p.left}vw`,
                            width: `${p.size}px`,
                            height: `${Math.round(p.size * 1.35)}px`,
                            opacity: p.opacity,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                            ["--drift" as any]: `${p.drift}px`,
                            ["--rot" as any]: `${p.rotate}deg`,
                            ["--flip" as any]: p.flip,
                            ["--sway" as any]: `${p.sway}deg`,
                        } as React.CSSProperties
                    }
                >
                    <i className="shape" />
                    <i className="veins" />
                </span>
            ))}

            <style>{`
        /* ✅ лепестки на заднем фоне */
        .sakura--bg{
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* ✅ чтобы контент ВСЕГДА был выше лепестков:
           Добавь в globals.css:
           main { position: relative; z-index: 1; }
           header/footer { position: relative; z-index: 2; }
        */

        .petal{
          position:absolute;
          top:-16vh;
          animation: fall linear infinite;
          will-change: transform;
          background: transparent;
          border: 0;
          box-shadow: none;
          isolation: isolate;
        }

        /* форма лепестка */
        .shape, .veins{
          position:absolute;
          inset:0;
          display:block;
          background: transparent;

          clip-path: polygon(
            50% 100%,
            36% 88%,
            18% 68%,
            8% 44%,
            14% 22%,
            30% 8%,
            50% 2%,
            70% 8%,
            86% 22%,
            92% 44%,
            82% 68%,
            64% 88%
          );

          border-radius: 88% 88% 95% 95% / 70% 70% 120% 120%;

          transform:
            rotate(calc(var(--rot) * 0.18))
            skewX(-10deg)
            scaleX(calc(0.96 + (var(--flip) * 0.02)));

          transform-origin: 50% 55%;
          pointer-events:none;
        }

        /* ✅ ярче, без квадратов и артефактов:
           - никаких box-shadow наружу
           - тень ТОЛЬКО drop-shadow на форме
        */
        .shape{
          background:
            radial-gradient(120% 120% at 30% 22%,
              rgba(255,255,255,0.92),
              rgba(255,255,255,0) 46%
            ),
            linear-gradient(165deg,
              rgba(255, 220, 231, 0.98),
              rgba(255, 150, 175, 0.78)
            );

          /* лёгкий объём внутри */
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.24),
            inset 0 -14px 20px rgba(184,150,74,0.06);

          /* ✅ мягкая тень (без пятен) */
          filter: drop-shadow(0 10px 16px rgba(46,42,37,0.12));
        }

        .veins{
          background:
            linear-gradient(to bottom,
              rgba(255,255,255,0.58),
              rgba(255,255,255,0)
            ) 50% 18% / 1px 68% no-repeat,
            linear-gradient(to bottom,
              rgba(255,255,255,0.22),
              rgba(255,255,255,0)
            ) 58% 22% / 1px 56% no-repeat;
          opacity: 0.86;
        }

        /* ✅ падение + лёгкое покачивание */
        @keyframes fall{
          0%{
            transform: translate3d(0, -16vh, 0) rotate(var(--rot));
          }
          30%{
            transform: translate3d(calc(var(--drift) * 0.55), 30vh, 0) rotate(calc(var(--rot) * 1.2));
          }
          60%{
            transform: translate3d(calc(var(--drift) * 1.05), 66vh, 0) rotate(calc(var(--rot) * 1.9));
          }
          100%{
            transform: translate3d(calc(var(--drift) * 1.45), 118vh, 0) rotate(calc(var(--rot) * 2.3));
          }
        }

        @media (prefers-reduced-motion: reduce){
          .sakura--bg{ display:none; }
        }
      `}</style>
        </div>
    );
}
