import "./style.css";
import imgPerfil from "@/core/assets/imgs/img-perfil.jpg";
import WallpaperDia from "@/core/assets/imgs/wallpaper-day-800.jpg";
import WallpaperNoite from "@/core/assets/imgs/wallpaper-night-800.jpg";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

interface Props {
  temaEscuro: boolean;
}
export default function SectionFicha({ temaEscuro }: Props) {
  return (
    <section
      id="ficha"
      style={{
        backgroundImage: `url('${temaEscuro ? WallpaperNoite.src : WallpaperDia.src}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="content">
        <Image src={imgPerfil} alt="img-perfil" className="foto" />
        <div className="text">
          <h1>Ygor Henrique</h1>
          <p>
            Desenvolvedor Front-End focado em criar experiências digitais
            modernas e responsivas
          </p>
        </div>
      </div>
      <br />
      <div className="social">
        <Link
          href="https://www.linkedin.com/in/ygor-henrique-888543300"
          target="_blank"
          rel="nofollow"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>

        <Link
          href="https://github.com/ygorhslima"
          target="_blank"
          rel="nofollow"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>

        <Link
          href={'./curriculo.pdf'}
          target="_blank"
          rel="external"
          type="application/pdf"
        >
          <FontAwesomeIcon icon={faFile} />
        </Link>

        <a href="mailto:ygorlima.dev06@gmail.com">
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
        <br />
      </div>
    </section>
  );
}
