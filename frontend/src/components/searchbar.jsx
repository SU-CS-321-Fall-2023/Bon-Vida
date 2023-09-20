import React,{useState} from "react";
import "../bootstrap.min.css";
export default function SearchBar({onSearch}){
    const[query,setQuery] = useState("");

    const handleinputChange = (event) =>
    {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    }
    const handleSubmit = (event)=>
    {
        event.preventDefault();
    }
    return(
        <form className="d-flex" id="search" onSubmit={handleSubmit}>
            <input className="form-control me-sm-2" type="search" placeholder="Search" value={query} onChange={handleinputChange}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>

    );
}