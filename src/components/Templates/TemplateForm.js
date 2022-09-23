import React, { useId, useRef, useState } from "react";
import Input from "../UI/Input";

const TemplateForm = (props) => {
  const nameInputRef = useRef();
  const fieldLabelRef = useRef();
  const id = useId();
  const [optionsList, setOptionsList] = useState([{value: ""}]);

  const addOptionHandler = () => {
    setOptionsList((prevList) =>{
      return [
        ...prevList,
        {value: ""}
      ];
    })
  };

  const removeOptionHandler = (index) => {
    const list = [...optionsList];
    list.splice(index, 1);
    setOptionsList(list);
  };

  const dropdownWrappers = (
    <section>
      {props.dropdownData.map((wrapper, index) => (
        <fieldset key={index} id={`${wrapper.id}-fieldset`}>
          <Input
            type="text"
            ref={fieldLabelRef}
            label={wrapper.fieldLabel}
            id={`${wrapper.id}-fieldLabel`}
          />
          <input
            type="checkbox"
            id={`${wrapper.id}-required`}
            checked={wrapper.requiredChecked}
          />
          <label htmlFor={`${wrapper.id}-required`}>Required</label>
          <label htmlFor={`${wrapper.id}-dropdownOptions`}>
            {wrapper.dropdownOptionsLabel}
          </label>
          <button type="button" onClick={addOptionHandler}>Add</button>
          {optionsList.map((option, index) => (
            <div key={index}>
              <input id={`option-${index}`} type="text" />
              <button type="button" onClick={removeOptionHandler.bind(null, index)}>Remove</button>
            </div>
          ))}
        </fieldset>
      ))}
    </section>
  );

  return (
    <form>
      <Input
        type="text"
        ref={nameInputRef}
        label="Template Name"
        id={`${id}-templateName`}
      />
      {dropdownWrappers}
      <section>
        <button type="button">Preview</button>
        <button type="submit">Submit</button>
      </section>
    </form>
  );
};

export default TemplateForm;
