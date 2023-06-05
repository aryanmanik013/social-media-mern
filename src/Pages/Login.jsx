import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({});
  };
  return (
    <>
      <div className="container login-page">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <div className="col-md-5">
              <h1 className="text-center heading-color">Link Up</h1>
              <div className="card text-start">
                <div className="card-body">
                  <h4
                    className="card-title text-center"
                    style={{ fontWeight: "bolder" }}
                  >
                    Create a new account
                  </h4>
                  <p className="card-text text-center">It's quick and easy.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row px-3">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          name="email"
                          value={inputs.email || ""}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Mobile Number or email address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="password"
                          value={inputs.password || ""}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="New Password"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <button
                          type="input"
                          style={{ display: "block", width: "100%" }}
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Login
                        </button>
                      </div>
                      <div className="mb-3 text-center">
                        <Link>Forgotten Account ?</Link>
                        <Link>Signup For Linkup</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
