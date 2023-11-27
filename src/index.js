import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./index.css";
import App from "./App";
import CustomNavbar from "./components/navbar/navbar"; // Import your CustomNavbar component

ReactDOM.render(
  <React.StrictMode>
    <CustomNavbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
