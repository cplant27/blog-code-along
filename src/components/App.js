import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import ArticleEdit from "./ArticleEdit"
import { SignIn, SignOut, useAuthentication } from "../services/authService"
import { fetchArticles, createArticle, deleteArticle, updateArticle } from "../services/articleService"
import "./App.css"
import logo from "./new_logo.jpg"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [selectedTag, setSelectedTag] = useState(null);
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  function addArticle({ title, body, tags }) {
    createArticle({ title, body, tags }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  function editArticle({ article, newTitle, newBody, newTags }) {
    updateArticle({ article, newTitle, newBody, newTags }).then((article) => {
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

  return (
    <div className="App">
      <header>
        <div className="twitter2">
          <img className="logo" src={logo} alt="logo" />
          <span className="title"> Twitter 2 </span>
        </div>
        {user && <button className="newArticle" onClick={() => setWriting(true)}> New Article </button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? "" : <Nav articles={articles} setArticle={setArticle} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} editing={editing} goBack={goBack}/>
      ) : editing ? (
        <ArticleEdit article={article} goBack={goBack} editArticle={editArticle}/>
      ) : (
        <Article article={article} removeArticle={removeArticle} setEditing={setEditing} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
      )}
    </div>
  )
}