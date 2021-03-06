// import ThemeOptions from './ThemeOptions';

// export default {
//   ThemeOptions
// };

import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import loading from "./loading";
import userReducer from "./userReducer";
import modal from "./modalGateway";

export default combineReducers({
  ThemeOptions,
  loading,
  userReducer,
  modal,
});
