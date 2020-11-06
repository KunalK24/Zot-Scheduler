import React, { Component } from "react";
import { Card, CardText, CardBody, Collapse } from "reactstrap";

class Course extends Component {
  state = {
    isOpen: false,
  };

  toggle = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    if (!this.state.isOpen) {
      e.target.style.background = "#D6EAF8";
    } else {
      e.target.style.background = "#EBF5FB";
    }
  };

  MouseOver = (e) => {
    if (!this.state.isOpen) {
      e.target.style.background = "#EBF5FB";
    }
  };

  MouseOut = (e) => {
    if (!this.state.isOpen) {
      e.target.style.background = "";
    }
  };

  render() {
    return (
      <div>
        <CardText
          onClick={this.toggle}
          onMouseOver={this.MouseOver}
          onMouseOut={this.MouseOut}
        >
          {this.props.course.code}
        </CardText>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              {this.props.course.name}
              <br />
              {this.props.course.credits} credits
              <br />
              Prerequisites: {this.props.course.prerequisites}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Course;
