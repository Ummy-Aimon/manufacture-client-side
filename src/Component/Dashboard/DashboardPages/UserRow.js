import React from 'react';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role}= user

    const HandleAdmin =()=>{
 fetch(`http://localhost:5000/user/admin/${email}`,{
    method: 'PUT',
    headers: { 
        'authorization': `Bearer ${localStorage.getItem('token')}`
 }
 
})
.then(res=>{
    if(res.status === 403){
        toast.error('Failed Admin')
    }
    
       return res.json()
    }
    )
.then(result=>{
    if(result.modifiedCount>0){
        refetch()
        toast('Succesfully Admin')
  }
})
}
    return (
            <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <Button onClick={HandleAdmin} className="btn btn-dark">Make Admin</Button>}</td>
        <ToastContainer></ToastContainer>
        <td><Button className="btn btn-dark">Remove Admin</Button></td>
      </tr>
       
    );
};

export default UserRow;