
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACT Scrap Metal Trading - Professional Scrap Metal Services",
  description: "ACT SCRAP METAL TRADING LTD - Your trusted partner for buying, selling and processing scrap metals. Professional services with competitive pricing in the UK and Turkey.",
  icons: {
    icon: "https://static.readdy.ai/image/08885e5b09c86781257f7ab705ba4b0d/cd3d2d5d8c1a99c6e3cea67d0ae06622.png",
    shortcut: "https://static.readdy.ai/image/08885e5b09c86781257f7ab705ba4b0d/cd3d2d5d8c1a99c6e3cea67d0ae06622.png",
    apple: "https://static.readdy.ai/image/08885e5b09c86781257f7ab705ba4b0d/cd3d2d5d8c1a99c6e3cea67d0ae06622.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <WhatsAppFloat />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
