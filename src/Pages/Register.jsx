import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Register = () => {
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
      <div className="container register-page">
        <div className="row">
          <div className="d-flex justify-content-center">
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
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="fname"
                        value={inputs.fname || ""}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="sname"
                        value={inputs.sname || ""}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Surname"
                      />
                    </div>
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
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          value={inputs.date || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <div class="form-check">
                          <input
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            class="form-check-input"
                            type="radio"
                            checked={inputs.gender === "male"}
                          />
                          <label class="form-check-label" for="">
                            Male
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <div class="form-check">
                          <input
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            class="form-check-input"
                            type="radio"
                            checked={inputs.gender === "female"}
                          />
                          <label class="form-check-label" for="">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 mt-4 mb-4">
                      <small>
                        People who use our service may have uploaded your
                        contact information to Linkup.
                      </small>{" "}
                      <br />
                      <small>
                        Learn more. By clicking Sign Up, you agree to our Terms,
                        Privacy Policy and Cookies Policy. You may receive SMS
                        notifications from us and can opt out at any time.
                      </small>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <button
                          type="input"
                          style={{ display: "block", width: "100%" }}
                          className="btn btn-success btn-block"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="mb-3 text-center">
                      <Link>Already Have an Account</Link>
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

export default Register;
