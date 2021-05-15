import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";
function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  //this is a design patten
  return (
    //render login or regitster if user is not login, render home page if user is login
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
export default AuthRoute;
