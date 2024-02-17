import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='projects' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;