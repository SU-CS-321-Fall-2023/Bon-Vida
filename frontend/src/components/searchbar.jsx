import React from "react";
import "../bootstrap.min.css";

export default function SearchBar(){
    return(
        <form className="d-flex" id="search">
            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>

    );
}