import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="topnav">
    <NavLink active ClassName="active" exact to="/" >
      Task One
    </NavLink>
    <NavLink active ClassName="active" to="/task-two" >
      Task Two
    </NavLink>
  </nav>
);

export default Nav;
