import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function ArticleCard({ article_id, title, topic, author, image, body, votes, commentCount }){
return (
    <Link to={`/articles/${article_id}`}>
    <Card className="article-card"> 
    <Card.Body>
        <Card.Title className="article-title">{title}</Card.Title>
        <Card.Subtitle>Topic: {topic} By: {author}</Card.Subtitle>
        <Card.Img className="article-img" variant='top' src={image} alt='image of article'/>
        <Card.Text className="article-body-text">{body}</Card.Text>
        <Card.Text className="article-footer">Votes: {votes} Comments: {commentCount}</Card.Text>
    </Card.Body>
    </Card>
    </Link>
)
}

export default ArticleCard