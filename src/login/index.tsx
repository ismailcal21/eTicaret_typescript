import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/reducers/authSlice";
import { User } from "../types";
// import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<User>(
        "https://dummyjson.com/auth/login",
        {
          username: email, // Assuming email is used as username
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the response contains a token property
      const token = response.data.token;
      localStorage.setItem("token", token);
      const user = response.data;
      console.log("User", response.data);

      // Store the user in the Redux store
      dispatch(setUser({ user }));
      navigate("/");

      // Redirect or perform any other actions as needed after successful login
    } catch (error) {
      // Handle login error
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="container" style={{ margin: "auto" }}>
          <div className="box">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Login</h3>
                    </div>
                    <form onSubmit={handleLogin}>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <div className="login-input">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              placeholder="Enter your email id"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="login-icon">
                              <i className="fa fa-user"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only"></label>
                          <div className="login-input">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="******"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="login-icon">
                              <i className="fa fa-lock"></i>
                            </div>
                            <div className="eye-icon">
                              <i className="fa fa-eye"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
                        <button className="button " type="submit">
                          Login
                        </button>

                        <button className="button ">Register</button>
                        <div>
                          <p>
                            Don't you have an account?{" "}
                            <Link to="login">Login</Link>
                          </p>
                        </div>
                      </div>
                    </form>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <h4 className="mb20">Login With</h4>
                      <div className="social-media">
                        <a
                          href="#"
                          className="btn-social-rectangle btn-facebook"
                        >
                          <i className="fa fa-facebook"></i>
                          <span className="social-text">Facebook</span>
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-twitter"
                        >
                          <i className="fa fa-twitter"></i>
                          <span className="social-text">Twitter</span>{" "}
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-googleplus"
                        >
                          <i className="fa fa-google-plus"></i>
                          <span className="social-text">Google Plus</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
