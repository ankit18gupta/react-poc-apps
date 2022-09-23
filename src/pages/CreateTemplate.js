import React, { Fragment, useId, useState } from "react";
import Header from "../components/Layout/Header";
import TemplateForm from "../components/Templates/TemplateForm";
import Toolbox from "../components/Templates/Toolbox";

const CreateTemplate = () => {
  const [dropdownList, setDropdownList] = useState([]);
  const id = useId();

  const addOptionsHandler = () => {
    setDropdownList((prevList) => {
      return [
        ...prevList,
        {
          fieldLabel: "Field Label",
          values: [],
          requiredLabel: "Required",
          dropdownOptionsLabel: "Dropdown Options",
          id: id,
          requiredCheck: false
        }
      ];
    });
  };

  return (
    <Fragment>
      <Toolbox onAdd={addOptionsHandler}/>
      <Header heading="Create Template" showCreateBtn={false} />
      <TemplateForm dropdownData={dropdownList} />
    </Fragment>
  );
};

export default CreateTemplate;
