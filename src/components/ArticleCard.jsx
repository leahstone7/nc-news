import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function ArticleCard({ article_id, title, topic, author, body, votes, commentCount }){
return (
    <Link to={`/articles/${article_id}`}>
    <Card className="article-card"> 
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>Topic: {topic} By: {author}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Card.Text>Votes: {votes} Comments: {commentCount}</Card.Text>
    </Card.Body>
    </Card>
    </Link>
)
}

export default ArticleCard