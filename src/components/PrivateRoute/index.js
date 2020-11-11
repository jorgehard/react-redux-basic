import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
function PrivateRoute({ component: Component, Auth, ...rest }) {
  const [token, setToken] = useState(Auth.token);
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
}
const mapStateToProps = (state) => ({
  Auth: state.Auth,
});
export default connect(mapStateToProps, {})(PrivateRoute);
