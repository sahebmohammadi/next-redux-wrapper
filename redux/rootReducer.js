import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default rootReducer;
