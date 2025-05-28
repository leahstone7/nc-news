import ArticleCard from "./ArticleCard"
import { Row, Col } from "react-bootstrap"

function ArticleList({articles}){

    return (
        <section className="article-list">
            <Row>
            {articles.map((article) => (
                <Col key={article.article_id} xs={12} sm={6} md={4} className="mb-4">
                 <ArticleCard key={article.article_id}
                 article_id={article.article_id}
                 title={article.title}
                 topic={article.topic}
                 author={article.author}
                 image={article.article_img_url}
                 body={article.body}
                 votes={article.votes}
                 commentCount={article.comment_count}
                 />   
            </Col>
            ))}
            </Row>
        </section>
    )
}

export default ArticleList