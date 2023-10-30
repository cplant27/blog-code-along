import React, { useEffect, useState } from 'react';
import { populateSelectFromArticlesField } from '../services/articleService';

export default function Nav({ articles, setArticle }) {
  const [articleTitles, setArticleTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      const titles = await populateSelectFromArticlesField();
      setArticleTitles(titles);
    };

    fetchTitles();
  }, [articles]);

  return (
    <nav>
      <select >
        <option id="tagSelect">-- Filter by Tags --</option>
        {articleTitles.map(title => <option key={title} value={title}>{title}</option>)}
      </select>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}