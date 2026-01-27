"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import BookButton from "@/components/ui/BookButton";
import { useEffect, useState } from "react";


const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
  { href: "/services/faq", label: "FAQ" }, // ✅ добавили

];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="jeHeader"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(243, 237, 228, 0.86)" : "rgba(243, 237, 228, 0.68)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(46,42,37,0.14)" : "1px solid rgba(46,42,37,0.08)",
        boxShadow: scrolled ? "0 14px 40px rgba(46,42,37,0.10)" : "none",
        transition: "all 220ms ease",
      }}
    >
      <Container>
        <div className="jeRow">
          {/* BRAND */}
          <div className="jeLeft">
            <Link href="/" className="jeBrand" aria-label="Janet Esthetics Home">
              <span className="jeLogoWrap" aria-hidden="true">
                <Image
                  src="/images/logo.jpg"
                  alt=""
                  width={44}
                  height={44}
                  priority
                  className="jeLogoImg"
                />
              </span>
              <span className="jeBrandText">Janet Esthetics</span>
            </Link>
          </div>

          {/* NAV */}
          <div className="jeCenter" aria-label="Primary navigation">
            <nav className="jeNav">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`jeNavLink ${active ? "isActive" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CTA */}
          <div className="jeRight">
            <BookButton label="Book Now" className="jeCta" />
          </div>
        </div>
      </Container>

      <style>{`
        .jeHeader nav { display: flex !important; }

        .jeRow{
          height: 76px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
        }
        .jeLeft{ justify-self: start; min-width: 0; }
        .jeCenter{ justify-self: center; max-width: 100%; }
        .jeRight{ justify-self: end; }

        .jeBrand{
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          text-decoration: none;
          color: var(--text);
        }

        .jeLogoWrap{
          width: 44px;
          height: 44px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 10px 24px rgba(46,42,37,0.10);
          background: rgba(255,255,255,0.18);
        }

        .jeLogoImg{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .jeBrandText{
          font-family: ui-serif;
          font-size: 22px;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .jeNav{
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(46,42,37,0.08);
          transition: all 220ms ease;

          max-width: min(680px, calc(100vw - 320px));
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .jeNav::-webkit-scrollbar{ display:none; }

        .jeNavLink{
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
          line-height: 14px;
          color: rgba(46,42,37,0.70);
          background: transparent;
          transition: all 180ms ease;
          text-decoration: none;
          white-space: nowrap;
          flex: 0 0 auto;
        }
        .jeNavLink:hover{
          background: rgba(46,42,37,0.06);
          color: rgba(46,42,37,0.88);
        }
        .jeNavLink.isActive{
          color: var(--text);
          background: rgba(46,42,37,0.08);
        }

        .jeCta{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2e2a25;
          color: #f7f1e8;
          padding: 12px 18px;
          border-radius: 999px;
          font-size: 14px;
          border: 1px solid rgba(46,42,37,0.22);
          box-shadow: 0 18px 50px rgba(46,42,37,0.14);
          transition: transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .jeCta:hover{ transform: translateY(-2px); opacity: 0.97; box-shadow: 0 26px 70px rgba(46,42,37,0.16); }
        .jeCta:active{ transform: translateY(0px); opacity: 0.92; }

        @media (max-width: 980px){
          .jeBrandText{ font-size: 20px; }
          .jeLogoWrap{ width: 40px; height: 40px; }
          .jeNav{ max-width: calc(100vw - 270px); gap: 6px; padding: 5px; }
          .jeNavLink{ padding: 9px 12px; font-size: 13px; }
        }

        /* ✅ MOBILE FIX: brand+cta сверху, навигация отдельной строкой */
        @media (max-width: 640px){
          .jeRow{
            height: auto;
            grid-template-columns: 1fr auto;
            grid-template-areas:
              "brand cta"
              "nav   nav";
            align-items: center;
            gap: 10px;
            padding: 10px 0 12px;
          }
          .jeLeft{ grid-area: brand; }
          .jeRight{ grid-area: cta; }
          .jeCenter{ grid-area: nav; justify-self: start; }

          .jeLogoWrap{ width: 34px; height: 34px; }
          .jeBrandText{ font-size: 18px; }

          .jeNav{
            max-width: 100%;
            width: 100%;
            padding: 6px;
          }
        }
      `}</style>
    </header>
  );
}
