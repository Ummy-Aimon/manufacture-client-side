
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase-init';

const PurchaseRow = ({item}) => {
  // const[user]= useAuthState(auth)
  const[items,setItem]=useState([])
  const handleDelete =id=>{
    const procced= toast('Delete succesfully')
    if(procced){
const url=`https://boiling-cove-99887.herokuapp.com/purchase/${id}`
fetch(url,{
method: 'DELETE',
})
.then(res=>res.json())
.then(data=>{
console.log(data)
const del= items.filter(tool=>tool._id!==id)
setItem(del)

})
}
}
 const{Name,email,qurantity,phone,price,paid,_id,transaction}=item
    return (
            <tr>
        <th></th>
        <td>{Name}</td>
        <td>{email}</td>
        <td>{qurantity}</td>
        <td>{phone}</td>
        {(price && !paid) && 
        <td> <Link to={`/dashboard/payment/${_id}`}>
          <button className="btn btn-primary">Pay</button></Link> <button onClick={()=>handleDelete(item._id)}className="btn btn-danger">Cancle
          </button>
          </td>}
          <ToastContainer></ToastContainer>
        <td>
          {(price && paid) && <div>
            <Button className="text-dark fw-bold">paid</Button>
            <p className="text-danger fw-bold">transaction id:{transaction}</p>
          </div>}
          </td>
   
        
      </tr>
       
    );
};

export default PurchaseRow;