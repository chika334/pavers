import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, InputAdornment } from "@material-ui/core";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import { Alert } from "@material-ui/lab";
// import hero6 from "../../../assets/images/Pavers.svg";
// import { loginUser } from "../../../actions/userAction";
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  // const user = useSelector((state) => state.userReducer.isAuthenticated);
  const [values, setValues] = useState({
    email: "",
    password: "",
    validation: false,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { email, password, validation } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   // props.history.push(`${process.env.REACT_APP_URL}/pageProfile`);
  //   // if (user) {
  //   //   if (localStorage.getItem("redirect") === undefined) {
  //   //     // props.history.push(`/http://chika334.github.io/pavers/pageProfile`);
  //   //     props.history.push(`${process.env.REACT_APP_URL}/pageProfile`);
  //   //   } else {
  //   //     props.history.push(`${process.env.REACT_APP_URL}/pageProfile`);
  //   //     // const redirect = localStorage.getItem("redirect");
  //   //     // props.history.push(`${redirect}`);
  //   //     // props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
  //   //   }
  //   // }
  // }, [user]);

  useEffect(() => {
    if (redirect === true) {
      props.history.push(`${process.env.REACT_APP_URL}/pageProfile`);
      console.log("User");
    }
  });

  const validateEmail = (value) => {
    let errors;
    if (!value) {
      errors = "Please enter your email address";
      setError({ error: errors });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors = "Invalid email address";
      setError({ error: errors });
    }
    return error;
  };

  const validatePassword = (value) => {
    let errors;
    if (!value) {
      errors = "This field is required";
      setError({ error: errors });
    } else if (value.length < 7) {
      errors = "Password must be longer than 7 characters";
      setError({ error: errors });
    }
    return errors;
  };

  const validateUserDetails = () => {
    if (email && password !== "") {
      validateEmail(email);
      validatePassword(password);
      setValues({ ...values, validation: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation === false) {
      validateUserDetails();
    }
    const user = {
      email,
      password,
    };

    setRedirect(true);
    // props.loginUser(user);

    // props.history.push(`${process.env.REACT_APP_URL}/pageProfile`);
  };

  return (
    <Grid item sm={12} md={12} lg={12} xl={12} className="mx-auto p-5">
      <div className="text-center">
        <h1 className="display-4 mb-1 font-weight-bold">Login</h1>
        {/*   <img src={hero6} width="110" /> */}
        <p className="font-size-lg mb-4 text-black-50">
          Fill in the fields below to get started
        </p>
      </div>
      {error !== "" ? <Alert severity="error">{error}</Alert> : null}
      <div>
        <div className="mb-4">
          <TextField
            fullWidth
            variant="outlined"
            id="textfield-email"
            label="Email address"
            // value={email}
            name="email"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="mb-3">
          <TextField
            fullWidth
            variant="outlined"
            id="textfield-password"
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center font-size-md">
          <div>
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="text-first"
            >
              Recover password
            </a>
          </div>
        </div>
        <div className="text-center py-0">
          <Button
            onClick={handleSubmit}
            className="bg-primary font-weight-bold w-50 my-2 text-white"
          >
            Sign in
          </Button>
        </div>
      </div>
    </Grid>
  );
};
export default withRouter(connect(null, null)(Login));
// export default withRouter(connect(null, { loginUser })(Login));
