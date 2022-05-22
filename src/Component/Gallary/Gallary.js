import React from 'react';
import { Card } from 'react-bootstrap';
import gallary from '../../image/gallary-1.jpg'
import gallary1 from '../../image/gallary-2.jpg'
import gallary2 from '../../image/gallary-4.jpg'
import gallary3 from '../../image/gallary-5.jpg'
import './Gallary.css'

const Gallary = () => {
    return (
        <div className="info">
             <div  className="title-text">
              <h1 className="title">Our Professional Project</h1>
              <p className="fw-bold text-warning">Gallary</p>
              </div>
              <div className="gallary">    
              <Card.Img variant="top" src={gallary} />
              <Card.Img variant="top" src={gallary1} />
              <Card.Img variant="top" src={gallary2} />
              <Card.Img variant="top" src={gallary3} />
              <Card.Body>
              </Card.Body>
            </div>
              
            </div>
       
    );
};

export default Gallary;

