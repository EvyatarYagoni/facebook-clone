const initialState = {
  user: null,
};

const isLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default isLoggedReducer;
