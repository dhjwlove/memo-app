import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./container/main";
import Test from "./container/test";

class SceneRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
          <Route path="/label/:label_id" component={Main} />
          <Route path="/memo/:memo_id" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default SceneRoute;
