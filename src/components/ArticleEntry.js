import { useState } from "react";

export default function ArticleEntry({ article, addArticle, editing, goBack }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      const tagSet = Array.from(new Set(tags)); // Removing duplicates
      addArticle({ title, body, tags: tagSet});
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      submit(e);
    }
  }

  function handleTagChange(e) {
    const tagInput = e.target.value;
    setCurrentTag(tagInput);
    const newTags = tagInput.split(',').map(tag => tag.trim()); // Splitting by comma and trimming spaces
    setTags(newTags);
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} onKeyPress={handleKeyPress}/>
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyPress={handleKeyPress}
        ></textarea>
        Tags
        <input 
          value={currentTag} 
          onChange={handleTagChange} 
          onKeyPress={handleKeyPress}
          placeholder="Separate tags by commas"
        />
        <div id="buttonSpace">
          <button onClick={goBack}>Back</button>
          <button type="submit">Create</button>         
        </div>
      </form>
    </div>
  );
}