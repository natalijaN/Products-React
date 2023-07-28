export default (state, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: {
          name: action.payload[0].name,
          selected: true,
        },
      };
    case "CHANGE_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};
