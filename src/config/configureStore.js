import { createStore, combineReducers } from "redux";
import reducers from "../reducers";

// export default function configureStore() {
//   return createStore(
//     combineReducers({
//       ...reducers
//     }),
//     {}
//   );
// }

export const configureStore = () => {
  const store = createStore(reducers);

  return store;
};

export default configureStore;
