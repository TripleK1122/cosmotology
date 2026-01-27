import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { Metadata } from "next";
const serif = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-serif",
    display: "swap",
});

const sans = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Janet Esthetics",

    // ✅ Вариант 1 (рекомендую): файл лежит в /public/icon.png
    icons: {
        icon: [
            { url: "/icon.png?v=3", type: "image/png" },
        ],
    },

    // (опционально) чтобы на iPhone добавлялось красиво:
    // icons: {
    //   icon: [{ url: "/icon.png?v=3", type: "image/png" }],
    //   apple: [{ url: "/apple-touch-icon.png?v=3" }],
    // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${serif.variable} ${sans.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
