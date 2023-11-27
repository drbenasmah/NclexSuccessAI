// App.js
import { useState, useEffect } from "react";
// import Navbar from "./components/navbar"; // Update the path based on your project structure

const App = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const [clearInput, setClearInput] = useState(false);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitles) => {
    setCurrentTitle(uniqueTitles);
    setMessage(null);
    setValue("");
  };

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
      // setValue("");
      setClearInput(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: (
            <img
              src={process.env.PUBLIC_URL + "/user-images.jpeg"}
              alt="Ncllex Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          ),
          content: value,
        },
        {
          title: currentTitle,
          role: (
            <img
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="Ncllex Logo"
              style={{ width: "50px", height: "50px" }}
            />
          ),
          content: message.content,
        },
      ]);
      if (clearInput) {
        setValue(""); // clear the input value
        setClearInput(false); // reset the state
      }
    }
  }, [message, currentTitle]);
  // console.log(previousChats);
  const currentChat = previousChats.filter(
    (previousChats) => previousChats.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChats) => previousChats.title))
  );
  // console.log(uniqueTitles);

  return (
    <div>
      {/* <Navbar /> Navbar is outside the app div */}
      <div className="app">
        <section className="side-bar">
          <button onClick={createNewChat}>+ New chat </button>
          <ul className="history">
            {uniqueTitles?.map((uniqueTitles, index) => (
              <li key={index} onClick={() => handleClick(uniqueTitles)}>
                {uniqueTitles}
              </li>
            ))}
          </ul>
          <nav>
            <p>Made by Benasco</p>
          </nav>
        </section>
        <section className="main">
          {!currentTitle && <h1>NcllexGPT</h1>}
          <ul className="feed">
            {currentChat?.map((chatMessage, index) => (
              <li key={index}>
                <p className="role">{chatMessage.role}</p>
                <p className="message">{chatMessage.content}</p>
              </li>
            ))}
          </ul>
          <div className="bottom-section">
            <div className="input-container">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Message NcllexGPT"
              />

              <div id="submit" onClick={getMessages}>
                ➢
              </div>
            </div>
            <p className="info">
              ⚠️ Disclaimer: NclexGPT's responses are for educational purposes
              only. Not intended as medical advice.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
