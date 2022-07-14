// import { RepeatRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';
import './signup.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import {Link} from 'react-router-dom';



const SignUp = () => {
    const dispatch = useDispatch();
    const [formField, setFormField] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormField({
            ...formField,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signupUser(formField));
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div style={{ color: "#fff", background: "#FBF8F1", fontFamily: "Roboto ,sanserif" }}>
            <div className="signup-form" >
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="name" placeholder="Name" required="required" value={formField.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" value={formField.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" value={formField.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" name="password" placeholder="Password" required="required" value={formField.password} onChange={handleChange} />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                            <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
                
            </div>

        </div>

    )

}

export default SignUp;
