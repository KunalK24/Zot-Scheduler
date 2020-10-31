import React, { Component } from "react";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Searchbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;
