import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./container/main";

export const SceneRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/label/:label_id" component={Main} />
      <Route path="/label/:label_id/memo/:memo_id" component={Main} />
    </Switch>
  </BrowserRouter>
);
export default SceneRoute;
