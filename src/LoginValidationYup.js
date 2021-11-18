import React from "react";
import SignUpCSS from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

function LoginValidationYup(props) {
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    history.push("/login");
    axios
      .post("http://localhost:3001/LoginFormPostRequestFunction", data)
      .then(() => console.log("Login"))
      .catch((err) => {
        console.error(err);
      });
    console.log(data);
  };

  return (
    <div>
      <div className="formContainer signInContainer">
        <form onSubmit={handleSubmit(onSubmit)} className={SignUpCSS.formClass}>
          <h1 style={{ color: "#5bc0aa" }} className={SignUpCSS.h1Class}>
            Sign In
          </h1>
          <div className={SignUpCSS.socialContainer}>
            <a href="#7" className="social">
              <i className="fab fa-facebook-f">
                <FacebookIcon sx={{ color: "black" }} />
              </i>
            </a>
            <a href="#7" className="social">
              <i className="fab fa-google-plus-g">
                <GoogleIcon sx={{ color: "black" }} />
              </i>
            </a>
            <a href="#7" className="social">
              <i className="fab fa-linkedin-in">
                <LinkedInIcon sx={{ color: "black" }} />
              </i>
            </a>
          </div>
          <span className={SignUpCSS.spanClass}>or use your account</span>
          <div style={{ marginTop: "15px" }}>
            <TextField
              size="small"
              id="email"
              name="email"
              label="Email"
              helperText={errors.email?.message}
              {...register("email", {
                required: true,
              })}
              error={errors.email ? true : false}
            />
          </div>
          <br />
          <div>
            <TextField
              sx={{ maxWidth: "210px" }}
              size="small"
              id="password"
              name="password"
              type="password"
              label="Password"
              helperText={errors.password?.message}
              {...register("password", {
                required: true,
              })}
              error={errors.password ? true : false}
            />
          </div>
          <br />
          <a href="#7" className={SignUpCSS.anchor}>
            Forgot your password?
          </a>
          <button type="submit" className={SignUpCSS.buttonClass}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginValidationYup;
