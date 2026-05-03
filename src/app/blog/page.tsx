import "./style.css";
import PostCards from "./UI/PostCards";
import BlogBanner from "./UI/BlogBanner";

export default function Blog() {
  return (
    <>
      <section className="blog-page">
        <BlogBanner />
        <div className="blog-container">
          <article id="blog-content">
            <h2>
              <i className="fa-solid fa-newspaper"></i> Artigos
            </h2>
            <PostCards />
          </article>
        </div>
      </section>
    </>
  );
}
