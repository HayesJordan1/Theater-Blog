import { useContext, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import "./LoginScreen.css";

export default function LoginScreen() {
  const userRef = useRef()
  const passwordRef = useRef()
  const {user, dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type:"LOGIN_START"})
    try {
    const res = await axios.post("/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value
    })
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
    } catch(err) {
      dispatch({ type: "LOGIN_FAILURE"})
    }
  }

  console.log(user)
  return (
    <div className="login-screen">
      <form className="login-screen__form" onSubmit={handleSubmit}>
        <h3 className="login-screen__title">
          Login
        </h3>
        <div className="form-group">
        <label className="login-screen__subtext">Username</label>
        <input
        type="text"
        required
        placeholder="Username"
        ref={userRef}
        tabIndex={1}
        />
      </div>
      <div className="form-group">
        <label className="login-screen__subtext">Password</label>
        <input
        type="password"
        required
        placeholder="Enter Password..."
        ref={passwordRef}
        tabIndex={2}
        />
      </div>
      <button className="btn btn--primary login-button" type="submit" disabled={isFetching}>Login</button>
      <span className="register-screen__subtext">
        Don't have an account? <Link to="/register">Register</Link>
        </span>

      </form>
    </div>
  )
}

