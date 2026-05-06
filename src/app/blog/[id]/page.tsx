import { PAGES } from "@/core/constants/pages";
import { listaBlog } from "@/core/utils/listaBlog";
import { redirect } from "next/navigation";

// Esta função diz ao Next.js quais IDs existem para gerar os arquivos estáticos
export async function generateStaticParams() {
  return listaBlog.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogDetailProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { id } = await params;
  const post = listaBlog.find(
    (item) => item.id === (typeof id === "string" ? parseInt(id) : -1),
  );

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
          <div
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
            className="sobre-paragrafo"
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </article>
    </section>
  );
}
