import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // ✅ HashRouter import
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);