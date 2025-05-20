import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom" 

function SingleArticlePage(){
const {article_id} = useParams()
const [article, setArticle] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)


useEffect(() => {
    setLoading(true)
    axios.get(`https://nc-news-guvj.onrender.com/api/articles/${article_id}`)
    .then((res) => {
        console.log(res.data, "<<<")
        setArticle(res.data.article)
    })
    .catch((err) => {
        setError(true)
    })
    .finally(() => {
        setLoading(false)
    })
}, [article_id])

if(loading) return <p>Loading...</p>
if(error) return <p>Something went wrong...</p>

const {title, topic, author, body, votes, commentCount} = article

return (
    <section className="single-article"> 
    <h2 className="h2">{title}</h2>
    <p>Topic: {topic} By: {author}</p>
    <p>{body}</p>
    <p>Votes: {votes}</p>
    <p>Comments: {commentCount}</p>
    </section>
)
}

export default SingleArticlePage