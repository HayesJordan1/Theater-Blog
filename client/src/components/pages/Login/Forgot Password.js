import { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [succcess, setSucccess] = useState("");

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };

        try {
            const { data } = await axios.post(
                "/api/auth/forgotpassword",
                { email },
                config
            )
            setSucccess(data.data)
        }
        catch (error) {
         setError(error.response.data.error);
         setEmail("");
         setTimeout(() => {
            setError("");
         }, 5000)
        }
    }
    return (
        <div className="forgotpassword-screen">
            <form
            onSubmit={forgotPasswordHandler}
            className="forgotpassword-screen__form">
                <h3 className="forgotpassword-screen__title">Forgot Password</h3>
                {error && <span className="error-message">{error}</span>}
                {succcess && <span className="success-message">{succcess}</span>}
                <div className="form-group">
                    <p className="forgotpassword-screen-subtext">
                        Please enter the email address linked to your account. We will send you an email to
                        reset your password.
                    </p>
                    <label htmlFor="email">Email:</label>
                    <input
                     type="email"
                     required
                     id="email"
                     placeholder="Enter Email Address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} 
                     />
                </div>
                <button type="submit" className="btn btn-primary">
                    Send Email
                </button>
            </form>
        </div>
    )
}
export default ForgotPassword