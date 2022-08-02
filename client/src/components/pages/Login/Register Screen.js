import {useState, useEffect} from 'react';
import {axios} from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../.././././Button';
import './Register.css' 
function Register ( history ) {

    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmpassword, setConfirmPassword]= useState("");
    const [error, setError]= useState("");

    useEffect(() => {
      if(localStorage.getItem("authToken")) {
          history.push("/")
      }
      }, [history]);

    const registerHandler= async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if(password !== confirmpassword) {
    setPassword("")
    setConfirmPassword("")
    setTimeout(() => {
    setError("")
    }, 5000)
    return setError("Passwords do not match");
    }
    
    try {
      const {data} = await axios.post("/api/auth/register", {username, email, password}, 
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
    <div className="register-screen">
      <form className="register-screen_form" onSubmit={registerHandler}>
        <h3 className='register-screen_title'> Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
            <label htmlFor='name'>Username:</label>
            <input 
            type="text" 
            required 
            id="name" 
            placeholder='Enter Username' 
            value={username} 
            onChange={() => setUsername(e.target.value)} />
        </div>
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
        <div className="form-group">
            <label htmlFor='confirmpassword'>Confirm Password:</label>
            <input 
            type="password" 
            required 
            id="confirmpassword" 
            placeholder='Confirm Password' 
            value={confirmpassword} 
            onChange={() => setConfirmPassword(e.target.value)} />
        </div>
        <Button
        type="submit"
        buttonStyle='btn--primary'>
          Register
        </Button>
      <span className="register-screen__subtext">Already have an account? <Link to="/login"> Login!</Link></span>
      </form>
    </div>
    )
}
export default Register