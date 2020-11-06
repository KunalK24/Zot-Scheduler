import React from "react";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Courses from "./components/Courses";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Courses />
    </div>
  );
}

export default App;
