import React, { useContext } from "react";
import AppContext from "../store/app-context";
import TemplateItem from "./TemplateItem";

const TemplateList = (props) => {
  const appCtx = useContext(AppContext);
  console.log(appCtx.templateList);
  const templateItems = (
    <ul>
      {appCtx.templateList.map((template, index) => (
        <TemplateItem key={index + 1} id={index + 1} name={template.name} />
      ))}
    </ul>
  );
  return (
    <section>
      <h2>Template Names</h2>
      {templateItems}
    </section>
  );
};

export default TemplateList;
