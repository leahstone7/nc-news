import ArticleList from "./ArticleList"
import { useParams } from "react-router-dom"

function TopicsPages({articles}){
const {topic} = useParams()
const filteredArticlesByTopic = articles.filter((article) => 
article.topic === topic)


return (
    <section>
        <h2>Displaying articles about {topic}</h2>
        <ArticleList articles={filteredArticlesByTopic}/>
    </section>
)
}

export default TopicsPages