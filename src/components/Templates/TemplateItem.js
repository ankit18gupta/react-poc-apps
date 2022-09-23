import React from "react";
import { Link } from "react-router-dom";

const TemplateItem = (props) => {
  return (
    <li>
      <Link to={`home/edit/${props.id}`}>
        {props.id} {props.name}
      </Link>
    </li>
  );
};

export default TemplateItem;
