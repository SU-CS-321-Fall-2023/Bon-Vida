import React from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import { useState } from "react";
// currently adding functionality that will allow for search filtering 
function Home() {
  const [searchInput, setSearchInput]=useState("");
  const elements = [
    "Injury 1",
    "Injury 2",
    "Injury 3",
    "Injury 4",
    "injury 5",
    "Injury 6",
  ];
  const filteredElements = elements.filter((element) => element.toLowerCase().includes(searchInput.toLowerCase()));
  return (
    <>
      <Navbar />
      <SearchBar
      value = {searchInput}
      onChange ={(e)=> setSearchInput(e.target.value)}
      />
      <div className="grid">
        {elements.map((element, index) => (
          <button
            className="btn btn-lg btn-primary"
            type="button"
            key={index}
            style={{ height: "75px" }}
          >
            {element}
          </button>
        ))}
      </div>
    </>
  );
}

export default Home;
