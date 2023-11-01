import React, { useEffect, useState } from 'react';
import { populateSelectFromArticlesField } from '../services/articleService';

export default function Nav({ articles, setArticle, selectedTag, setSelectedTag}) {
  const [articleTags, setArticleTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await populateSelectFromArticlesField();
      setArticleTags(tags);
    };

    fetchTags();
  }, [articles]);

  const filteredArticles = selectedTag ? articles.filter(article => article.tags.includes(selectedTag)) : articles;

  return (
    <nav>
      <select 
        value={selectedTag || '-- Filter by Tags --'} 
        onChange={e => setSelectedTag(e.target.value === '-- Filter by Tags --' ? null : e.target.value)}
      >
        <option value="-- Filter by Tags --">-- Filter by Tags --</option>
        {articleTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
      </select>
      {!filteredArticles
        ? "No articles"
        : filteredArticles.map((a) => (
            <p className="articleChoice" key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}