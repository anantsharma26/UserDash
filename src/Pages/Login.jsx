import { useEffect, useState } from "react";
import "../components/login.css";
import { logincreds } from "../login";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { admin, adminpassword } = logincreds;

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == admin && password == adminpassword) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("token", "bearer " + username);
      navigate("/tables");
    } else if (!username) {
      alert("please enter the email");
    } else if (username != admin) {
      alert("username is incorrect");
    } else if (!password) {
      alert("please fill the password");
    } else if (password != adminpassword) {
      alert("password is incorrect");
    } else {
      alert("please check your email and password is incorrect");
    }
  };

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <section className="loginpage">
      {isLoggedIn && <Navigate to={"/tables"} replace={true} />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
