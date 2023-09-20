import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import axios from "axios";
//import Modal from "./components/modal";
// currently adding functionality that will allow for search filtering
function Home() {
  const [injuries, setInjuries] = useState([]);
  // const [isComponentVisible, setIsComponentVisible] = useState(false);

  // Function to show/hide the component
  // const toggleComponent = () => {
  //   setIsComponentVisible(!isComponentVisible);
  // };

  useEffect(() => {
    axios
      .get("/injuries")
      .then((res) => setInjuries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [filteredElements, setFilteredElements] = useState([]);

  //possibly do an alert for it? or a modal
  const openPopup = (element) => {
    const popupWindow = window.open("", "Popup", "width=600,height=400");

    popupWindow.document.write(
      `<html><head><title>${element.injury}</title></head><body><h3>${element.Dos}</h3></body></html>`
    );
    popupWindow.document.close();
  };

  const handleSearch = (query) => {
    const filteredResults = injuries.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredElements(filteredResults);
  };
  /*const [iframeContent, setIframecontent] = useState(null);
  const loadIframeContent = (element)=>
  {
    const customText = 'Instructions for injury...'
    setIframecontent(textcontent);
  };
*/
  console.log(injuries);
  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div className="grid">
        {injuries.map((injury, index) => (
          <button
            className="btn btn-lg btn-primary"
            type="button"
            key={index}
            style={{ height: "75px" }}
            // onClick={toggleComponent}
            onClick={() => openPopup(injury)}
            //onClick={() => loadIframeContent}
          >
            {injury.injury}
          </button>
        ))}
        {/* {isComponentVisible && alert("test")} */}
      </div>
    </>
  );
}

export default Home;
