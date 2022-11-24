const initialState = {
  users: [],
};

const todoReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      users: action.payload,
    };
  }
  if (action.type === "REMOVE") {
    const newState = state.users.filter((item) => {
      if (item.id !== action.id) {
        return item;
      }
    });
    return {
      ...state,
      users: newState,
    };
  }
  return state;
};
export default todoReducer;
