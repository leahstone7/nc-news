import Card from 'react-bootstrap/Card'
import dayjs from 'dayjs'

function CommentCard({commentAuthor, commentBody, commentCreatedAt, commentVotes, article_id, user, handleDelete, comment_id}){
const newDate = dayjs(commentCreatedAt).format('MMM D, YYYY h:mm A')



return (
    <Card className='comment-card'>
    <Card.Text>{commentAuthor}: {commentBody}</Card.Text>
    <Card.Text>Posted: {newDate}</Card.Text>
    <Card.Text>Votes: {commentVotes}</Card.Text>
    {commentAuthor === user && (
        <div className='delete-comment-container'>
            <button className="delete-comment-button" onClick={() => handleDelete(comment_id)}>Delete comment</button>
        </div>
    )}
    </Card>
)
}

export default CommentCard