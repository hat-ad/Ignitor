import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./AppComponents/NavBar/index";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
