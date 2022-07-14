import React, { useState } from 'react';
import './login.css';
// import { authenticateSignup } from '../../service/api';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

// import './new.js';

const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});




function Login() {
    const dispatch = useDispatch();
    const [formField, setFormField] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormField({
            ...formField,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(formField));
        dispatch(loginUser(formField))
    }
    return (


        // <p>Hii purva</p>
        <>
            {/* <img className="wave" src="img\wave.png" alt="ketan" /> */}
            <div style={{ background: "#FBF8F1" }}>
                <div className="container">
                    <div className="img">
                        <img src="img/bg.svg" alt="anand" />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src="img/avatar.svg" alt="purva" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Username</h5> */}
                                    <input type="text" 
                                        placeholder='Username' className="input" name='username' onChange={handleChange} value={formField.username} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Password</h5> */}
                                    <input type="password" placeholder='Password' className="input" name='password' onChange={handleChange} value={formField.password} />
                                </div>
                            </div>
                            <p>Forgot Password?<Link to="/signup">SignUp</Link></p>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Login;