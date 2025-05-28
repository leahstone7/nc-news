import { useState} from "react"
import axios from "axios"

function PostComment({article_id, setComments, commentAuthor}){
const [newComment, setNewComment] = useState("")
const [error, setError] = useState(false)
const [postingComment, setPostingComment] = useState(false)
const [successMsg, setSuccessMsg] = useState("")

function handleSubmit(e){
    e.preventDefault()
    setPostingComment(true)
    setError(false)
    setSuccessMsg("")

    const postComment = {
        username: commentAuthor,
        body: newComment
    }

    axios.post(`https://nc-news-guvj.onrender.com/api/articles/${article_id}/comments`, postComment)
    .then((res) => {
    const comment = res.data
    if(comment && comment.comment_id){
        setComments((currentComments) => [comment, ...currentComments])
        setNewComment("")
        setSuccessMsg("Comment posted")
    }
    })
    .catch((error) => {
    setError(true)
    setSuccessMsg("")
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
    <button type="submit" disabled={postingComment}>{postingComment ? "Posting comment ..." : "Post comment"} </button>
    </form>
    {successMsg && <p className="success-message">{successMsg}</p>}
      {error && <p className="error-message">Unable to post comment. Try again.</p>}
    </section>
)
}

export default PostComment