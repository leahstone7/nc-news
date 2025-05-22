import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom" 
import CommentList from "./CommentList"
import VoteButtons from "./VoteButtons"
import PostComment from "./PostComment"

function SingleArticlePage({newComment, user}){
const {article_id} = useParams()
const [article, setArticle] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [updatedVotes, setUpdatedVotes] = useState(null)

useEffect(() => {
    setLoading(true)
    axios.get(`https://nc-news-guvj.onrender.com/api/articles/${article_id}`)
    .then((res) => {
        setArticle(res.data.article)
        setUpdatedVotes(res.data.article.votes)
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
    <img src={article.article_img_url} alt='image of article'/>
    <p>{body}</p>
    <p>Votes: {updatedVotes}</p>
    <VoteButtons article_id={article_id} votes={updatedVotes} setVotes={setUpdatedVotes}/>
    <p>Comments: {commentCount}</p>
    <PostComment article_id={article_id} commentAuthor="cooljmessy"/>
    <CommentList article_id={article_id} user={"cooljmessy"}/>
    </section >

)
}

export default SingleArticlePage