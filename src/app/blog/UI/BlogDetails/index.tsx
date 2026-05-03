"use client";

import { PAGES } from "@/core/constants/pages";
import { listaBlog } from "@/core/utils/listaBlog";
import { useParams, redirect } from "next/navigation";


export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;
  const post = listaBlog.find((item) => item.id === (typeof id === "string" ? parseInt(id) : -1));

  if (!post) {
    redirect(PAGES.BLOG);
  }

  return (
    <section id="sobre">
      <article>
        <p className="periodo">{post.data}</p>
        <h1 style={{ color: "var(--destaque)", marginBottom: "20px" }}>
          {post.titulo}
        </h1>
        <div className="sobre-content">
          <p className="sobre-paragrafo" style={{ whiteSpace: "pre-wrap" }}>
            {post.conteudo}
          </p>
        </div>
      </article>
    </section>
  );
}