import React from "react";
import Navbar from "./components/navbar";

const headerStyle = {
  padding: "10px 40px", // Adjust the value to your desired padding size for headers
};

const linkStyle = {
  padding: "5px 70px", // Padding for top/bottom (50px) and left/right (20px)
};

function Contact() {
  return (
    <>
      <Navbar />
      <div>
      <h1 style={{ padding: "1px 25px" }}>Our Team</h1>
        
        <div style={headerStyle}>
          <h3>Abraam Youssef (Team Lead)</h3>
        </div>
        <div style={linkStyle}>
          <p><a href="mailto:ayoussef@stetson.edu">Email</a></p>
          <p><a href="https://www.linkedin.com/in/abraam-youssef-27a621191/">LinkedIn</a></p>
        </div>
        
        <div style={headerStyle}>
          <h3>Vakul Nath (Backend)</h3>
        </div>
        <div style={linkStyle}>
          <p><a href="mailto:vnath@stetson.edu">Email</a></p>
          <p><a href="https://www.linkedin.com/in/vakul-nath/">LinkedIn</a></p>
        </div>

        <div style={headerStyle}>
          <h3>Chris Jasinski (Frontend)</h3>
        </div>
        <div style={linkStyle}>
          <p><a href="mailto:cjasinski@stetson.edu">Email</a></p>
          <p><a href="https://www.linkedin.com/in/cjasinski2/">LinkedIn</a></p>
        </div>

        <div style={headerStyle}>
          <h3>Justin Snider Curtis (Frontend)</h3>
        </div>
        <div style={linkStyle}>
          <p><a href="mailto:jsnidercurtis@stetson.edu">Email</a></p>
          <p><a href="https://www.linkedin.com/in/justin-snider-curtis/">LinkedIn</a></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
