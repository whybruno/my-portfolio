import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';

const NavBar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto gap-sm-3 my-3"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              HOME
            </NavLink>
            <NavLink to='knowledge' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                KNOWLEDGE
            </NavLink>
            <NavLink to='projects' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                PROJECTS
            </NavLink>
            <NavLink to='contact' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;