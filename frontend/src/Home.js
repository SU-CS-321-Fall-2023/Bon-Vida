import React from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";

function Home() {
  const elements = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5",
    "Element 6",
  ];
  return (
    <>
      <Navbar />
      <SearchBar />
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
