import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./AppContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const expenseStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
   
  ));


ReactDOM.render(
  <Provider store={expenseStore}>
    <AppContainer />
  </Provider>,

  document.getElementById("root")
);
