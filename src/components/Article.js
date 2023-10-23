export default function Article({ article, removeArticle, startEdit}) {
  let timestamp = "";

  if (article){
    const datePosted = new Date(article.date.seconds*1000);

    const month = String(datePosted.getMonth() + 1).padStart(2, '0');
    const day = String(datePosted.getDate()).padStart(2, '0');
    const year = datePosted.getFullYear();
    const shortDate = `${month}/${day}/${year} `;

    const hours = datePosted.getHours();
    const minutes = String(datePosted.getMinutes()).padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes} ${amOrPm}`;

    timestamp = shortDate + " " + time
  }

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${timestamp}`} {article.edited ? ('edited'):(null)}</p>
          <p className="body">{article.body}</p>
          <button onClick={() => removeArticle(article)}>Delete Article</button>
          <button onClick={() => startEdit(article)}>Edit Article</button>
        </section>
      )}
    </article>
  );
}
