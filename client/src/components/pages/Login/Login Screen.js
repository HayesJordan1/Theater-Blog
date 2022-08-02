import {useState} from 'react';
import {axios} from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../.././././Button';
import { useEffect } from 'react';
import './LoginScreen.css' 
function Login ( history ) {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");

    useEffect(() => {
    if(localStorage.getItem("authToken")) {
        history.push("/")
    }
    }, [history]);

    const loginHandler= async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    try {
      const {data} = await axios.post("/api/auth/login", { email, password}, 
      config)

      localStorage.setItem("authToken", data.token)
      history.push("/")
    } catch (error) {
      setError(error.response.data.error)
      setTimeout(() => {
        setError("");
      }, 5000)
    }
    }


    return(
    <div className="login-screen">
      <form className="login-screen_form" onSubmit={loginHandler}>
        <h3 className='login-screen_title'> Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input 
            type="email" 
            required 
            id="email" 
            placeholder='Enter Email Adress' 
            value={email} 
            onChange={() => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input 
            type="password" 
            required 
            id="password" 
            placeholder='Enter Password' 
            value={password} 
            onChange={() => setPassword(e.target.value)} />
        </div>
        <Button
        type="submit"
        buttonStyle='btn--primary'>
          Login
        </Button>
      <span className="login-screen__subtext">Don't have an account? <Link to="/register">Join Today!</Link></span>
      </form>
    </div>
    )
}
export default Login