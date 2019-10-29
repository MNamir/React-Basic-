import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <NavLink to="/" className="nav-link" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={
              {
                pathname: '/Service'
              }
            } exact className="nav-link" >Link</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={
              {
                pathname: '/Login'
              }
            } exact className="nav-link " >LogIn</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;