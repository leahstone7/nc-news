import { useState} from "react"
import axios from "axios"

function PostComment({article_id, comment, setComments, commentAuthor}){
const [newComment, setNewComment] = useState("")
const [error, setError] = useState(false)
const [postingComment, setPostingComment] = useState(false)

function handleSubmit(e){
    e.preventDefault()
    setPostingComment(true)

    const postComment = {
        username: commentAuthor,
        body: newComment
    }

    axios.post(`https://nc-news-guvj.onrender.com/api/articles/${article_id}/comments`, postComment)
    .then((res) => {
    alert("Comment posted")
    setNewComment("")
    setComments((currentComments) => [res.data.comment, ...currentComments])
    })
    .catch((error) => {
    setError(true)
    alert("Unable to post comment, please try again")
    })
    .finally(() => {
    setPostingComment(false)
    })
}


return (
    <section className="post-comment">
    <form className="post-comment-form" onSubmit={handleSubmit}>
    <label htmlFor="author-box">Username: </label>
   <p>{commentAuthor}</p>
    <label htmlFor="comment-body-box">Post new comment: </label>
    <textarea id="comment-body-box" type="text" name="comment_box" onChange={(e) => setNewComment(e.target.value)}></textarea>
    <button type="submit">Post comment</button>
    </form>
    </section>
)
}

export default PostComment