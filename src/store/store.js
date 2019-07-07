import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import indexReducer from "../reducers/index";

export function configureStore() {
  const middleware =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(thunk, logger))
      : applyMiddleware(thunk);
  const store = createStore(indexReducer, middleware);

  if (module.hot) {
    // Root reducers hot module replcae
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
