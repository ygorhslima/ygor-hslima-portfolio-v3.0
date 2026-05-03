"use client";

import "../globals.css";
import { useState } from "react";
import { Providers } from "./providers"; // Importe o Providers

import SideBar from "@/layout/SideBar";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // Remova a chamada a useTheme() daqui. O layout raiz não deve consumir o tema diretamente.
  const onToggleMenu = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <div className="layout-wrapper">
            <SideBar isOpen={isSideBarOpen} />
            <div className="wrapper">
              <Header onToggleMenu={onToggleMenu} />
              <main>{children}</main>
            </div>
            <Footer />
          </div> 
        </Providers>
      </body>
    </html>
  );
}
