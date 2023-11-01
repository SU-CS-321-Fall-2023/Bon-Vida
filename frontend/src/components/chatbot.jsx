import React from "react";
import { useState } from "react";
import axios from "axios";


export default function Chatbot(){
    const [showAnswer, setShowAnswer] = useState(false)
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState();

    const handleEntry = (event)=>{
        setShowAnswer(false);
        if (event.key === 'Enter') {
            axios
                .get(`/answer?data=${question}`)
                .then(response => {
                // Handle the response from the Flask back end
                setAnswer(response.data)
                })
                 .catch(error => {
                    // Handle any errors
                    console.error(error);
                });
            
            setShowAnswer(true);
            
          }

    }
    console.log(answer)

    const handleInputChange = (event) => {
        setQuestion(event.target.value);
      };

    return(
    <>
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Question?" id="chatPrompt" onKeyDown={handleEntry} onChange={handleInputChange}/>
        </div>
        {showAnswer ? 
        <div id="container">
        <div id="Answer">{answer}</div>
        </div> :     
        <div></div>}
    </>
    )
}