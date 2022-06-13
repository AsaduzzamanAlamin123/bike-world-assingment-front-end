import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryShow from '../InventoryShow/InventoryShow';
import Slider from '../Slider/Slider';



const Inventory = () => {
    const [bikes , setBikes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res=>res.json())
        .then(data=>setBikes(data))

    },[])
    return (
        <div>

            <div>
                <Slider></Slider>
            </div>
            <h3 className='text-center text-danger'>All Products</h3>
           
            <div className='card-div'>
                {
                    bikes.map(bike =><InventoryShow key={bike._id} bike={bike}></InventoryShow>)
                }
                </div>
                <Link className='mnb' to='/new'>Add new products</Link>

        </div>
    );
};

export default Inventory;