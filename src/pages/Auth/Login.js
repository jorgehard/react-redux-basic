import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as AuthActions from "../../store/Auth/actions";
import { useHistory } from "react-router-dom";
import { implantations } from "../../services/AuthApi";

function Login({ Auth, saveLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const response = await implantations.loginUser(user);
    saveLogin(response.data.token);
    history.push("/users/create");
  }

  console.log(Auth);
  return (
    <form className="w-50" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
const mapStateToProps = (state) => ({
  Auth: state.Auth,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
