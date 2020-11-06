import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "cs111", label: "CS 111" },
  { value: "cs112", label: "CS 112" },
  { value: "cs113", label: "CS 113" },
];

class SearchBar extends Component {
  state = {
    selectedOptions: [],
  };

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
    console.log(selectedOptions);
  };

  render() {
    return (
      <div>
        <Container>
          <Select
            className="select"
            components={animatedComponents}
            placeholder="Select courses..."
            isMulti
            options={options}
            onChange={this.handleChange}
          />
          {/* <Button color="primary" style={{ marginLeft: "1rem" }}>
            Add Courses
          </Button> */}
        </Container>
      </div>
    );
  }
}

export default SearchBar;
