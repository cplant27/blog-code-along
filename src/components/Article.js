export default function Article({ article, removeArticle, setEditing }) {

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`} {article.edited ? ('edited'):(null)}</p>
          <p className="body">{article.body}</p>
          <button onClick={() => removeArticle(article)}>Delete Article</button>
          <button onClick={() => setEditing(true)}>Edit Article</button>
        </section>
      )}
    </article>
  );
}
