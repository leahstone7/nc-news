import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function TopicsDropdown({}){
const [topics, setTopics] = useState([])
const navigate = useNavigate()
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

function handleChange(e){
const selectedTopic = e.target.value
if(selectedTopic){
    navigate(`/topics/${selectedTopic}`)
}
}

useEffect(() => {
    setLoading(true)
    axios.get("https://nc-news-guvj.onrender.com/api/topics")
    .then((res) => {
    setTopics(res.data.topics)
    })
    .catch((error) => {
    setError(true)
    console.log(error)
    })
    .finally(() =>{
    setLoading(false)
    })
}, [])

if(loading) return <p>Loading...</p>
if(error) return <p>Something went wrong...</p>

return (
    <div>
        <select onChange={handleChange}>
        <option >Select a topic...</option>
        <option>coding</option>
        <option>football</option>
        <option>cooking</option>
        </select>
    </div>
)

}

export default TopicsDropdown