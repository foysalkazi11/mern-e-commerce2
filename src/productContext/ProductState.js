import React, { createContext, useContext, useReducer } from "react";
import productReducer from "./productReducer";
import {
  ALL_PRODUCT,
  CREATE_PRODUCT,
  RESET_LOADING,
  CLEAR_ERROR,
  ERROR
} from "./type";
import axiosConfig from "../config/axiosConfig";

const initialState = {
  isLoading: true,
  isError: false,
  errorMessage: "",
  message: "",
  allProduct: [],
  creatNewProduct: false
};

const ProductContext = createContext();

const ProductState = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //get all product
  const getAllProduct = async () => {
    dispatch({ type: RESET_LOADING });
    const url = "/product/allProduct";
    try {
      const res = await axiosConfig.get(url);
      dispatch({ type: ALL_PRODUCT, payload: res.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.message });
    }
  };
  //create new product
  const addProduct = async (inputs) => {
    dispatch({ type: RESET_LOADING });
    const url = "/product/createProduct";
    try {
      const res = await axiosConfig.post(url, inputs);
      dispatch({ type: CREATE_PRODUCT, payload: res.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.message });
    }
  };

  //clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getAllProduct,
        addProduct,
        clearError
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductState, useProduct };
