import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "./testReducer";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  testReducer,
  userSlice,
});
export default rootReducer;
