import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mx-auto gap-sm-3 mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='knowledge' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                KNOWLEDGE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='projects' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                PROJECTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='contact' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;