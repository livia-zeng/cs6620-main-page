import React, { useState } from "react";
import UserPool from "../UserPool";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(username, "123456", [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      toast.success("Registered!", { autoClose: 8000 });
      toast.warn("Admin needs to confirm this user on S3", {
        autoClose: 8000,
      });
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
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
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
