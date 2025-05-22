import { useState, useEffect } from "react"
import axios from "axios"
import CommentCard from "./CommentCard"

function CommentList({article_id}){
const [comments, setComments] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const user = "cooljmessy"

useEffect(() => {
    setLoading(true)
    axios.get(`https://nc-news-guvj.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => {
        setComments(res.data.comments)
    })
    .catch((err) => {
        setError(true)
    })
    .finally(() => {
        setLoading(false)
    })
}, [])

function handleDelete(comment_id){
    setLoading(true)
    axios.delete(`https://nc-news-guvj.onrender.com/api/comments/${comment_id}`)
    .then(() => {   
    alert("Comment deleted")
    setComments(current => current.filter(comment => comment.comment_id !== comment_id))

})
    .catch((error) => {
    alert("Unable to delete comment, please try again")
    setError(true)
})
    .finally(() => {
    setLoading(false)
})

}
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
            user={user}
            handleDelete={handleDelete}
            />
            
        )
    })}
   </section> 
)
}

export default CommentList