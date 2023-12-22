import React from "react";
import Component from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showInput: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState((state) => ({ showInput: !state.showInput }));
  }

  render() {
    return (
      <Navbar
        bg="black"
        variant="dark"
        expand="md"
        className="py-2 px-4"
        
      >
        <Navbar.Brand href="#">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-md-row align-items-center align-items-center">
            <Form className="form-search d-flex justify-content-end">
              <Collapse in={this.state.showInput} dimension="width">
                <div>
                  <FormControl
                    id="searchInput"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-2 bg-black border-light text-white"
                  />
                </div>
              </Collapse>
              <button
                className="btn text-light"
                type="button"
                onClick={this.handleButtonClick}
              >
                <i className="bi bi-search"></i>
              </button>
            </Form>
            <button className="btn text-light d-block" type="submit">
              KIDS
            </button>
            <button className="btn text-light" type="submit">
              <i className="bi bi-bell-fill" />
            </button>
            <Nav>
              <NavDropdown
                title={
                  <img
                    src="https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
                    alt="avatar"
                    height="30"
                  />
                }
              >
                <NavDropdown.Item href="#">Account</NavDropdown.Item>
                <NavDropdown.Item href="#">Profile Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
