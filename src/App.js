import React from "react";
import "./App.css";
import "./fontLoader";
import IndexScreen from "./screens/indexScreen";
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from "./screens/contactUsScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
