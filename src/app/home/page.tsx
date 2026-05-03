"use client";

import { useTheme } from "../../context/ThemeContext";
import SectionDetalhes from "./UI/SectionDetalhes";
import SectionFicha from "./UI/SectionFicha";

export default function Home() {
  const { temaEscuro } = useTheme();
  return (
    <>
      <div>
          <SectionFicha temaEscuro={temaEscuro} />
          <SectionDetalhes />
      </div>
    </>
  );
}
