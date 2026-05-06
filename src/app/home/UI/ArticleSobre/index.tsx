import { listaSobre } from "@/core/utils/listaSobre";
import "./style.css";

export default function ArticleSobre() {
  return (
    <article id="sobre">
      <h1>Sobre mim</h1>
      {listaSobre.map((item, index) => {
        return (
          <div className="sobre-content" key={index}>
            <h4 className="sobre-title">{item.titulo}</h4>
            <p dangerouslySetInnerHTML={{__html: item.paragrafo}} />
          </div>
        );
      })}
    </article>
  );
}
