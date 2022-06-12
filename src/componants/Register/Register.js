import React, { useEffect, useState } from 'react';
import { FcRegisteredTrademark } from 'react-icons/fc';
import login from '../MyImage/login-removebg-preview.png'
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebse/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from 'react-icons/ai';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [userInfo , setUserInfo] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        general:''
    })
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
    const confirmPassword = event =>{
        if(event.target.value === userInfo.password){
            setUserInfo({...userInfo , confirmPassword:event.target.value});
            setErrors({...errors , confiemPasswordError:""})
        }
        else{
            setErrors({...errors , confiemPasswordError:"Your Password don't match"})
            setUserInfo({...userInfo , confirmPassword:''})
        }
    }
    const [
        createUserWithEmailAndPassword,
        EmaileUser,
        EmailLoading,
        Emailerror,
      ] = useCreateUserWithEmailAndPassword(auth);
      
    const handleFormSubmit = (event)=>{
        event.prevent.default();
    }
    useEffect(()=>{
        if(EmaileUser){
            toast(EmaileUser?.operationType);
        }
       
    },[EmaileUser]);

    useEffect(()=>{
        if(Emailerror){
            toast(Emailerror?.message)
        }
    },[Emailerror]);
    if(EmailLoading){
        return <p className='text-center'>Loading...</p>
    }

    
    return (
        <div className='formfull container'>
            <div>
            <img className='login-imf' src={login} alt="" />
            </div>
            <div className=' login-form'>
                <h2 className='log'>Register</h2>
           <form onSubmit={handleFormSubmit}>
           <input className='login-container mb-3' type="email" name="" id="" required onChange={handleEmailChange} placeholder='email'/><br></br>
            {errors?.emailError && <p>{errors.emailError}</p>}
            <input className='login-container' type="Password" name="" id="" onChange={handlePasswordChange}  placeholder='password'  /><br></br>
            {errors?.passwordError && <p>{errors.passwordError}</p>}
            <input className='login-container' type="Password" name="" id="" onChange={confirmPassword} placeholder='confirm-password'/><br></br>
            {errors?.confiemPasswordError && <p>{errors.confiemPasswordError}</p>}

            <br></br>
            <p>If you have Account? <Link className='text-decoration-none text-danger' to='/login'>pLease Login</Link> </p>
           </form>
           
            <Button  size='lg'  onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} className='w-75 btn btn-primary mb-3 fw-bolder fst-italic'>Register <FcRegisteredTrademark></FcRegisteredTrademark></Button>
           <br />
            <Button onClick={() => signInWithGoogle()} className='w-75 mb-5' variant="primary" size="lg">
    Sign In With Google <AiFillGoogleCircle></AiFillGoogleCircle>
  </Button>
            
            </div>
           
            <ToastContainer></ToastContainer>
           
        </div>
    );
};


export default Register;
// 