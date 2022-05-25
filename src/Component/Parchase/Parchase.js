import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';


const Parchase = (props) => {
    const navigate= useNavigate()
    const {id}= useParams()
 const[tools,setTool]= useState({})
 useEffect(()=>{
    fetch(`http://localhost:5000/tools/${id}`)
    .then(response=>response.json())
    .then(data=>setTool(data))
 },[])
 const [user] = useAuthState(auth)
 const { register, handleSubmit } = useForm();
 const onSubmit = data => console.log(data);
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
 <hr></hr>
</div>
<div className="m-5">
    <h2 className="fw-bold text-success">Please Place Order</h2>
<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" disabled value={user?.displayName} className="input input-bordered input-warning w-full max-w-xs"
{...register("Name")}
/>
<br></br><br></br>
<input type="email" disabled value={user?.email} className="input input-bordered input-warning w-full max-w-xs" 
{...register("email", { required: true, maxLength: 20 })}
/>
<br></br><br></br>
<input type="number" placeholder="Phone Number" className="input input-bordered input-warning w-full max-w-xs"
{...register("Phone Number")}
/>
<br></br><br></br>
<input type="number" placeholder="Quranty order" className="input input-bordered input-warning w-full max-w-xs"
{...register("Qurantity")}
/>
<br></br><br></br>
 {/* <button  className="btn btn warning text-white"  type="submit"/>  */}
<button type="submit" className="btn btn-warning">Submit</button>
  
</form>
</div>
</div>
    );
};

export default Parchase;