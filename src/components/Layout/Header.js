import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
        <h1>{props.heading}</h1>
        {props.showCreateBtn && <Link to="/home/create">Create</Link>}
    </header>
  );
};

export default Header;