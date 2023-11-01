import React from "react";
import "./App.css";
import "./fontLoader";
import IndexScreen from "./screens/indexScreen";
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from "./screens/contactUsScreen";
import OwnDesignScreen from "./screens/ownDesignScreen";
import Browse from "./screens/ browse";
import ExpandedView from "./screens/expandedView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route path="/own" element={<OwnDesignScreen />} />\
        <Route path="/:type" element={<Browse />} />
        <Route path="/:type/product/:productId" element={<ExpandedView />} />
      </Routes>
    </div>
  );
}

export default App;
