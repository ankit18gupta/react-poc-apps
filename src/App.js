import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateTemplate from "./pages/CreateTemplate";
import EditTemplate from "./pages/EditTemplate";
import AppProvider from "./components/store/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/create">
          <CreateTemplate />
        </Route>
        <Route path="/home/edit/:templateId">
          <EditTemplate />
        </Route>
      </Switch>
    </AppProvider>
  );
};

export default App;
