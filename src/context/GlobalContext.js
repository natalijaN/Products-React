import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const VIEW_ALL = "view all";

const initialState = {
  currentPage: 0,
  totalPages: 0,
  selectedCategory: {
    name: VIEW_ALL,
    selected: false,
  },
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function changePage(value) {
    dispatch({
      type: "CHANGE_PAGE",
      payload: value,
    });
  }
  function changeCategory(category) {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: category,
    });
  }

  function changeTotalPages(value) {
    dispatch({
      type: "CHANGE_TOTAL_PAGES",
      payload: value,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        currentPage: state.currentPage,
        selectedCategory: state.selectedCategory,
        totalPages: state.totalPages,
        changePage,
        changeCategory,
        changeTotalPages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
