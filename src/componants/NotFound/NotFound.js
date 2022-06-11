import React from 'react';
import './NotFound.css'
import NotFoundd from '../MyImage/pexels-ivan-babydov-7788609.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
                <div>
            <img className='four-pic' src={NotFoundd} alt="" />
                </div>
                <div>
                <h1>404</h1>
                </div>
            </div>
            
        </div>
    );
};

export default NotFound;