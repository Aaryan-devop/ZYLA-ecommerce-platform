import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App.tsx";   // 👉 use your real App
import "./styles/index.css";       // 👉 include main styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

