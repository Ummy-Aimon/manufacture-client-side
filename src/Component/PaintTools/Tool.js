import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const{_id,name,description,quantity1,quantity2,price,img,rating}=props.tool

    // use Navigate
    const navigate= useNavigate()
    const navigatetoitemdetail =(id) =>{
      navigate(`/tools/${id}`)
    }

    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            {/* <Card style={{ width: '18rem' }}> */}
  <Card.Img variant="top" className="w-50 justify-content-center align-items-center d-block m-auto border border-secondary" src={img} />
  <Card.Body>
    <Card.Title className="fw-bold text-success">{name}</Card.Title>
    <Card.Text className="text-justify">
      {description}
      <br></br>
      <br></br>
      <div className="d-flex justify-content-between">
      <p><b>Minimum order:</b> {quantity1} </p>
      <p><b>Available order:</b> {quantity2} </p>
      </div>
      <p><b>price:</b> ${price} </p>
      <p> <b>Rating: </b> {rating}</p>
      <div className="d-flex">
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      <AiFillStar className="text-danger"></AiFillStar>
      </div>
    </Card.Text>
    <Button className="w-100 fw-bold"onClick={()=>navigatetoitemdetail(_id)} variant="warning">Buy now</Button>
  </Card.Body>
{/* </Card> */}
        </div>
    );
};

export default Tool;

