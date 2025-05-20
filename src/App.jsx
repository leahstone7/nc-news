import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes} from "react-router-dom"
import SingleArticlePage from './components/SingleArticlePage'

function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/articles/:article_id" element={<SingleArticlePage />}/>
    </Routes>
    </>
  )
}

export default App
