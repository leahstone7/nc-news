import { useState, useEffect} from 'react'
import axios from "axios"
import ArticleList from './ArticleList'
import SortByDropDown from './SortByDropdown'
import { useSearchParams } from 'react-router-dom'


function Home({articles, setArticles}){
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [searchParams] = useSearchParams()

    useEffect(() => {
    setLoading(true)
    setError(false)
    
    const sort_by = searchParams.get("sort_by") || "created_at"
    const order = searchParams.get("order") || "desc"


    axios.get("https://nc-news-guvj.onrender.com/api/articles", {params: {sort_by: sort_by, order: order}})
    .then((res) => {
        setArticles(res.data.articles)
    })
    .catch((err) => {
        setError(true)
    })
    .finally(() => {
        setLoading(false)
    })
    }, [searchParams, setArticles])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong...</p>

    return (
        <>
        <SortByDropDown />
        <ArticleList articles={articles} />
        </>
    )
}

export default Home