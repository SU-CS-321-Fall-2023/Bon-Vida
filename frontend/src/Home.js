import React,{useState} from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
// currently adding functionality that will allow for search filtering 
function Home() {
  const[filteredElements,setFilteredElements]= useState([]);
  const elements = [
    "Injury 1",
    "Injury 2",
    "Injury 3",
    "Injury 4",
    "injury 5",
    "Injury 6",
  ];
  //possibly do an alert for it? or a modal 
  const openPopup = (element) =>
  {
    const popupText='Injury Instructions for injury';
    const popupWindow = window.open("","Popup", "width=600,height=400");

    popupWindow.document.write(`<html><head><title>${element}</title></head><body>${popupText}</body></html>`)
    popupWindow.document.close();
  };
  
  const handleSearch = (query) =>
  {
    const filteredResults = elements.filter((item)=>
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
  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch}/>
      <div className="grid">
        {elements.map((element, index) => (
          <button
            className="btn btn-lg btn-primary"
            type="button"
            key={index}
            style={{ height: "75px" }}
            onClick={()=> openPopup(element)}
            //onClick={() => loadIframeContent}
          >
            {element}
          </button>
        ))}
      </div>
    </>
  );
}

export default Home;
