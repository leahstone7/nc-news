import { useState, useEffect} from 'react'
import axios from "axios"
import ArticleList from './ArticleList'

function Home(){
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

    useEffect(() => {
    setLoading(true)
    axios.get("https://nc-news-guvj.onrender.com/api/articles")
    .then((res) => {
        setArticles(res.data.articles)
    })
    .catch((err) => {
        setError(true)
    })
    .finally(() => {
        setLoading(false)
    })
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong...</p>

    return (
        <ArticleList articles={articles} />
    )
}

export default Home