import {
  USER_ERROR,
  USER_LOADED,
  USER_LOADING,
  LOGIN_USER,
} from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user: null,
  msg: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_ERROR: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
