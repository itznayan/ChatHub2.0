import { useState, useEffect } from "react";
import { usePostLoginMutation, usePostSignUpMutation } from "@/state/api";

const Login = ({ setUser, setSecret }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };

  const handleRegister = () => {
    triggerSignUp({ username, password });
  };

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUser(username);
      setSecret(password);
    }
  }, [resultLogin.data]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title text-purple-700 text-3xl mb-4 font-bold">
          ChatHub 2.0 APP
        </h2>
        <p
          className="register-change text-white border-0 p-2 w-48 duration-300 rounded-xl "
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already a user?" : "Are you a new user?"}
        </p>

        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-actions">
          {isRegister ? (
            <button
              className="bg-white px-4 rounded-xl text-black active:text-white hover:bg-purple-800 active:text-white duration-300"
              type="button"
              onClick={handleRegister}
            >
              Register
            </button>
          ) : (
            <button
              className="bg-white px-4 rounded-xl text-black hover:bg-purple-800 active:text-white duration-300"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
