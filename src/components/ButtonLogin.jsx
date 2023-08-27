import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function ButtonLogin() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const googleRef = useRef();

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      <LoginSocialGoogle
        ref={googleRef}
        client_id="967724854541-b85kid8h8j350hv9703mmn6sg18e14q6.apps.googleusercontent.com"
        onLogoutFailure={onLogoutFailure}
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        onResolve={({ provider, data }) => {
          setProvider(provider);
          setProfile(data);
          console.log(data, "data");
          console.log(provider, "provider");
        }}
        onReject={(err) => {
          console.log("Error", err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      {/*   {user.name && (
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
      )} */}
    </div>
  );
}

export default ButtonLogin;
