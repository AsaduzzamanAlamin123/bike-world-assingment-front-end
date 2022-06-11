import React from 'react';
import './Login.css';
import login from '../MyImage/login-removebg-preview.png'
import { Link } from "react-router-dom";
// 
import { RiLoginCircleFill } from 'react-icons/ri';

const Login = () => {
    return (
        <div className='formfull container'>
            <div>
            <img className='login-imf' src={login} alt="" />
            </div>
            <div className=' login-form'>
                <h2 className='log'>Log In</h2>
            <input className='login-container mb-3' type="email" name="" id="" placeholder='email'/><br></br>
            <input className='login-container' type="Pasword" name="" id="" placeholder='password'/><br></br>

            <br></br>
            <p>You Haven't Account? <Link className='text-decoration-none text-danger' to='/register'>pLease Register</Link> </p>
           
            <button className='btn btn-primary mb-3 fw-bolder fst-italic'>Log In <RiLoginCircleFill></RiLoginCircleFill></button>
           
            
            
            </div>
           
        </div>
    );
};

export default Login;