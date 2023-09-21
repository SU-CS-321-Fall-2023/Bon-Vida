import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import axios from "axios";

// currently adding functionality that will allow for search filtering
function Home() {
  const [injuries, setInjuries] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    axios
      .get("/injuries")
      .then((res) => setInjuries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [filteredElements, setFilteredElements] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = injuries.filter((item) =>
      item.injury.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredElements(filteredResults);
    setSearch(true);
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      {search ? (
        <div className="grid">
          {filteredElements.map((element, index) => (
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`collapse${index}`}
                    onClick={() => {
                      if (expandedIndex === index) {
                        setExpandedIndex(null);
                      } else {
                        setExpandedIndex(index);
                      }
                    }}
                  >
                    {element.injury}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  class={`accordion-collapse collapse ${
                    expandedIndex === index ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{element.Dos}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid">
          {injuries.map((element, index) => (
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`collapse${index}`}
                    onClick={() => {
                      if (expandedIndex === index) {
                        setExpandedIndex(null);
                      } else {
                        setExpandedIndex(index);
                      }
                    }}
                  >
                    {element.injury}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  class={`accordion-collapse collapse ${
                    expandedIndex === index ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{element.Dos}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
