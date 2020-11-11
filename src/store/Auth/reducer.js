const INITIAL_STATE = {
  name: "",
  id: "",
  token: "",
};
function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SAVE_LOGIN":
      return {
        ...state,
        token: action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
}

export default auth;
