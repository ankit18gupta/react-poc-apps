import React, { useReducer } from "react";
import AppContext from "./app-context";

const defaultTemplateState = [
    {
        name: "Template 1"
    },
    {
        name: "Template 2"
    },
    {
        name: "Template 3"
    }
];

const templateReducer = (state, action) => {
  if (action.type === "CREATE") {
  } else if (action.type === "UPDATE") {
  }
  return defaultTemplateState;
};

const AppProvider = (props) => {
  const [templateState, dispatchTemplateState] = useReducer(templateReducer, defaultTemplateState);

  const createTemplateHandler = (template) => {
    dispatchTemplateState({ type: "CREATE", template: template });
  };

  const updateTemplateHandler = (id) => {
    dispatchTemplateState({ type: "UPDATE", id: id });
  };

  const appContext = {
    templateList: templateState,
    createTemplate: createTemplateHandler,
    updateTemplate: updateTemplateHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
