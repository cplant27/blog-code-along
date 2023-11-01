import "./Article.css"
import React from "react";

export default function Article({ article, removeArticle, setEditing, setSelectedTag }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="tags">
            {Array.isArray(article.tags)
              ? article.tags.map((tag, index) => (
                  <React.Fragment key={tag}>
                    <span onClick={() => setSelectedTag(tag)}>{`#${tag}`}</span>
                    {index < article.tags.length - 1 ? ' ' : ''}
                  </React.Fragment>
                ))
              : article.tags}
          </p>
          <p className="date">{`Posted: ${article.date}`} {article.edited ? ('edited') : (null)}</p>
          <p className="body">{article.body}</p>
          <button className ="editDelete" onClick={() => removeArticle(article)}>Delete Article</button>
          <button className ="editDelete" onClick={() => setEditing(true)}>Edit Article</button>
        </section>
      )}
    </article>
  );
}
