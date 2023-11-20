import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{/*{code here}*/}</div>;
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>
    </nav>
  );
}