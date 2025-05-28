import { useSearchParams } from "react-router-dom"

function SortByDropDown(){
const [searchParams, setSearchParams] = useSearchParams()

function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const sortBy = formData.get("sort_by")
    const order = formData.get("order")

    const newParams = new URLSearchParams(searchParams)
    newParams.set("sort_by", sortBy)
    newParams.set("order", order)
    setSearchParams(newParams)
    }

    return (
    <form className= "sort-by" onSubmit={handleSubmit}>
      <label htmlFor="sort_by">Sort by:</label>
      <select name="sort_by" id="sort_by">
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="order">Order:</label>
      <select name="order" id="order">
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>

      <button className="apply-filter-button" type="submit">Apply filter</button>
    </form>
    )
}

export default SortByDropDown