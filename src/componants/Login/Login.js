import React, { useEffect, useState } from 'react';
import './Login.css';
import login from '../MyImage/login-removebg-preview.png'
import { Link } from "react-router-dom";
// 
import { RiLoginCircleFill } from 'react-icons/ri';
import auth from '../../Firebse/Firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, deuser, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
  let location = useLocation();
  
    const [user] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(user){
            navigate(from)
        }
      },[user])
    
//  
    const [userInfo , setUserInfo] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        general:''
    });

    const [errors , setErrors] = useState({
        emailError:'',
        passwordError:'',
        confiemPasswordError:'',
        generalError:''
    });

    const handleEmailChange = event=>{
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ ;  
        const validEmail = emailRegex.test(event.target.value);
        console.log(validEmail);
        if(validEmail){
            setUserInfo({...userInfo , email:event.target.value})
            setErrors({...errors ,  emailError:''});
        }
        else{
            setErrors({...errors , emailError:'Your email is invalid' });
            setUserInfo({...userInfo , email:''})
        }
        
    }
    const handlePasswordChange = (event)=>{
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPassword = passwordRegex.test(event.target.value)
        console.log(validPassword);
        if(validPassword){
            setUserInfo({...userInfo , password:event.target.value});
            setErrors({...errors , passwordError:''})
        }
        else{
            setErrors({...errors , passwordError:'your password is not valid'})
            setUserInfo({...userInfo , password:""})
        }
    }

    const handleFormSubmit = (event)=>{
        event.prevent.default();
    }
    

  
    

    const [
        signInWithEmailAndPassword,
        Signuser,
        Signloading,
        Signerror,
      ] = useSignInWithEmailAndPassword(auth);
    useEffect(()=>{
        if(Signuser){
            toast(Signuser?.operationType);
        }
       
    },[Signuser]);

    useEffect(()=>{
        if(Signerror){
            toast(Signerror?.message)
            
        }
    },[Signerror]);
    if(Signloading){
        return <p className='text-center'>Loading...</p>
    }
    
    
    
    
    return (
        <div className='formfull container'>
            <div>
            <img className='login-imf' src={login} alt="" />
            </div>
            <div className=' login-form'>
                <h2 className='log'>Log In</h2>
           <form onSubmit={handleFormSubmit}>
           <input className='login-container mb-3' type="email" name="" onChange={handleEmailChange} id="" placeholder='email'/><br></br>
            {errors?.emailError && <p>{errors.emailError}</p>}
            <input className='login-container' type="Pasword" name="" id=""onChange={handlePasswordChange}  placeholder='password'/><br></br>
            {errors?.passwordError && <p>{errors.passwordError}</p>}
            <br></br>
            <p>You Haven't Account? <Link className='text-decoration-none text-danger' to='/register'>pLease Register</Link> </p>
           
            <button onClick={() => signInWithEmailAndPassword(userInfo.email, userInfo.password)} className='w-75 btn btn-primary mb-3 fw-bolder fst-italic'>Log In <RiLoginCircleFill></RiLoginCircleFill></button>
            <br />
            <Button onClick={() => signInWithGoogle()} className='w-75 mb-5' variant="primary" >
    Sign In With Google <AiFillGoogleCircle></AiFillGoogleCircle>
  </Button>
           </form>
           <ToastContainer></ToastContainer>
           
            
            
            </div>
           
        </div>
    );
};

export default Login;