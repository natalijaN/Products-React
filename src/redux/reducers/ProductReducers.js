export const ProductReducer = (
  state = { productId: undefined, product: {} },
  action
) => {
  switch (action.type) {
    case "SET_PRODUCT_ID":
      return {
        productId: action.payload,
      };

    case "SET_PRODUCT":
      return {
        product: action.payload,
      };

    default:
      return state;
  }
};
