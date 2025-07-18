import React from "react";
import "./login.css";
import Logo from "../../assets/logo.png";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-glass">
                <img src={Logo} alt="Logo" className="login-logo" />
             
                <p className="login-subheading">Access your dashboard</p>
                <form className="login-form">
                    <input type="text" placeholder="Username" className="login-input" />
                    <input type="password" placeholder="Password" className="login-input" />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-footer">
                    Forgot password? <a href="#">Reset here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
