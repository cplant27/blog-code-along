// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig"
import formatDate from "./formatDate"
import { collection, query, getDocs, addDoc, orderBy, limit, Timestamp, doc, deleteDoc, updateDoc } from "firebase/firestore"



export async function createArticle({ title, body }) {
  const data = { title, body, date: formatDate(Timestamp.now()) }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export async function updateArticle({ article, newTitle, newBody }) {
  const data = { title: newTitle, body: newBody, edited: true, date: article.date };
  const id = article.id
  const docRef = doc(db, "articles", id);
  await updateDoc(docRef, data);
  return { id, ...data };
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export async function deleteArticle(article) {
  // Get a reference to the document
  const articleRef = doc(db, "articles", article.id);
  
  // Delete the document
  await deleteDoc(articleRef);
}


export async function populateSelectFromArticlesField() {
  let articleTitles = [];
  const articlesCollection = collection(db, "articles");
  const articleSnapshot = await getDocs(articlesCollection);
  
  articleSnapshot.forEach(doc => {
      const title = doc.data().title;
      if(title) {
          articleTitles.push(title);
      }
  });

  return articleTitles;
}
