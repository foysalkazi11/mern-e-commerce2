import { CHECK_USER, ERROR_USER, CLEAR_ERROR, RESET_LOADING } from "./type";

const authReducer = (state, action) => {
  if (action.type === CHECK_USER) {
    return {
      ...state,
      user: action.payload.user,
      isAuthenticated: action.payload.isAuthenticated,
      message: action.payload.message,
      isLoading: false,
      isError: false,
      errorMessage: ""
    };
  }
  if (action.type === ERROR_USER) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload,
      message: ""
    };
  }
  if (action.type === CLEAR_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: false
    };
  }
  if (action.type === RESET_LOADING) {
    return {
      ...state,
      isLoading: true,
      isError: false
    };
  }
  return state;
};

export default authReducer;
