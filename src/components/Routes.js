import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "../components/IndexPage/Index";
import AddMember from "./Room/AddMember";
function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/lobby" component={AddMember} />
      </Switch>
    </>
  );
}
export default Routes;
