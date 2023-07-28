export const SetProductId = (value) => (dispatch) => {
  dispatch({
    type: "SET_PRODUCT_ID",
    payload: value,
  });
};

export const SetProduct = (product) => (dispatch) => {
  dispatch({
    type: "SET_PRODUCT",
    payload: product,
  });
};
