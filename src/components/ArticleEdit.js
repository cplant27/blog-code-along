import { useState } from "react";

export default function ArticleEntry({ article, goBack, editArticle }) {
  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);
  const [error, setError] = useState(null);

  function makeEdits(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      editArticle({ 
        article: article, 
        newTitle: title, 
        newBody: body 
      });
    }
  }

  return (
    <div>
        <form onSubmit={makeEdits}>
        {error && <p className="error">{error}</p>}
        Edited Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Edited Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div id="buttonSpace">
          <button onClick={goBack}>Back</button>
          <button type="sumbit">Save</button>         
        </div>
      </form>
    </div>
  );
}