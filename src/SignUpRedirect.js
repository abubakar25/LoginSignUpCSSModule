import React from "react";
import { useHistory } from "react-router-dom";

function SignUpRedirect(props) {
  let history = useHistory();

  return (
    <div>
      <div>
        <h1>Welcome,Thank you for signing up to our site</h1>
      </div>
      <div>
        <button onClick={history.goBack}>Go Back !</button>
      </div>

      <div></div>
    </div>
  );
}

export default SignUpRedirect;
