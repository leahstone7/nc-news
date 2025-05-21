import { useState, useEffect } from "react"
import axios from "axios"
import CommentCard from "./CommentCard"

function CommentList({article_id}){
const [comments, setComments] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

useEffect(() => {
    setLoading(true)
    axios.get(`https://nc-news-guvj.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => {
        console.log(res.data)
        setComments(res.data.comments)
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
   <section className="comment-list">
    {comments.map((comment) => {
        return (
            <CommentCard key={comment.comment_id}
            comment_id={comment.comment_id}
            commentAuthor={comment.author}
            commentBody={comment.body}
            commentCreatedAt={comment.created_at}
            commentVotes={comment.votes}
            article_id={comment.article_id}
            />
            
        )
    })}
   </section> 
)
}

export default CommentList