import React from 'react';
import { Card } from 'react-bootstrap';
import {AiFillStar } from 'react-icons/ai';

const Reveiws = (props) => {
    const{name,image,review,rating}=props.review
    return (
        
           <div className="shadow p-3 mb-5 bg-body rounded">
  <Card.Img variant="top" className="w-50 justify-content-center align-items-center d-block m-auto border border-secondary" src={image} />
  <Card.Body>
    <Card.Title className="fw-bold text-success text-center">{name}</Card.Title>
    <Card.Text className="text-center">
      {review}
      <p><b>Rating:</b> {rating} </p>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
    </Card.Text>
  </Card.Body>
  
        </div>
    );
};

export default Reveiws;

