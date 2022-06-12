import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {useParams} from "react-router-dom";
import './BikeDetailes.css';
import { HiInformationCircle } from 'react-icons/hi';
import { TbDatabaseExport } from 'react-icons/tb';
// HiInformationCircle

const BikeDetailes = () => {
    const {bikes} = useParams();
    const [Detailes , setDetailes] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/bike/${bikes}`)
        .then(res=>res.json())
        .then(data=>setDetailes(data))
    },[])
    return (
        <div>
            <h2>Bike Detailes</h2>
            <div className='detailes-st'>
                <div>
                <img className=' rounded det-pic' src={Detailes.picture} alt="" />
                </div>
                <div className='text-det'> 
                <p>{Detailes.aboutProduct}</p>
                </div>
            </div>
            <div className='mt-5 mb-5'>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> <HiInformationCircle></HiInformationCircle> Name</th>
      <th><HiInformationCircle></HiInformationCircle> Engine</th>
      <th><HiInformationCircle></HiInformationCircle> Top speed</th>
      <th><HiInformationCircle></HiInformationCircle> Price</th>
      <th><HiInformationCircle></HiInformationCircle> Avilable Quantity</th>
      <th> <HiInformationCircle></HiInformationCircle> Company</th>
      <th><HiInformationCircle></HiInformationCircle> Brand Country</th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-data'>
      <td><TbDatabaseExport></TbDatabaseExport></td>
      <td>{Detailes.name}</td>
      <td>{Detailes.engine}</td>
      <td>{Detailes.topSpeed}</td>
      <td>{Detailes.price}</td>
      <td>{Detailes.quantity}</td>
      <td>{Detailes.company}</td>
      <td>{Detailes.discoveredCountry}</td>
    </tr>
    {/* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>
            </div>
        </div>
    );
};

export default BikeDetailes;