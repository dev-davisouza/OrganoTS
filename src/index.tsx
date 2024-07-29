import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!); // The syntax '!' ensure that i'll always return an HTMLElement
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
