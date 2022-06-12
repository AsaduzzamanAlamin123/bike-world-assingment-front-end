import React from 'react';
import './Header.css';
import { Navbar , Nav , Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';


const Header = () => {
    return (
        <div>
            
            <Navbar className='nav-bg  rounded' variant="dark">
    <Container>
    {/* <Navbar.Brand href="#home">Bike World</Navbar.Brand> */}
    <Link className='logo' to='/'>Bike World</Link>
    <Nav className="me-auto menu">
      <Link to='/'>Home</Link>
      <Link to='/inventory'>Inventory</Link>
      <Link to='/inventory'>Inventory</Link>
      <Link to='/login'>Log In</Link>
      <Link to='/register'>Register</Link>
    </Nav>
    <Nav className="ms-auto">
       <h4 className='text-danger'><FaUser></FaUser></h4> 
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;