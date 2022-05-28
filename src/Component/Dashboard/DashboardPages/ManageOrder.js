import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init';
import './ManageOrder.css'



const ManageOrder = () => {
  const[user]= useAuthState(auth)
  const[items,setItem]=useState([])
  const handleDelete =id=>{
    const procced= window.confirm('Are You Sure?')
    if(procced){
const url=`https://boiling-cove-99887.herokuapp.com/order/${id}`
fetch(url,{
method: 'DELETE',
})
.then(res=>res.json())
.then(data=>{
console.log(data)
const del= items.filter(item=>item._id!==id)
setItem(del)

})
}
}
  useEffect(()=>{
  const getItem = async()=>{
         const url=
 `https://boiling-cove-99887.herokuapp.com:5000/tools`
 const{data}= await axios.get(url)
 setItem(data)
  }
  getItem()
     },[user])
        return (
          <div>
<h1 className="mt-3 text-warning fw-bold text-center">Manage order</h1> 
<div className="w-50 text-center">
{
    items.map(item=><div key={item._id}>
      <div className="content">
<Card className="mx-auto d-block jutify-content-cente mt-5" style={{ width: '18rem' }}>
  
<Card.Img className="w-50" variant="top" src={item.img} />
<Card.Body>
<Card.Title>{item.name}<button className="btn btn danger"  onClick={()=>handleDelete(item._id)}>X</button></Card.Title>
<Card.Text>
email:{item.email}
<p> <b>Qurantity:</b>{item.quantity1}</p>
<p> <b>Qurantity:</b>{item.quantity2}</p>
<p> <b>Qurantity:</b>{item.rating}</p>
<p> <b>Qurantity:</b>{item.price}</p>
<p> <b>Qurantity:</b>{item.rating}</p>
</Card.Text>

</Card.Body>
</Card>
</div>
    </div>)
}
</div>
</div> 
  );

}     
       
    
export default ManageOrder;