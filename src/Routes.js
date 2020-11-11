import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Create, Update, List } from "./pages/Users";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/users" exact component={List} />

        <PrivateRoute path="/users/create" exact component={Create} />
        <PrivateRoute path="/users/:id/update" exact component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
