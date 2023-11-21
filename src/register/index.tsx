import React from "react";

const Register = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="box sing-form">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Create Your Account</h3>
                      <p>Please fill all Resgister form Fields Below. </p>
                    </div>
                    <form>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="name"
                          ></label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="phone"
                          ></label>
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder=" Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <input
                            id="email"
                            name="emaol"
                            type="text"
                            className="form-control"
                            placeholder="Enter your email id"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label  sr-only"
                            htmlFor="password"
                          ></label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="create your password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <button className="button">Register</button>
                        <div>
                          <p>
                            Have an Acount? <a href="#">Login</a>
                          </p>
                        </div>
                      </div>
                    </form>
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

export default Register;
