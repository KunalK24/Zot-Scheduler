import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

class SearchBar extends Component {
  render() {
    const options = [
      { value: "cs111", label: "CS 111" },
      { value: "cs112", label: "CS 112" },
      { value: "cs113", label: "CS 113" },
    ];

    return (
      <div>
        <Container className="searchbar">
          <Select
            className="select"
            components={animatedComponents}
            placeholder="Select courses..."
            isMulti
            options={options}
          />
          <button color="dark" className="add-button">
            Add Courses
          </button>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
