import React from "react";
import "./App.css";
import "./fontLoader";
import IndexScreen from "./screens/indexScreen";
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from "./screens/contactUsScreen";
import OwnDesignScreen from "./screens/ownDesignScreen";
import Wallpapers from "./screens/wallpapers";
import Flooring from "./screens/flooring";
import Binds from "./screens/binds";
import Furnishing from "./screens/furnishing";
import ExpandedView from "./screens/expandedView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route path="/own" element={<OwnDesignScreen />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/binds" element={<Binds />} />
        <Route path="/furnishing" element={<Furnishing />} />
        <Route path="/product" element={<ExpandedView/> } />
        
        
      </Routes>
    </div>
  );
}

export default App;
