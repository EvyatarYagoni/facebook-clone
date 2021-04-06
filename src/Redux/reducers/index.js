import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  isLogged: isLoggedReducer,
});

export default rootReducers;
