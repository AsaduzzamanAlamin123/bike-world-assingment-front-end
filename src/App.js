import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './componants/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './componants/Home/Home';
import Inventory from './componants/Inventory/Inventory';
import LogIn from './componants/Login/Login';
import Register from './componants/Register/Register';
import NotFound from './componants/NotFound/NotFound'
import Footer from './componants/Footer/Footer';
import BikeDetailes from './componants/BikeDetailes/BikeDetailes';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory'element={
        <RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
      }></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/bike/:bikes'element={
        <RequireAuth>
          <BikeDetailes></BikeDetailes>
        </RequireAuth>
      }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
