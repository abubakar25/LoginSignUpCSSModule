import React from "react";
import { useHistory } from "react-router-dom";

function LoginRedirect(props) {
  const history = useHistory();
  return (
    <div>
      <div>
        <h1>Welcome, Thank you for login to our site</h1>
      </div>

      <div>
        <button onClick={history.goBack}>Go Back !</button>
      </div>
    </div>
  );
}

export default LoginRedirect;
