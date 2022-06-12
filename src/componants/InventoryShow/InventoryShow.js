import React from 'react';
import './InventoryShow.css'

const InventoryShow = ({bike}) => {
    console.log(bike);
    const {picture , name ,aboutProduct} = bike;

    return (
        <div>
            <div className = 'containerr'>
    <div className = 'card'>
      <div className = 'image'>
        {/* <img  src =""> */}
        <img className=' img-bike' src={picture} alt="" />
      </div>
      <div className = 'content'>
        <h3>{name}</h3>
        <p>{aboutProduct.slice(0,90)}</p>
      </div>
    </div>    
  </div>

        </div>
    );
};

export default InventoryShow;