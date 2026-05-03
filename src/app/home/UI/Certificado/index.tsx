"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./style.css";

interface Props {
  curso: string;
  link: string;
}
export default function Certificado({ curso, link }: Props) {
  const [mostrarPDF, setMostrarPDF] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalJSX = (
    <div className="modal">
      <div className="overlay" onClick={() => setMostrarPDF(false)}></div>

      <div className="conteudo" onClick={(e) => e.stopPropagation()}>
        <h3>{curso}</h3>
        <iframe
          src={link}
          width="100%"
          height="100%"
          title={`Certificado - ${curso}`}
          style={{ border: "none" }}
        />
        <button
          type="button"
          className="fechar-modal btn"
          onClick={() => setMostrarPDF(false)}
        >
          Fechar
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={() => setMostrarPDF(true)}>
        Ver certificado
      </button>
      {mostrarPDF && isMounted && createPortal(modalJSX, document.body)}
    </div>
  );
}
