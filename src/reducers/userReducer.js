const userReducer = (state = {
  name: "Lam Pham",
  age: 26
}, action) => {
  switch (action.type) {
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      }
      break;
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    default:
      break;
  }

  return state;
};

export default userReducer;