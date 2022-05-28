import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckOutFrom from './CheckoutFrom/CheckOutFrom';
const stripePromise = loadStripe('pk_test_51L3z5GFG75V9NjRCHiM86izZyqLQSPKqbPQSCpvutsv20draNokIUspRqd2TDw272JMefsP5xmlNALDwIQl8qkFp00455A8A1C');
const Payment = () => {
    const {id}=useParams()
    const{data:item,isLoading}= useQuery('purchase',()=>fetch(`https://boiling-cove-99887.herokuapp.com/purchase/${id}`).then(res=>res.json()))
 if(isLoading){
     return
 }
    return (
        <div>
            <div  className="title-text">
              <h1 className="title">Please Pay</h1>
              </div>
            <div class="card  mx-auto mt-3 w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">User Name: {item.Name}</h2>
    <div class="card-actions justify-end">
      <p className="text-danger fw-bold">Please pay for:${item.price}</p>
    </div>
  </div>
  <Elements stripe={stripePromise}>
    <CheckOutFrom item={item} />
  </Elements>
</div>


        </div>
    );
};

export default Payment;