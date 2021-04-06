import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//REDUX STORE
import { createStore } from "redux";
//REDUX ALL REDUCERS ROOT OBJECT
import rootReducers from "./Redux/reducers/index";
// REACT_REDUX --> Provider
import { Provider } from "react-redux"; // connecting store to tha app

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
