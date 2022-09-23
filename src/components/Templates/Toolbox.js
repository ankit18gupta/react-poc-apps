import React from "react";

const Toolbox = (props) => {
  const dropdownHandler = (event) => {
    event.preventDefault();
    props.onAdd();
  };

  return (
    <section>
      <button onClick={dropdownHandler}>
        Dropdown
      </button>
    </section>
  );
};

export default Toolbox;
