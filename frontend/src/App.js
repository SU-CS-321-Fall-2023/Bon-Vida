import "./App.css";
import "./bootstrap.min.css";
import Home from "./Home";
import Contact from "./contactUs";
import About from "./about";
import Chat from "./chat";
import CPR from "./cpr";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Disclaimer = ({ onAcknowledge }) => {
  return (
    <div>
      <p id="disclaimer">
        PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING THIS APP. This app is
        designed to provide general guidance on basic life support and first aid
        procedures. While we strive to offer accurate and up-to-date
        information, there are inherent risks and variables in any medical or
        emergency situation. As such, the recommendations and guidance provided
        within this app should not replace professional medical advice,
        diagnosis, or treatment. Users should always consult with appropriate
        medical professionals in emergencies and for specific health-related
        guidance. By using this app, you understand and agree that: The guidance
        provided is for informational purposes only and does not constitute
        professional medical advice. You assume all risks associated with the
        use of the information provided within this app. We, along with our
        affiliates, partners, and developers, are not responsible for any
        direct, indirect, incidental, consequential, special, or exemplary
        damages, including but not limited to, damages for loss of profits,
        goodwill, use, data, or other intangible losses, resulting from the use
        or inability to use the information provided within this app. You are
        solely responsible for any actions or decisions you make based on the
        information provided within this app. IN NO EVENT SHALL WE BE LIABLE FOR
        ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
        DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS,
        GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
        CONNECTION WITH THE USE OR PERFORMANCE OF THIS APP. We strongly
        recommend attending certified first aid and basic life support training
        to better equip yourself for emergencies. By continuing to use this app,
        you acknowledge that you have read, understood, and agree to this
        disclaimer. You should have a legal professional review this disclaimer
        to ensure it is appropriate and comprehensive for your specific
        jurisdiction and situation.
      </p>
      <div class="d-grid gap-2">
        <button
          class="btn btn-lg btn-primary"
          type="button"
          onClick={onAcknowledge}
          style={{ maxWidth: "fit-content", marginLeft: "45%" }}
        >
          I acknowledge
        </button>
      </div>
    </div>
  );
};

function App() {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleAcknowledge = () => {
    setAcknowledged(true);
    localStorage.setItem("disclaimerAcknowledged", "true");
  };

  useEffect(() => {
    const disclaimerAcknowledged = localStorage.getItem(
      "disclaimerAcknowledged"
    );
    if (disclaimerAcknowledged === "true") {
      setAcknowledged(true);
    }
  }, []);
  console.log("Test");
  return (
    <div className="App">
      {!acknowledged ? (
        <Disclaimer onAcknowledge={handleAcknowledge} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cpr" element={<CPR />} />
            <Route path="/Chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
