import React, { useEffect, useState } from 'react';
import Bike from '../MyImage/pexels-cottonbro-5195634.jpg';
import Bike1 from '../MyImage/pexels-arthouse-studio-6068905.jpg';
import './Home.css';
import { FcSearch } from 'react-icons/fc';
import InventoryShow from '../InventoryShow/InventoryShow';
import { Link } from 'react-router-dom';
// 

const Home = () => {
    const [bikes , setBikes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res =>res.json())
        .then(data => setBikes(data))
    },[])
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
                <h2 className='text-center mt-5'><input className='field' type="text" name="" id="" placeholder='serarch for bike'    /><button className='btn btn-success mb-2'>Search <FcSearch></FcSearch></button></h2>
                
                </div>
               
                    

            </div>
            <h4 className='text-center text-danger mt-3'>Some Product</h4>
            <div className='card-div'>
                
                {
                    bikes.slice(0,6).map(bike =><InventoryShow key={bike._id} bike={bike}></InventoryShow>)
                }
               
            </div>
            <Link className='text-decoration-none ms-5' to='/inventory'>See More...</Link>
            <div className='setion1'>
                <div className='text-part'>
                    <p> wooden rims, a leading-link front suspension fork,
                         a Garford spring saddle, a Duck Brake Company front roller brake,
                          and a 1902-patent Atherton rear coaster brake.[2][5][7] A leather belt-drive with a
                           spring-loaded idler pulley directly connected the engine output shaft to the rear wheel.[5] Using 
                           a standard steel bicycle frame, the California weighed approximately 70–80 pounds (32–36 kg) without rider, and was
                           
                     capable of approximately 25 mph (40 km/h) using the 30-octane gasoline of the day, with a range of 75 to
                      100 miles (121 to 161 km).[5][8] Throttle control was not yet perfected, and engine revolutions were mainly 
                      controlled by means of a spark timing mechanism.[5] The wick-type carburetor was crude, consisting of a metal
                       box with internal baffles stuffed with cotton
                         batting.[9] With no float chamber, the rider had to open the gasoline tap periodically to admit fuel into the carburetor.
                     capable of approximately 25 mph (40 km/h) using the 30-octane gasoline of the day, with a range of 75 to
                      100 miles (121 to 161 km).[5][8] Throttle control was not yet perfected, and engine revolutions were mainly 
                      controlled by means of a spark timing mechanism.[5] The wick-type carburetor was crude, consisting of a metal
                       box with internal baffles stuffed with cotton
                         batting.[9] With no float chamber, the rider had to open the gasoline tap periodically to admit fuel into the carburetor.
                     capable of approximately 25 mph (40 km/h) using the 30-octane gasoline of the day, with a range of 75 to
                      100 miles (121 to 161 km).[5][8] Throttle control was not yet perfected, and engine revolutions were mainly 
                      controlled by means of a spark timing mechanism.[5] The wick-type carburetor was crude, consisting of a metal
                       box with internal baffles stuffed with cotton
                         batting.[9] With no float chamber, the rider had to open the gasoline tap periodically to admit fuel into the carburetor.</p>

                </div>
                <div className='imgg-part '>
                    <img  className='img-part' src={Bike1} alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default Home;