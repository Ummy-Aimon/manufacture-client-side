import React from 'react';
import error from  '../../image/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="info">
            <h1 className="error-text">Ooop!</h1>
            <img className="image" src={error} alt="" />
        </div>
    );
};

export default NotFound;


