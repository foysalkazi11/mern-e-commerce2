import {
  RESET_LOADING,
  CLEAR_ERROR,
  ALL_PRODUCT,
  CREATE_PRODUCT,
  ERROR
} from "./type";

const productReducer = (state, action) => {
  //get all product
  if (action.type === ALL_PRODUCT) {
    return {
      ...state,
      allProduct: action.payload,
      isLoading: false,
      isError: false,
      errorMessage: ""
    };
  }
  //create new product
  if (action.type === CREATE_PRODUCT) {
    return {
      ...state,
      creatNewProduct: action.payload.creatNewProduct,
      message: action.payload.message,
      isLoading: false,
      isError: false,
      errorMessage: ""
    };
  }

  //reset loading
  if (action.type === RESET_LOADING) {
    return {
      ...state,
      isLoading: true,
      isError: false
    };
  }

  //clear error
  if (action.type === CLEAR_ERROR) {
    return {
      ...state,
      isError: false,
      errorMessage: ""
    };
  }

  // error
  if (action.type === ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload,
      message: ""
    };
  }

  return state;
};

export default productReducer;
