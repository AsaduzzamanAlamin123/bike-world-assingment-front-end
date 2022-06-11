import React from 'react';
import Bike from '../MyImage/pexels-cottonbro-5195634.jpg';
import './Home.css';
import { FcSearch } from 'react-icons/fc';
// 

const Home = () => {
    return (
        <div className='container'>
            <div style={{ 
      backgroundImage: `url(${Bike})` 
    }} className='first'>
                <div className='vertical-center'>
                <h1 className='text text-center'>
                    <span className='wel'>Welcome</span> To my Bike <span className='wrl'>World</span><br>
                    </br>
                    Enjoy Your life With Us
                    <br></br>
                    

                   
                </h1>
                <h2 className='text-center mt-5'><input className='field' type="text" name="" id="" placeholder='serarch for bike'    /><button className='btn btn-outline-primary mb-2'>Search <FcSearch></FcSearch></button></h2>
                
                </div>
               
                    

            </div>
            
        </div>
    );
};

export default Home;