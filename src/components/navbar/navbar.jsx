// Navbar.jsx
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Import necessary components from react-bootstrap
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
        <img src="/logo192.png" width="40px" height="40px" alt="Logo" />{" "}
        NcllexGPT
      </Navbar.Brand>

      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item href="#products/tea">QUiz</NavDropdown.Item>
            <NavDropdown.Item href="#products/coffee">QBank</NavDropdown.Item>
            <NavDropdown.Item href="#products/chocolate">Jobs</NavDropdown.Item>
            <NavDropdown.Item href="#products/coffee">
              Resources
            </NavDropdown.Item>
            <NavDropdown.Item href="#products/chocolate">
              NCLEX info
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
