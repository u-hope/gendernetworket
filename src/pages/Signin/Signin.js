import './signin.css';
import React, {useState} from 'react';
import { signin, authenticate } from '../../backend';
import { Navigate, Link } from 'react-router-dom'; 

// Signin component for the login form
export function Signin(){

     // Initializing states for form fields, error, loading, and success messages
     const [values, setValues] = useState({
        email: "",
        password: "",
        _id:"",
        error: "",
        loading: false,
        success: false,
    });
    // Destructuring values from the state
    const { email, password, error, loading, success } = values;
    
    // Handles changes in the input fields
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }
     // Submits the form data to the backend for user authentication
     const onSubmit = async event => {
        event.preventDefault();
        setValues({ ...values, success: false, loading: true });
        signin({ email, password})
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false, success: false });
              
                } else {
                    authenticate(data, () => {
                        setValues({ ...values, success: true });
                        sessionStorage.setItem('org_id', data.org._id);
                        console.log("Signin data: ",data.org._id)
                    })
                }
            })
            .catch();
    }
    // Displays error message if there's any
    const errorMessage = () => {
        return (<div className='error-message' style={{ display: error ? "" : "none", color: "red" }}>
            {error}
        </div>);
    }

    // Displays loading message during form submission
    const loadingMessage = () => {
        return (
            loading && (
                <div className="loading-message" style={{ display: error ? "" : "none", color: "red" }}>
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            )
        );
    }

    return(

        success ? <Navigate to={`/profile`} /> :
        <div className='form-container'>
            <div className='form-box'>
                <h2>Sign In</h2>
                {loadingMessage()}
                {errorMessage()}
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={handleChange("email")} required/>
                </div>
                {/* Input fields for password */}
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange("password")} required/>
                </div>
                {/* Log in button */}
                <div className="form-group-button">
                    <button onClick={onSubmit}>Log in</button>
                </div>
                {/* Message for redirection to signup */}
                <div className='login-message'>
                <center><p className='login_redirect mt-2'>Don't have an account?<b><Link to='/signup'> Signup here</Link></b></p></center>
                </div>
            </div>
        </div>
    )
}

export default Signin;