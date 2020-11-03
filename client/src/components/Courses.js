import React, { Component } from "react";
import { Card, CardDeck, CardBody } from "reactstrap";
import Course from "./Course";

class Courses extends Component {
  render() {
    // const courses = {
    //   1: {
    //     1: ["ICS31", "ICS 45C", "MATH 2A"],
    //     2: ["ICS 32", "ICS 46", "MATH 2B"],
    //     3: ["ICS 33", "ICS 51"],
    //     4: ["Elective"],
    //   },
    //   2: {
    //     1: ["ICS 53", "ICS 53L"],
    //     2: ["INF 43", "ICS 6B"],
    //     3: ["ICS 6D", "STATS 67"],
    //     4: ["Elective"],
    //   },
    //   3: {
    //     1: ["ICS 6N", "CS 139W"],
    //     2: ["CS 161", "CS 111"],
    //     3: ["CS 112", "CS 113"],
    //     4: ["Elective"],
    //   },
    //   4: {
    //     1: ["CS 114", "CS 115", "CS 116"],
    //     2: ["CS 117", "CS 118", "CS 119"],
    //     3: ["CS 120", "CS 121"],
    //     4: ["Elective"],
    //   },
    // };

    const courses = {
      1: {
        1: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        2: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        3: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        4: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
      },
      2: {
        1: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        2: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        3: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        4: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
      },
      3: {
        1: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        2: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        3: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        4: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
      },
      4: {
        1: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        2: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        3: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
        4: [
          {
            code: "CS 113",
            name: "Computer Game Development",
            credits: 4,
            prerequisites:
              "CS 112 or CS 171 or INF 121 or ART 106B or ICS 163 or ICS 166",
          },
        ],
      },
    };

    const listCourses = (year, quarter) =>
      courses[year][quarter].map((course) => <Course course={course}></Course>);

    return (
      <div>
        <CardDeck
          style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}
        >
          <Card>
            <CardBody>
              <h1>Year 1</h1>
              <h4>Fall</h4>
              {listCourses(1, 1)}
              <h4>Winter</h4>
              {listCourses(1, 2)}
              <h4>Spring</h4>
              {listCourses(1, 3)}
              <h4>Summer</h4>
              {listCourses(1, 4)}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h1>Year 2</h1>
              <h4>Fall</h4>
              {listCourses(2, 1)}
              <h4>Winter</h4>
              {listCourses(2, 2)}
              <h4>Spring</h4>
              {listCourses(2, 3)}
              <h4>Summer</h4>
              {listCourses(2, 4)}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h1>Year 3</h1>
              <h4>Fall</h4>
              {listCourses(3, 1)}
              <h4>Winter</h4>
              {listCourses(3, 2)}
              <h4>Spring</h4>
              {listCourses(3, 3)}
              <h4>Summer</h4>
              {listCourses(3, 4)}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h1>Year 4</h1>
              <h4>Fall</h4>
              {listCourses(4, 1)}
              <h4>Winter</h4>
              {listCourses(4, 2)}
              <h4>Spring</h4>
              {listCourses(4, 3)}
              <h4>Summer</h4>
              {listCourses(4, 4)}
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Courses;
