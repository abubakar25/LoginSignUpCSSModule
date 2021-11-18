import React from "react";
import "./SignUpStyles.css";
import SignUpCSS from "./SignUp.module.css";
import LoginValidationYup from "./LoginValidationYup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

function SignUpValidationYup(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters")
      .max(20, "Name must not exceed 20 characters"),
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

  const history = useHistory();

  const container = React.createRef();

  function onSignUp() {
    container.current.classList.add("rightPanelActive");
  }
  function onSignIn() {
    debugger;
    container.current.classList.remove("rightPanelActive");
  }

  const onSubmit = (data) => {
    history.push("/signup");
    axios
      .post("http://localhost:3001/SignUpFormPostRequestFunction", data)
      .then(() => console.log("Sign Up"))
      .catch((err) => {
        console.error(err);
      });
    console.log(data);
  };

  return (
    <div className={SignUpCSS.bodyClass}>
      <div className="container" id="container" ref={container}>
        <div className="formContainer signUpContainer">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={SignUpCSS.formClass}
          >
            <h1 style={{ color: "#5bc0aa" }} className={SignUpCSS.h1Class}>
              Create Account
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
            <span className={SignUpCSS.spanClass}>
              or use your email for registration
            </span>
            <div style={{ marginTop: "15px" }}>
              <TextField
                size="small"
                id="name"
                name="name"
                label="Name"
                helperText={errors.name?.message}
                {...register("name", {
                  required: true,
                })}
                error={errors.name ? true : false}
              />
            </div>

            <br />
            <div>
              <TextField
                type="email"
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

            <button type="submit" className={SignUpCSS.buttonClass}>
              Sign Up
            </button>
          </form>
        </div>
        <LoginValidationYup />
        <div className="overlayContainer ">
          <div className="overlay">
            <div className="overlayPanel overlayLeft">
              <h1 className={SignUpCSS.h1Class}>Welcome Back!</h1>

              <p className={SignUpCSS.pClass}>
                To keep connected with us please login with your personal info
              </p>
              <div className={SignUpCSS.div4}></div>
              <button
                id="signIn"
                onClick={onSignIn}
                className={SignUpCSS.buttonClass}
              >
                Sign In
              </button>
              <div className={SignUpCSS.div2}></div>
              <div className={SignUpCSS.div3}></div>
              <div className={SignUpCSS.div6}></div>
              <div className={SignUpCSS.div1}></div>
            </div>
            <div className="overlayPanel overlayRight">
              <h1 className={SignUpCSS.h1Class}>Hello, Friend!</h1>
              <p className={SignUpCSS.pClass}>
                Enter your personal details and start journey with us
              </p>
              <button onClick={onSignUp} className={SignUpCSS.buttonClass}>
                Sign Up
              </button>
              <div className={SignUpCSS.div2}></div>
              <div className={SignUpCSS.div3}></div>
              <div className={SignUpCSS.div4}></div>
              <div className={SignUpCSS.div5}></div>
              <div className={SignUpCSS.div6}></div>
            </div>
          </div>
        </div>
      </div>
      {/* .container.rightPanelActive .overlay */}
      {/* <div className="A B">
        <div className="C">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div> */}
    </div>
  );
}

export default SignUpValidationYup;
