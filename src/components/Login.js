import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
toast.configure();

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: "123456",
    });

    user.authenticateUser(authDetails, {
      onSuccess: async (data) => {
        if (data.accessToken.jwtToken) {
          navigate("/home/" + username);
        }
      },
      onFailure: (err) => {
        console.error("onFailure :", err);
        toast.error("Login failed", { autoClose: 4000 });
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequred: ", data);
        toast.error("newPasswordRequred...", { autoClose: 4000 });
      },
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label className="my-2">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block my-3"
            style={{ width: "100%" }}
            onClick={onSubmit}
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Not registered? <a href="/sign-up">sign up</a>
          </p>
        </form>
      </div>
      <p className="text-center" style={FooterStyle}>
        © CS6620 Team | All Right Reserved
      </p>
    </div>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#eee",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5",
};

export default Login;
