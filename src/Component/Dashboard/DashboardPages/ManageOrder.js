import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase-init';
import './ManageOrder.css'

const ManageOrder = () => {
  const[user]= useAuthState(auth)
  const[tools,setTool]=useState([])
  const handleDelete =id=>{
    const procced= toast('Delete succesfully')
    if(procced){
const url=`https://boiling-cove-99887.herokuapp.com/tools/${id}`
fetch(url,{
method: 'DELETE',
})
.then(res=>res.json())
.then(data=>{
console.log(data)
const del= tools.filter(tool=>tool._id!==id)
setTool(del)

})
}
}
  useEffect(()=>{
  const getItem = async()=>{
         const url=
 `https://boiling-cove-99887.herokuapp.com/tools`
 const{data}= await axios.get(url)
 setTool(data)
  }
  getItem()
     },[user])
     return(
     <div>
       <div className="title-text">
<h1 className="mt-3 text-warning fw-bold text-center">Manage Product</h1> 
</div>
<div className="content">
{
      tools.map(tool=><div key={tool._id}>
      
  <Card className="mx-auto d-block jutify-content-center mt-5" style={{ width: '18rem' }}>
   
  <Card.Img className="w-50" variant="top" src={tool.img} />
  <Card.Body>
  <Card.Title>{tool.name}<button className="btn btn danger"  onClick={()=>handleDelete(tool._id)}>X</button></Card.Title>
  <ToastContainer></ToastContainer>
  <Card.Text>
    <h6>{tool.description}</h6>
  <p> <b>Order Qurantity:</b>{tool.quantity1}</p>
  <p> <b>Available Qurantity:</b>{tool.quantity2}</p>
  <p> <b>Rating:</b>{tool.rating}</p>
  <p> <b>Price:</b>${tool.price}</p>
  </Card.Text>
  </Card.Body>
</Card>
</div>
 )};
 </div>
  </div>
     )
    }

    export default ManageOrder