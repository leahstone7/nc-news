import ArticleCard from "./ArticleCard"

function ArticleList({articles}){


    return (
        <section className="article-list">
            {articles.map((article) => {
                return (
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
                )
            })}
        </section>
    )
}

export default ArticleList