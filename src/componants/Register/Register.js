import React from 'react';
import { FcRegisteredTrademark } from 'react-icons/fc';
import login from '../MyImage/login-removebg-preview.png'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='formfull container'>
            <div>
            <img className='login-imf' src={login} alt="" />
            </div>
            <div className=' login-form'>
                <h2 className='log'>Register</h2>
            <input className='login-container mb-3' type="email" name="" id="" placeholder='email'/><br></br>
            <input className='login-container' type="Pasword" name="" id="" placeholder='password'/><br></br>
            <input className='login-container' type="Pasword" name="" id="" placeholder='confirm-password'/><br></br>

            <br></br>
            <p>If you have Account? <Link className='text-decoration-none text-danger' to='/login'>pLease Login</Link> </p>
           
            <button className='btn btn-primary mb-3 fw-bolder fst-italic'>Register <FcRegisteredTrademark></FcRegisteredTrademark></button>
           
            
            
            </div>
           
        </div>
    );
};


export default Register;