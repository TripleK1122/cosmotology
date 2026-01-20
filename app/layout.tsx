import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SakuraPetals from "@/components/ui/SakuraPetals";
import { Cormorant_Garamond, Inter } from "next/font/google";

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

// Убрали icons из metadata, чтобы не было конфликта
export const metadata = {
    title: "Janet Esthetics",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${serif.variable} ${sans.variable}`}>
            <head>
                {/* Принудительно задаём favicon для вкладки */}
                <link rel="icon" href="/icon.png?v=3" sizes="any" />
                {/* Если захочешь PNG: добавь файл /public/favicon-32.png и раскомментируй */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=3" /> */}
            </head>
            <body>
                <SakuraPetals count={16} intensity={1} />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

