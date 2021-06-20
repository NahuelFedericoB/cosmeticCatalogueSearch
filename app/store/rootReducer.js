import { combineReducers } from "redux";
import { mainPageReducer } from "../scripts/reducers";

const rootReducer = combineReducers({
  elc: mainPageReducer,
});

export default rootReducer;
