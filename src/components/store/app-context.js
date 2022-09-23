import React from "react";

const AppContext = React.createContext({
    templateList: [],
    createTemplate: (template) => {},
    updateTemplate: (id) => {}
});

export default AppContext;