import React from "react";
import Navbar from "./components/navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Team</h1>
        <h3>Abraam Youssef (Team Lead)</h3>
        <p><a href="mailto:ayoussef@stetson.edu">Email</a></p>
        <p><a href="https://www.linkedin.com/in/abraam-youssef-27a621191/">LinkedIn</a></p>
        <h3>Vakul Nath (Backend)</h3>
        <p><a href="mailto:vnath@stetson.edu">Email</a></p>
        <p><a href="https://www.linkedin.com/in/vakul-nath/">LinkedIn</a></p>
        <h3>Chris Jasinski (Frontend)</h3>
        <p><a href="cjasinski@stetson.edu">Email</a></p>
        <p><a href="https://www.linkedin.com/in/cjasinski2/">LinkedIn</a></p>
        <h3>Justin Snider Curtis (Frontend)</h3>
        <p><a href="mailto:jsnidercurtis@stetson.edu">Email</a></p>
        <p><a href="https://www.linkedin.com/in/justin-snider-curtis/">LinkedIn</a></p>
      </div>
    </>
  );
}

export default Contact;
