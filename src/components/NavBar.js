import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      activeStyle={{
        color: 'green'
      }}
      >Home</NavLink>
      <NavLink
      to="/movies"
      exact
      activeStyle={{
        color: 'green'
      }}
      >Movies</NavLink>
      <NavLink
      to="/directors"
      exact
      activeStyle={{
        color: 'green'
      }}
      >Directors</NavLink>
      <NavLink
      to="/actors"
      exact
      activeStyle={{
        color: 'green'
      }}
      >Actors</NavLink>
      </div>
  );
};

export default NavBar;
