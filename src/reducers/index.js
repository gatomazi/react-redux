import { combineReducers } from "redux";
import todos from "./todos";
import course from "./course";

export default combineReducers({
  todos,
  course
});
