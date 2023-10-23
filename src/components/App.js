import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import ArticleEdit from "./ArticleEdit"
import { SignIn, SignOut, useAuthentication } from "../services/authService"
import { fetchArticles, createArticle, deleteArticle, updateArticle } from "../services/articleService"
import "./App.css"
import logo from "./twitter_logo.jpg"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [editing, setEditing] = useState(false)
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  function editArticle({ article, newTitle, newBody }) {
    updateArticle({ article, newTitle, newBody }).then((article) => {
      console.log(article)
      setArticle(article)
      fetchArticles().then(setArticles)
      setEditing(false)
    })
  }

  function goBack() {
    editing ? setArticle(article) : setArticle(null)
    setWriting(false)
    setEditing(false)
  }

  async function removeArticle(article) {
    await deleteArticle(article);
    const updatedArticles = await fetchArticles();
    setArticles(updatedArticles);
    setArticle(null);
  }

  async function startEdit(article) {
    setEditing(true)
    article.edited = true
  }

  return (
    <div className="App">
      <header>
        <span> Twitter 2 </span>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry article={article} addArticle={addArticle} editing={editing} goBack={goBack}/>
      ) : editing ? (
        <ArticleEdit article={article} goBack={goBack} editArticle={editArticle} />
      ) : (
        <Article article={article} removeArticle={removeArticle} startEdit={startEdit} />
      )}
    </div>
  )
}