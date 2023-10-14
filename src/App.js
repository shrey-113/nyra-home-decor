import React from "react";
import "./App.css";
import "./fontLoader";
import IndexScreen from "./screens/indexScreen";
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from "./screens/contactUsScreen";
import OwnDesignScreen from "./screens/ownDesignScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route path="/own" element={<OwnDesignScreen />} />
      </Routes>
    </div>
  );
}

export default App;
