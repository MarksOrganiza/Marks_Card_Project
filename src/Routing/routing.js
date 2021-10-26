import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import App from "../App";
import Login from "../Components/Accounts/Login/Login.js";
import Registration from "../Components/Accounts/Registration/Registration.js";
// import Dashboard from "../components/dashboard/Dashboard";
// import PrivateRoute from "./PrivateRoute";
const routes = (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/" component={Registration} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      {/* <PrivateRoute> */}
        {/* <Route exact path="/dashboard" component={Dashboard} />{" "} */}
        {/*Obsolate do not use*/}
        {/* <Route exact path="/products" component={Products} /> */}
        {/* <Route
          path="/products"
          render={({ match: { url } }) => (
            <Route
              path={`${url}/stocks/:productId`}
              component={ProductDetailsStock}
              exact
            />
          )}
        /> */}
      {/* </PrivateRoute> */}
    </Switch>
  </Router>
);

export default routes;
