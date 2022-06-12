import React, { useEffect, useState } from 'react';
import InventoryShow from '../InventoryShow/InventoryShow';

const Inventory = () => {
    const [bikes , setBikes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res=>res.json())
        .then(data=>setBikes(data))

    },[])
    return (
        <div>
           
            <div className='card-div'>
                {
                    bikes.map(bike =><InventoryShow key={bike._id} bike={bike}></InventoryShow>)
                }
                </div>

        </div>
    );
};

export default Inventory;