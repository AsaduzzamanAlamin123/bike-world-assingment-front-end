import React from 'react';
import './AddNewProduct.css';
import { FaPenFancy } from 'react-icons/fa';
import { RiMotorbikeFill } from 'react-icons/ri';
import Bike from '../MyImage/las1-removebg-preview.png'
import { Button, Form } from 'react-bootstrap';


// 

const AddNewProduct = () => {
    return (
        <div className='body'>
           
            <div>
                <div className='img-di'>
                <div className='vertical-centerr'><h1 className='add'>Add <FaPenFancy></FaPenFancy> new Products <br /> <span className='fan'>fancy One <RiMotorbikeFill></RiMotorbikeFill></span></h1></div>
               <div> <img src={Bike} alt="" /></div>
                </div>
              <div>
              <Form className='w-75 mx-auto mb-5'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='price' placeholder="Enter price" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='quantity' placeholder="Add quqntity" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='engine' placeholder="Enginee Capacity" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='topSpeed' placeholder="Higest Speed" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='picture' placeholder="Add picture" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='Name' placeholder="Bike Name" required />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='suplierName' placeholder="Supplier Name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='company' placeholder="Company Name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    {/* <Form.Control type="textarea" name='aboutProduct' placeholder="Description" /> */}
    <textarea className='rounded' name="aboutProduct" id=""placeholder="Description" required cols="132" rows="5"></textarea>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" name='discoveredCountry' placeholder="company origin" required/>
    
  </Form.Group>

  
 
  <Button className='w-100 mb-5 fw-bolder fst-italic' variant="danger" type="submit">
   <RiMotorbikeFill></RiMotorbikeFill> Add bike Information
  </Button>
</Form>
              </div>
            </div>
        </div>
    );
};

export default AddNewProduct;




// {
//     "price": "121,800 Tk",
//     "quantity": "30",
//     "engine":" 125cc (air-cooled)",
//     "topSpeed":"100 Kmph (approx)",
//     "picture": "https://www.banglamotor.net/images/honda/honda-vario-125-image1.jpg",
//     "name": "Honda Vario 125",
//     "suplierName": "Allison Hartman",
//     "company": "Honda",
//     "aboutProduct": "Honda Vario 125 is a big name in today's world. Which is a great asset to the global motorcycle industry, including Bangladesh. The Japanese brand Yamaha first introduced their R15 bike to the world in 2008. Following its widespread success, Yamaha has been regularly updating the R15 bike. As part of this, Yamaha launched R15 V2, R15 V3 and currently R15M in the global market including Bangladesh. Yamaha's latest addition to the Bangladesh market is the Yamaha R15M, which is a sleek sports bike with the same attractive features as ever. Let’s take a look at the key features and evaluation of the Yamaha R15M bike",
//     "discoveredCountry": "India"
//   },