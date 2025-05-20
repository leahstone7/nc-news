import Card from 'react-bootstrap/Card'

function ArticleCard({ title, topic, author, body, votes, commentCount }){
return (
    <Card className="article-card"> 
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>Topic: {topic} By: {author}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Card.Text>Votes: {votes} Comments: {commentCount}</Card.Text>
    </Card.Body>
    </Card>
)
}

export default ArticleCard