import axios from "axios"
import {useState} from "react"
import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      })
      
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }
  

  return(
    <div className="register-screen">
     
      <form className="register-screen__form" onSubmit={handleSubmit}>
      {error && <span className="error-message">{error}</span>}
      <h3 className="register-screen__title">Register</h3>
      <div className="form-group">
        <label className="register-screen__subtext">Username</label>
        <input
        type="text"
        required
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        tabIndex={1}
        />
      </div>
      <div className="form-group">
        <label className="register-screen__subtext">Email</label>
        <input
         type="text"
         required
         id="email"
         placeholder="Email address"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         autoComplete="true"
         tabIndex={1} />
         </div>
         <div className="form-group">
        <label className="register-screen__subtext">Password</label>
        <input
        type="password"
        required
        id="password"
        autoComplete="true"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        tabIndex={2} />
        </div>
        
        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      {error && <span style={{color:"red", marginTop:"10px"}}>{error}</span>}
      <button className="btn btn--primary" type="submit">
          Register
        </button>
      </form>
      

    </div>

  )
}