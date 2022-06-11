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

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory'element={<Inventory></Inventory>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
