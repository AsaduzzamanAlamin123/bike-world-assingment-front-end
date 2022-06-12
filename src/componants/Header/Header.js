import React, { useEffect } from 'react';
import './Header.css';
import { Navbar , Nav , Container} from 'react-bootstrap';
import { Link  } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebse/Firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(error);
  
  const logout = () => {
    signOut(auth);
  };
  if(loading){
    return <p className='text-center'>{loading}</p>
  }
  
    return (
        <div>
            
            <Navbar className='nav-bg  rounded' variant="dark">
    <Container>
    {/* <Navbar.Brand href="#home">Bike World</Navbar.Brand> */}
    <Link className='logo' to='/'>Bike World</Link>
    <Nav className="me-auto menu">
      <Link to='/'>Home</Link>
      <Link to='/inventory'>Inventory</Link>
      
      
      <Link to='/register'>Register</Link>
    </Nav>
    <Nav className="ms-auto">

       {
         user ?  <button onClick={logout} className='btn btn-primary'>Log Out <FaUser></FaUser></button>
         :
         <button className='btn btn-success' ><Link to='/login'><FaUser></FaUser></Link></button>

        
       }
       
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;