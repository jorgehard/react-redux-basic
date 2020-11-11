export function saveLogin(token) {
  return {
    type: "SAVE_LOGIN",
    data: token,
  };
}
export function logOut() {
  return {
    type: "LOGOUT",
    data: "",
  };
}
