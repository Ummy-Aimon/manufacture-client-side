import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init';
import PurchaseRow from './PurchaseRow';

const MyOrder = () => {
    const[user]= useAuthState(auth)
    const[items,setItem]=useState([])
    useEffect(()=>{
    const getItem = async()=>{
        const email= user?.email
           const url=
   `https://boiling-cove-99887.herokuapp.com/purchase?email=${email}`
   const{data}= await axios.get(url)
   setItem(data)
    }
    getItem()
       },[user])
    return (
        <div>
            < div className="title-text">
              <h1 className="title">MY Order</h1>
              </div>
 <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Qurantity</th>
        <th>Phone Number</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
             {
               items.map(item=><PurchaseRow key={item._id} item={item}>   
          </PurchaseRow>)
          }
      
    </tbody>
  </table>
</div>
                
        </div>
    );
};

export default MyOrder;