import Card from 'react-bootstrap/Card'

function CommentCard({commentAuthor, commentBody, commentCreatedAt, commentVotes, article_id}){

return (
    <Card className='comment-card'>
    <Card.Text>{commentAuthor}: {commentBody}</Card.Text>
    <Card.Text>Posted: {commentCreatedAt}</Card.Text>
    <Card.Text>Votes: {commentVotes}</Card.Text>
    </Card>
)
}

export default CommentCard