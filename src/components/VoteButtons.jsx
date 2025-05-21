import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button"

function Votes({votes, setVotes, article_id}){
const [error, setError] = useState(false)
const [voted, setVoted] = useState(false)

function handleVote(num){
if(!voted){
    axios.patch(`https://nc-news-guvj.onrender.com/api/articles/${article_id}`, {inc_votes: num})
    .then(() => {
    setVotes(currentVotes => currentVotes + num)
    setVoted(true)
    })
    .catch((error) => {
    setError(true)
    })
}
}

return (
    <section>
        <Button className="upvote-button" onClick={() => handleVote(1)}>Upvote Article</Button>
        <Button className="downvote-button" onClick={() => handleVote(-1)}>Downvote Article</Button>
    </section>
)
}

export default Votes
