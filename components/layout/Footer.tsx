"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
    return (
        <footer className="ft">
            <Container>
                {/* Top */}
                <div className="ftTop">
                    {/* Brand */}
                    <div className="ftBrand">
                        <div className="ftLogo">Janet Esthetics</div>
                        <p className="ftDesc">
                            Private esthetic studio for curated, results-driven skincare.
                            A calm space where beauty meets serenity.
                        </p>

                        <div className="ftActions">
                            <Link className="ftPill" href="https://www.instagram.com/janet_esthetics/" target="_blank" rel="noreferrer">
                                <span className="ftPillLabel">Instagram</span>
                                <span className="ftPillDot" />
                                <span className="ftPillValue">@janetesthetics</span>
                            </Link>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="ftCol">
                        <div className="ftKicker">Explore</div>
                        <div className="ftLinks">
                            <Link className="ftLink" href="/about">About</Link>
                            <Link className="ftLink" href="/services">Services</Link>
                            <Link className="ftLink" href="/reviews">Reviews</Link>
                            <Link className="ftLink" href="/booking">Booking</Link>
                            <Link className="ftLink" href="/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="ftCol">
                        <div className="ftKicker">Connect</div>

                        <div className="ftInfo">
                            <div className="ftInfoRow">
                                <div className="ftInfoKey">Phone</div>
                                <div className="ftInfoVal">847-454-4749</div>
                            </div>

                            <div className="ftInfoRow">
                                <div className="ftInfoKey">Email</div>
                                <div className="ftInfoVal">ztsybulyak@yahoo.com</div>
                            </div>

                            <div className="ftRule" />

                            <div className="ftInfoRow">
                                <div className="ftInfoKey">Hours</div>
                                <div className="ftInfoVal">
                                    Mon–Sat · 10:00–19:00
                                    <br />
                                    Sunday · By request
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="ftBottom">
                    <div className="ftCopy">© {new Date().getFullYear()} Janet Esthetics. All rights reserved.</div>

                    <div className="ftBottomLinks">
                        <Link className="ftBottomLink" href="/policies/privacy">Privacy Policy</Link>
                        <Link className="ftBottomLink" href="/policies/terms">Terms of Service</Link>
                    </div>
                </div>
            </Container>

            <style>{`
        .ft{
          margin-top: 80px;
          position: relative;
          border-top: 1px solid rgba(46,42,37,0.10);
          background:
            radial-gradient(900px 520px at 18% 20%, rgba(184,150,74,0.12), rgba(255,255,255,0) 65%),
            radial-gradient(900px 520px at 80% 30%, rgba(46,42,37,0.08), rgba(255,255,255,0) 70%),
            linear-gradient(180deg, rgba(243,237,228,0.55), rgba(243,237,228,0.92));
          overflow: hidden;
        }

        /* subtle grain (lux) */
        .ft:before{
          content:"";
          position:absolute;
          inset:-40%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
          opacity: 0.06;
          mix-blend-mode: overlay;
          transform: rotate(6deg);
          pointer-events:none;
        }

        .ftTop{
          padding: 56px 0 46px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.1fr;
          gap: 36px;
          position: relative;
          z-index: 1;
        }

        .ftLogo{
          font-family: ui-serif;
          font-size: 22px;
          letter-spacing: 0.2px;
          color: rgba(46,42,37,0.92);
        }

        .ftDesc{
          margin: 14px 0 0;
          color: rgba(46,42,37,0.62);
          line-height: 1.75;
          max-width: 380px;
          font-size: 14.5px;
        }

        .ftActions{ margin-top: 16px; }

        .ftPill{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(250,244,236,0.70);
          border: 1px solid rgba(46,42,37,0.10);
          backdrop-filter: blur(10px);
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }
        .ftPill:hover{
          transform: translateY(-1px);
          background: rgba(250,244,236,0.84);
          border-color: rgba(184,150,74,0.22);
        }
        .ftPillLabel{
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
        }
        .ftPillDot{
          width: 4px; height: 4px;
          border-radius: 999px;
          background: rgba(184,150,74,0.80);
          display:inline-block;
        }
        .ftPillValue{
          font-size: 13px;
          color: rgba(46,42,37,0.78);
        }

        .ftKicker{
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.55);
          margin-bottom: 14px;
        }

        .ftLinks{
          display: grid;
          gap: 12px;
          font-size: 14px;
        }

        .ftLink{
          color: rgba(46,42,37,0.62);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 180ms ease, transform 180ms ease;
        }
        .ftLink:hover{
          color: rgba(46,42,37,0.86);
          transform: translateX(1px);
        }

        .ftInfo{
          border-radius: 22px;
          background: rgba(250,244,236,0.62);
          border: 1px solid rgba(46,42,37,0.10);
          box-shadow: 0 18px 50px rgba(0,0,0,0.06);
          padding: 16px;
        }

        .ftInfoRow{
          display: grid;
          grid-template-columns: 84px 1fr;
          gap: 12px;
          padding: 10px 0;
        }

        .ftInfoKey{
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(46,42,37,0.52);
        }

        .ftInfoVal{
          font-size: 14px;
          color: rgba(46,42,37,0.72);
          line-height: 1.6;
        }

        .ftRule{
          height: 1px;
          background: rgba(46,42,37,0.10);
          margin: 6px 0;
        }

        .ftBottom{
          position: relative;
          z-index: 1;
          padding: 18px 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          color: rgba(46,42,37,0.55);
          border-top: 1px solid rgba(46,42,37,0.08);
        }

        .ftBottomLinks{
          display: flex;
          gap: 18px;
        }

        .ftBottomLink{
          color: rgba(46,42,37,0.55);
          transition: color 180ms ease;
        }
        .ftBottomLink:hover{
          color: rgba(46,42,37,0.80);
        }

        @media (max-width: 960px){
          .ftTop{
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 44px 0 34px;
          }
          .ftInfoRow{ grid-template-columns: 92px 1fr; }
          .ftBottom{
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
        </footer>
    );
}
