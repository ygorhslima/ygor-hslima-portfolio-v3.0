"use client";

import { useTheme } from "@/context/ThemeContext";
import MenuHamburguer from "./MenuHamburguer";
import "./style.css";
import { Moon, Sun } from "lucide-react";

interface PropsHeader {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: PropsHeader) {
  const { temaEscuro, setTemaEscuro } = useTheme();

  return (
    <header>
      <div className="menu-hambuguer">
        <MenuHamburguer onClick={onToggleMenu} />
      </div>
      <h1>Portfolio</h1>
      
      <button id="botao-tema" onClick={() => setTemaEscuro(!temaEscuro)}>
        {temaEscuro ? <Moon /> : <Sun />}
      </button>
    </header>
  );
}
