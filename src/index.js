import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import SceneRoute from "./router";

ReactDOM.render(
  <Provider store={configureStore()}>
    <SceneRoute />
  </Provider>,
  document.getElementById("root")
);
