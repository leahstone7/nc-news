import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes} from "react-router-dom"
import SingleArticlePage from './components/SingleArticlePage'
import TopicsDropdown from './components/TopicsDropdown'
import TopicsPages from './components/TopicsPages'

function App() {
  const [articles, setArticles] = useState([])

  return (
    <>
    <Header />
    <TopicsDropdown/>
    <Routes>
      <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>}/>
      <Route path="/articles/:article_id" element={<SingleArticlePage />}/>
      <Route path="/topics/:topic" element={<TopicsPages articles={articles}/>}></Route>
    </Routes>
    </>
  )
}

export default App
