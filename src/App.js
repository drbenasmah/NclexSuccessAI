// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar"; // Update the path based on your project structure

const App = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(message);
  return (
    <div>
      {/* <Navbar /> Navbar is outside the app div */}
      <div className="app">
        <section className="side-bar">
          <button>+ New chat </button>
          <ul className="history">
            <li>Blugh</li>
          </ul>
          <nav>
            <p>Made by Benasco</p>
          </nav>
        </section>
        <section className="main">
          <h1>NclexGPT</h1>
          <ul className="feed"></ul>
          <div className="bottom-section">
            <div className="input-container">
              <input value={value} onChange={(e) => setValue(e.target.value)} />

              <div id="submit" onClick={getMessages}>
                ➢
              </div>
            </div>
            <p className="info">
              ⚠️ Disclaimer: NclexGPT's responses are for educational purposes
              only. Not intended as medical advice. Consult healthcare
              professionals for accurate guidance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
