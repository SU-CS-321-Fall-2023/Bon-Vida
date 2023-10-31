import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import axios from "axios";
import { Link } from "react-router-dom";

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

  console.log(injuries);
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
                {expandedIndex === index && ( // Check if it's expanded
                  <div
                    id={`collapse${index}`}
                    class={`accordion-collapse collapse show`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body" id="spacing">
                      {element.Dos.map((dosItem, dosIndex) => (
                        <div key={dosIndex}>
                          {dosItem}
                          <br />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                {expandedIndex === index && ( // Check if it's expanded
                  <div
                    id={`collapse${index}`}
                    class={`accordion-collapse collapse show`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {element.Dos.map((dosItem, dosIndex) => (
                        <div key={dosIndex}>
                          {dosItem}
                          <br />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to={"/Chat"}>
        <button type="button" class="btn btn-primary btn-lg" id="chatButton">
          Chat with Abraam?
        </button>
      </Link>
    </>
  );
}

export default Home;
