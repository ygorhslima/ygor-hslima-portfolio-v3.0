import "./style.css";

import { listaHardSkills } from "@/core/utils/listaHardSkillsAndSoftskills";
import { listaSoftSkills } from "@/core/utils/listaHardSkillsAndSoftskills";
import Image from "next/image";

export default function ArticleSkills() {
  return (
    <article id="skills">
      <h2 className="title">
        <i className="fa-solid fa-brain"></i> Minhas Skills
      </h2>
      <div id="skill-container">
        <h2>Hardskills</h2>

        <div className="container-hardskills">
          {listaHardSkills.map(({ img, text, link }, index) => (
            // key está no elemento pai
            <div className="item" key={index}>
              <a
                className="img-hardskill"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {img && (
                  <Image 
                    src={img.src} 
                    alt={text} 
                    width={40} 
                    height={40} 
                    style={{ objectFit: "contain" }} 
                  />
                )}
                <div className="skill">{text}</div>
              </a>
            </div>
          ))}
        </div>

        {/* --- SOFT SKILLS --- */}
        <h2>Softskills</h2>

        <div className="container-softskills">
          {
            listaSoftSkills.map(({ text }, index) => {
              return (
                <div className="item" key={index}>
                  <div className="skill">{text}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </article>
  );
}
