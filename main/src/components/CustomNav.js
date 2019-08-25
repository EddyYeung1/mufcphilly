import React from "react";
import { Navbar, Container, Nav, Col } from "react-bootstrap";

function CustomNav() {
  return (
    <Navbar style={{ backgroundColor: "black", height: "150px" }}>
      <Container style={{ marginLeft: 0, marginRight: 0, maxWidth: "100%" }}>
        <Col>
          <Navbar.Brand href="#home">
            <img
              src={require("../img/MUFCPHILLY.png")}
              width="125"
              height="125"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Col>
        <Col>
          <Navbar.Brand href="#home" style={{ marginBottom: -10 }}>
            <img
              src={require("../img/phillySkylineRed.png")}
              width="400"
              height="140"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav style={{ fontSize: 30, float: "right" }}>
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#features">
              Matches
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#pricing">
              Pub
            </Nav.Link>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
