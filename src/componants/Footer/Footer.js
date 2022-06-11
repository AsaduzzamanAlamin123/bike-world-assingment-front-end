import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { AiFillHome } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
// import { GiTabletopPlayers } from 'react-icons/gi';
import { FcAbout } from 'react-icons/fc';
import { AiFillPhone } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
// import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
           
            <footer>
            
            <div className='footer container'>
                <div className='about-us'>
                    <h5 className='text-sstyle'>About Us</h5>
                    <p className='texttt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Necessitatibus nobis laborum nisi
                          magnam eligendi consectetur inventore magni 
                          eveniet est error.
                        Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Inventore soluta saepe vel
                         accusantium cupiditate debitis unde sit sed porro</p>

                </div>
                <div className='lines-utiles'>
                    <h5 className='text-sstyle'>Lines Utiles</h5>
                    <ul className='link'>
                       <Link to='/'>Home</Link>
                       <br></br>
                       <Link to='/cricketteam'>Cricket Team</Link>
                       <br></br>
                       <Link to='/legendplayer'>Legend Player</Link>
                       <br></br>
                       <Link to='/about'>About Us </Link>
                       <br></br>
                       <Link to='/about'>Contact </Link>
                       <br></br>
                       <Link to='/'>Player name</Link>
                       <br></br>
                       <Link to='/'>Last qua</Link>
                       <br></br>
                       <Link to='/'>quality</Link>
                    </ul>
                    <div className='icon'>
                    <Link to='/'><AiFillHome></AiFillHome></Link>
                    <Link to='/cricketteam'><RiTeamLine></RiTeamLine></Link>
                    {/* <Link to='/legendplayer'><GiTabletopPlayers></GiTabletopPlayers></Link> */}
                    <Link to='/about'><FcAbout></FcAbout></Link>
                    </div>
                    
                    

                </div>
                <div className='article'>
                    <h5 className='text-sstyle '>Our Latest Article</h5>
                    <p className='text-light font'>Our Cricket is a .....<br></br>
                    <small className='text-danger me-5 font'>january 20,2020</small>
                    </p>
                    <p className='text-light font'>cricket syndrom .....<br></br>
                    <small className='text-danger me-5 font'>May 20,2020</small>
                    </p>
                    <p className='text-light font'>Cricket Lover.....<br></br>
                    <small className='text-danger me-5 font'>march 20,2020</small>
                    </p>
                    

                </div>
                <div className='contact'>
                    <h5 className='text-sstyle'>Our Contact</h5>
                    <p className='font text-light'><AiFillPhone></AiFillPhone>Phone:01312019010</p>
                    <p className='font text-light'title='asaduzzamanrossow2000@gmail.com'><AiTwotoneMail></AiTwotoneMail>email:asaduzzamanr...</p>
                    <p className='font text-light'><ImLocation></ImLocation>location:Dahaka</p>  

                    <input type="text" name="" id="" placeholder='enter name'className=' rounded'/> 
                    <button className='btn btn-outline-danger btn-sm mb-1 fw-bolder fst-italic'>Search</button>
                    <div className='social'>
                   {/* <a href="https://web.facebook.com/?_rdc=1&_rdr"target='_blank'><BsFacebook></BsFacebook></a> */}
                   <a href="https://twitter.com/login" target='_blank'><AiFillTwitterCircle></AiFillTwitterCircle></a>
                   <a href="https://www.instagram.com/" target='_blank'><AiFillInstagram></AiFillInstagram></a>
               </div>
                    
                </div>
               
            </div>
            </footer>
        </div>
    );
};

export default Footer;