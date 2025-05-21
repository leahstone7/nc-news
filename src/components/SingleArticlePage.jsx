import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom" 
import CommentCard from "./CommentCard"
import CommentList from "./CommentList"

function SingleArticlePage(){
const {article_id} = useParams()
const [article, setArticle] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)


useEffect(() => {
    setLoading(true)
    axios.get(`https://nc-news-guvj.onrender.com/api/articles/${article_id}`)
    .then((res) => {
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

const {title, topic, author, image, body, votes, commentCount} = article

return (
    <section className="single-article"> 
    <h2 className="h2">{title}</h2>
    <p>Topic: {topic} By: {author}</p>
    <img src={article.article_img_url} alt='image of article'/>
    <p>{body}</p>
    <p>Votes: {votes}</p>
    <p>Comments: {commentCount}</p>
    <CommentList article_id={article_id}/>
    </section>
)
}

export default SingleArticlePage