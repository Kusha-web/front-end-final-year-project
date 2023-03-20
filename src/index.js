import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Program from "./Program";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Program />
    </BrowserRouter>
  </React.StrictMode>
);
