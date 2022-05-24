import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Parchase = (props) => {
    const navigate= useNavigate()
    const {id}= useParams()
 const[tools,setTool]= useState({})
 useEffect(()=>{
    fetch(`http://localhost:5000/tools/${id}`)
    .then(response=>response.json())
    .then(data=>setTool(data))
 },[])

    return (
        <div className="info">
            <div  className="title-text">
              <h1 className="title">Purchase Pages</h1>
         <p className="fw-bold text-warning">PaintBlush Tools</p>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <img src={tools.img} alt="" />
                      </div>
                      <div className="col-md-6">
                      
  <Card.Body className="mt-5 shadow p-3 mb-5 bg-body rounded">
  <Card.Title className="fw-bold text-success">{tools.name}</Card.Title>
    <Card.Text className="text-justify">
      {tools.description}
      <br></br>
      <br></br>

      <p><b>Minimum order:</b> {tools.quantity1} </p>
      <p><b>Available order:</b> {tools.quantity2} </p>
      
      <p><b>price:</b> ${tools.price} </p>
      </Card.Text>
  </Card.Body>
  </div>
 </div>
</div>
</div>
    );
};

export default Parchase;