import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./component/pages/AboutUs";
import { Home } from "./component/pages/Home";
import { Cart } from "./component/pages/Cart";
import { LayoutBuilder } from "./component/pages/LayoutBuilder";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBuilder component={<Home />} />} />
        <Route
          path="/about-us"
          element={<LayoutBuilder component={<AboutUs />} />}
        />
        <Route path="/cart" element={<LayoutBuilder component={<Cart />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
