import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import EnTete from "@/components/enTete";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CostumQueryClientProvider } from "@/Providers/queryClientPrivider";
import { Auth0Provider } from "@auth0/nextjs-auth0";

const montserrat = Montserrat({
  // variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200" , "900"]
});



export const metadata: Metadata = {
  title: "modimal",
  description: "Women Clothing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html
      lang="en"
      className={`${montserrat.className}   antialiased`}
    >
      <body className="w-full min-h-screen flex flex-col bg-white" >
        <CostumQueryClientProvider>
          <Auth0Provider >
        <EnTete />
        <Navigation />
        {children}
        <Footer />
          </Auth0Provider>
        </CostumQueryClientProvider>
        </body>
    </html>
  );
}
