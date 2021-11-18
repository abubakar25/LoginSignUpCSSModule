import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginRedirect from "./LoginRedirect";
import SignUpRedirect from "./SignUpRedirect";
import SignUpValidationYup from "./SignUpValidationYup";

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginRedirect />
          </Route>
          <Route exact path="/signup">
            <SignUpRedirect />
          </Route>
          <Route path="/">
            <SignUpValidationYup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
