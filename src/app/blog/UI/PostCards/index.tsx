import { listaBlog } from "@/core/utils/listaBlog";
import "./style.css";
import Link from "next/link";
import { PAGES } from "@/core/constants/pages";
import Image from "next/image";

export default function PostCards() {
  return (
    <div className="post-grid">
      {listaBlog.map((item) => (
        <div key={item.id} className="post-card">
          <Link href={`${PAGES.BLOG}/${item.id}`} className="link-blog">
            <div className="post-container">
              <Image src={item.img} alt={item.alt} />
            </div>

            <div className="post-info">
              <span className="data">{item.data}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
