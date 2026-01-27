"use client";

import { useMemo, useRef, useState } from "react";
import Modal from "@/components/ui/Modal";
import BookButton from "@/components/ui/BookButton";

import { categories } from "@/lib/categories";
import { getServicesByCategory } from "@/lib/services";
import type { CategoryId, Service } from "@/lib/types";

import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ServicesExplorer() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  const [productsOpen, setProductsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    if (!activeCategory) return [];
    return getServicesByCategory(activeCategory);
  }, [activeCategory]);

  const activeCat = useMemo(() => {
    if (!activeCategory) return null;
    return categories.find((c) => c.id === activeCategory) ?? null;
  }, [activeCategory]);

  function onPickCategory(id: CategoryId) {
    setActiveCategory(id);

    requestAnimationFrame(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function onBackToCategories() {
    setActiveCategory(null);
    setActiveService(null);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <section className="wrap">
      {!activeCategory ? (
        <div className="topActions">
          <button type="button" className="productsMiniBtn" onClick={() => setProductsOpen(true)}>
            Products
          </button>
        </div>
      ) : null}

      <motion.div
        className="catGrid"
        aria-label="Service categories"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
        }}
      >
        {categories.map((c) => {
          const isActive = c.id === activeCategory;

          const bg = c.image
            ? `url(${c.image})`
            : "radial-gradient(1200px 600px at 20% 20%, rgba(184,150,74,0.25), rgba(46,42,37,0.06) 55%, rgba(255,255,255,0) 100%)";

          return (
            <motion.button
              key={c.id}
              type="button"
              className={`catCard ${isActive ? "active" : ""}`}
              onClick={() => onPickCategory(c.id)}
              aria-pressed={isActive}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18 }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const r = el.getBoundingClientRect();
                const x = e.clientX - r.left;
                const y = e.clientY - r.top;

                const dx = (x / r.width) * 2 - 1;
                const dy = (y / r.height) * 2 - 1;

                el.style.setProperty("--mx", `${x}px`);
                el.style.setProperty("--my", `${y}px`);
                el.style.setProperty("--px", `${dx.toFixed(3)}`);
                el.style.setProperty("--py", `${dy.toFixed(3)}`);
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.setProperty("--px", `0`);
                el.style.setProperty("--py", `0`);
              }}
            >
              <div className="img" style={{ backgroundImage: bg }} />
              <div className="overlay" />
              <div className="shine" />
              <div className="catText">
                <div className="catTitle">{c.title}</div>
                <div className="catDesc">{c.description}</div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {activeCategory ? (
          <motion.div
            key={activeCategory}
            ref={servicesRef}
            className="servicesBlock"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="servicesHeader">
              <div>
                <div className="servicesTitle">{activeCat?.title ?? "Services"}</div>
                <div className="servicesHint">Select a service to view details & pricing.</div>
              </div>

              <div className="servicesActions">
                <button type="button" className="productsMiniBtn" onClick={() => setProductsOpen(true)}>
                  Products
                </button>

                <button type="button" className="backBtn" onClick={onBackToCategories}>
                  ← Back to categories
                </button>
              </div>
            </div>

            <motion.div
              className="serviceGrid"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              {items.map((s) => (
                <motion.button
                  key={s.slug}
                  type="button"
                  className="serviceCard"
                  onClick={() => setActiveService(s)}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.18 }}
                >
                  {s.image ? <div className="serviceImg" style={{ backgroundImage: `url(${s.image})` }} /> : null}

                  <div className="serviceBody">
                    <div className="serviceTop">
                      <div className="serviceName">{s.title}</div>

                      <div className="serviceMeta">
                        {s.duration ? <span>{s.duration}</span> : null}
                        {s.duration && s.price ? <span className="dot">•</span> : null}
                        {s.price ? <span>{s.price}</span> : null}
                      </div>
                    </div>

                    <div className="serviceSub">{s.subtitle}</div>

                    <div className="serviceMore">
                      View details <span className="arrow">→</span>
                    </div>

                    <div className="glow" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* MODAL: SERVICE */}
      <Modal open={!!activeService} onClose={() => setActiveService(null)} title="">
        {activeService && (
          <div className="modal">
            {activeService.image ? <div className="modalHero" style={{ backgroundImage: `url(${activeService.image})` }} /> : null}

            <div className="modalBody">
              <div className="modalRow">
                <h2 className="modalTitle">{activeService.title}</h2>
                {activeService.price ? <div className="modalPrice">{activeService.price}</div> : null}
              </div>

              {activeService.duration ? <div className="modalDuration">{activeService.duration}</div> : null}

              <div className="modalSectionTitle">About This Treatment</div>
              <p className="modalText">{activeService.subtitle}</p>

              <div className="modalSectionTitle">Benefits</div>
              <ul className="list">
                {activeService.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="modalSectionTitle">Suitable For</div>
              <div className="modalText">{activeService.whoFor.join(", ")}</div>

              <div className="ctaWrap">
                <BookButton label="Book This Treatment" className="cta" />
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* PRODUCTS MODAL */}
      <Modal open={productsOpen} onClose={() => setProductsOpen(false)} title="">
        <div className="modal">
          <div className="modalBody">
            <div className="modalRow">
              <h2 className="modalTitle">Products We Use</h2>
            </div>

            <p className="modalText">
              We work with trusted, professional-grade skincare brands. Product selection is confirmed during your consultation to match your
              skin type and goals.
            </p>

            <div className="productsGrid">
              <div className="productCard">
                <div
                  className="productImg"
                  style={{
                    backgroundImage: "url(/images/products/biojouvance.jpg)",
                    backgroundPosition: "50% 70%",
                  }}
                  aria-label="Bio Jouvance Paris"
                />
                <div className="productName">Bio Jouvance Paris</div>
                <div className="productDesc">
                  French-inspired professional skincare with advanced formulas that support hydration, texture, and a healthy-looking glow—ideal
                  for treatment protocols and post-care routines.
                </div>
                <a className="productLink" href="https://biojouvance.com/" target="_blank" rel="noreferrer">
                  biojouvance.com →
                </a>
              </div>

              <div className="productCard">
                <div
                  className="productImg"
                  style={{
                    backgroundImage: "url(/images/products/bellecote.jpg)",
                    backgroundPosition: "50% 70%",
                  }}
                  aria-label="BelleCôte Paris"
                />
                <div className="productName">BelleCôte Paris</div>
                <div className="productDesc">
                  Premium Paris-based skincare with a clean, minimal approach—designed to support calm, balanced skin and enhance results from
                  professional facial treatments.
                </div>
                <a className="productLink" href="https://bellecoteparis.com/" target="_blank" rel="noreferrer">
                  bellecoteparis.com →
                </a>
              </div>
            </div>

            <div className="ctaWrap">
              <BookButton label="Book Now" className="cta" />
            </div>
          </div>
        </div>
      </Modal>

      <style>{`
        /* RESET */
        .catCard, .serviceCard, .backBtn, .productsMiniBtn{
          appearance: none;
          -webkit-appearance: none;
          background: none;
          padding: 0;
          border: 0;
          cursor: pointer;
          font: inherit;
          color: inherit;
        }
        .catCard:focus, .serviceCard:focus, .backBtn:focus, .productsMiniBtn:focus { outline: none; }
        .catCard:focus-visible, .serviceCard:focus-visible, .backBtn:focus-visible, .productsMiniBtn:focus-visible{
          outline: 2px solid rgba(184,150,74,0.38);
          outline-offset: 4px;
          border-radius: 26px;
        }

        /* SECTION */
        .wrap{ padding: 15px 0 40px; }

        .topActions{
          margin-top: -60px;
          display:flex;
          justify-content:flex-end;
        }

        .productsMiniBtn{
          white-space: nowrap;
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(184,150,74,0.10);
          border: 1px solid rgba(184,150,74,0.22);
          color: rgba(46,42,37,0.78);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }
        .productsMiniBtn:hover{
          transform: translateY(-1px);
          background: rgba(184,150,74,0.14);
          border-color: rgba(184,150,74,0.30);
        }

        .catGrid{
          margin-top: 8px;
          display:grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 22px;
        }

        .catCard{
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 420px;
          box-shadow: 0 24px 70px rgba(0,0,0,0.10);
          outline: 1px solid rgba(46,42,37,0.10);
          text-align:left;
          transform: translateZ(0);
          --px: 0;
          --py: 0;
          --mx: 50%;
          --my: 50%;
        }

        .catCard:hover{ box-shadow: 0 34px 100px rgba(0,0,0,0.14); }
        .catCard.active{ outline: 2px solid rgba(184,150,74,0.35); }

        .img{
          position:absolute; inset:0;
          background-size: cover;
          background-position: center;
          filter: saturate(0.98) contrast(1.02);
          transform: scale(1.02) translate(calc(var(--px) * -10px), calc(var(--py) * -10px));
          transition: transform 360ms cubic-bezier(.16,1,.3,1), filter 360ms cubic-bezier(.16,1,.3,1);
        }
        .catCard:hover .img{
          transform: scale(1.07) translate(calc(var(--px) * -14px), calc(var(--py) * -14px));
          filter: saturate(1.02) contrast(1.04);
        }

        .overlay{
          position:absolute; inset:0;
          background:
            radial-gradient(60% 65% at 70% 20%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%),
            linear-gradient(to top, rgba(15,12,10,0.58), rgba(15,12,10,0.06) 55%, rgba(15,12,10,0.00) 75%);
        }

        .shine{
          position:absolute;
          inset:0;
          background: radial-gradient(260px 220px at var(--mx) var(--my), rgba(255,255,255,0.20), rgba(255,255,255,0) 60%);
          opacity: 0;
          transition: opacity 260ms cubic-bezier(.16,1,.3,1);
          pointer-events:none;
        }
        .catCard:hover .shine{ opacity: 1; }

        .catText{
          position:absolute; left: 28px; right: 28px; bottom: 22px;
          background: rgba(250,244,236,0.84);
          border: 1px solid rgba(46,42,37,0.10);
          border-radius: 22px;
          padding: 18px 18px;
          backdrop-filter: blur(10px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.10);
        }

        .catTitle{
          font-family: ui-serif;
          font-size: 34px;
          color: rgba(46,42,37,0.92);
        }

        .catDesc{
          margin-top: 8px;
          color: rgba(46,42,37,0.62);
          font-size: 16px;
          line-height: 1.55;
        }

        /* SERVICES */
        .servicesBlock{
          margin-top: 42px;
          border-radius: 26px;
          background: rgba(255,255,255,0.42);
          border: 1px solid rgba(46,42,37,0.08);
          box-shadow: 0 24px 70px rgba(0,0,0,0.06);
          padding: 26px;
        }

        .servicesHeader{ display:flex; align-items:flex-end; justify-content:space-between; gap: 14px; flex-wrap:wrap; }
        .servicesTitle{ font-family: ui-serif; font-size: 40px; color: rgba(46,42,37,0.92); }
        .servicesHint{ color: rgba(46,42,37,0.55); margin-top: 6px; }

        .servicesActions{
          display:flex;
          align-items:center;
          gap: 10px;
        }

        .backBtn{
          white-space: nowrap;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(46,42,37,0.06);
          border: 1px solid rgba(46,42,37,0.10);
          color: rgba(46,42,37,0.78);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }
        .backBtn:hover{
          transform: translateY(-1px);
          background: rgba(46,42,37,0.08);
          border-color: rgba(184,150,74,0.22);
        }

        .serviceGrid{
          margin-top: 18px;
          display:grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
        }

        .serviceCard{
          overflow:hidden;
          border-radius: 22px;
          border: 1px solid rgba(46,42,37,0.10);
          background: rgba(250,244,236,0.72);
          box-shadow: 0 18px 50px rgba(0,0,0,0.06);
          transition: box-shadow 200ms ease, border-color 200ms ease;
          text-align:left;
          position: relative;
        }
        .serviceCard:hover{
          box-shadow: 0 26px 70px rgba(0,0,0,0.10);
          border-color: rgba(184,150,74,0.20);
        }

        .serviceImg{
          height: 220px;
          background-size: cover;
          background-position: center;
        }

        .serviceBody{ padding: 18px 18px 16px; position: relative; }
        .serviceName{ font-family: ui-serif; font-size: 28px; color: rgba(46,42,37,0.92); }
        .serviceMeta{ margin-top: 10px; color: rgba(184,150,74,0.90); font-size: 16px; display:flex; gap: 10px; align-items:center; }
        .dot{ opacity: .7; }
        .serviceSub{ margin-top: 14px; color: rgba(46,42,37,0.58); line-height: 1.7; font-size: 16px; }

        .serviceMore{
          margin-top: 16px;
          color: rgba(46,42,37,0.82);
          font-weight: 600;
          display:inline-flex;
          align-items:center;
          gap: 10px;
        }
        .arrow{ display:inline-block; transform: translateX(0); transition: transform 220ms ease; }
        .serviceCard:hover .arrow{ transform: translateX(3px); }

        .glow{
          position:absolute;
          inset: 0;
          border-radius: 22px;
          background: radial-gradient(700px 360px at 15% 20%, rgba(184,150,74,0.14), rgba(255,255,255,0) 60%);
          opacity: 0;
          transition: opacity 220ms ease;
          pointer-events:none;
        }
        .serviceCard:hover .glow{ opacity: 1; }

        /* MODAL CONTENT */
        .modal{ border-radius: 22px; overflow:hidden; background: rgba(250,244,236,0.92); }
        .modalHero{ height: 320px; background-size: cover; background-position: center; }
        .modalBody{ padding: 22px; }
        .modalRow{ display:flex; justify-content:space-between; align-items:flex-start; gap: 16px; }
        .modalTitle{ font-family: ui-serif; font-size: 44px; margin: 0; color: rgba(46,42,37,0.92); }
        .modalPrice{ font-family: ui-serif; font-size: 34px; color: rgba(46,42,37,0.88); margin-top: 6px; }
        .modalDuration{ margin-top: 10px; color: rgba(184,150,74,0.90); font-size: 18px; }
        .modalSectionTitle{ margin-top: 22px; font-family: ui-serif; font-size: 24px; color: rgba(46,42,37,0.92); }
        .modalText{ margin-top: 10px; color: rgba(46,42,37,0.60); line-height: 1.8; font-size: 18px; }
        .list{ margin-top: 12px; color: rgba(46,42,37,0.60); line-height: 1.8; padding-left: 22px; font-size: 18px; }
        .ctaWrap{ margin-top: 26px; }
        .cta{
          width: 100%;
          display:flex;
          align-items:center;
          justify-content:center;
          background: #2e2a25;
          color: #f7f1e8;
          padding: 18px 22px;
          border-radius: 999px;
          font-size: 16px;
          border: 1px solid rgba(46,42,37,0.22);
          box-shadow: 0 18px 50px rgba(46,42,37,0.14);
          transition: transform 180ms ease, opacity 180ms ease;
        }
        .cta:hover{ transform: translateY(-1px); opacity: .96; }

        /* PRODUCTS */
        .productsGrid{
          margin-top: 18px;
          display:grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
        }

        .productCard{
          border-radius: 18px;
          overflow:hidden;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 14px 40px rgba(0,0,0,0.06);
        }

        .productImg{
          width: 100%;
          height: 180px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 28%;
          background-color: transparent;
          border-bottom: 0 !important;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }

        .productName{
          padding: 14px 16px 0;
          font-family: ui-serif;
          font-size: 22px;
          color: rgba(46,42,37,0.92);
        }

        .productDesc{
          padding: 8px 16px 0;
          color: rgba(46,42,37,0.60);
          line-height: 1.7;
          font-size: 16px;
        }

        .productLink{
          display:inline-block;
          margin: 12px 16px 16px;
          color: rgba(46,42,37,0.86);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(184,150,74,0.35);
        }
        .productLink:hover{ border-bottom-color: rgba(184,150,74,0.70); }

        /* ✅ MOBILE FIX (читабельно, кнопка не наезжает) */
        @media (max-width: 900px){
          .wrap{ padding: 10px 0 26px; }

          .topActions{
            margin-top: 12px;          /* ✅ вместо -60px */
            justify-content: flex-start;
            padding: 0 2px;
          }

          .productsMiniBtn{
            font-size: 14px;
            padding: 8px 12px;
          }

          .catGrid{
            margin-top: 14px;
            display:flex;
            gap: 14px;
            overflow-x:auto;
            padding: 6px 2px 14px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .catGrid::-webkit-scrollbar{ display:none; }

          .catCard{
            flex: 0 0 86%;
            min-height: 230px;
            border-radius: 22px;
            scroll-snap-align: start;
          }

          .catText{
            left: 14px; right: 14px; bottom: 12px;
            padding: 14px;
            border-radius: 18px;
          }
          .catTitle{ font-size: 24px; }
          .catDesc{ font-size: 13px; line-height: 1.45; }

          .servicesBlock{
            margin-top: 18px;
            padding: 16px;
            border-radius: 22px;
          }

          .servicesHeader{
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .servicesActions{ width: 100%; justify-content: flex-start; flex-wrap: wrap; }
          .servicesTitle{ font-size: 22px; }
          .servicesHint{ font-size: 13px; }

          .serviceGrid{
            margin-top: 14px;
            display:flex;
            flex-direction: column;
            gap: 14px;
          }

          .serviceImg{ height: 210px; }
          .serviceBody{ padding: 16px; }
          .serviceName{ font-size: 22px; line-height: 1.15; }
          .serviceMeta{ margin-top: 8px; font-size: 13px; gap: 8px; }

          .serviceSub{
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.6;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .serviceMore{ margin-top: 12px; font-size: 14px; }

          .modalHero{ height: 220px; }
          .modalBody{ padding: 18px; }
          .modalTitle{ font-size: 28px; line-height: 1.1; }
          .modalPrice{ font-size: 22px; }
          .modalText, .list{ font-size: 16px; }

          .productsGrid{ grid-template-columns: 1fr; }
          .productImg{ height: 160px; }
        }

        @media (max-width: 520px){
          .catCard{ flex-basis: 90%; min-height: 220px; }
          .serviceImg{ height: 190px; }
        }
      `}</style>
    </section>
  );
}
