import { useState, useNavigate } from "react"; 
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {

    const [email, setEmail] = useState("");

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    return (
        <div className="center form-container">
            <div>
                <img className="big-logo" src="images/logo.png"/>
            </div>
            <div className="logo-container">
                Forgot Password
            </div>
            <div className="form-group">
                <label className="label" style={{"alignText":"left"}}>Email</label>
                <input name="email" placeholder="Enter your email" type="text" value={email} onChange={handleEmailChange}/>
            </div>

            <button className="form-submit-btn button" type="submit"><span>Send Email</span></button>

            <p className="signup-link">
                Don't have an account? <button className="signup-link link" onClick={() => {props.navigate('/create_account')}}>Sign up now!</button>
            </p>
        </div>
    );
}

export default ForgotPassword;