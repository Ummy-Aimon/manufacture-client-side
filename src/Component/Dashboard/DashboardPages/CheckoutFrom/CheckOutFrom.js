import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutFrom = ({item}) => {
    const {price,user,useremail,_id}= item
    const[Carderror,setCardError] = useState('')
    const[success,setSuccess] = useState('')
    const[translation,setTranslation] = useState('')
    
    const stripe= useStripe()
    const element= useElements()
    const [clientSecret, setClientSecret] = useState('');

    useEffect(()=>{
        fetch('https://boiling-cove-99887.herokuapp.com/create-payment-intent', {
            method: 'POST',
            
            headers:{
              'content-type': 'application/json'  
            } ,
            
            body: JSON.stringify ({ price })
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
        }, [price]);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (element == null) {
            return;
          }
          const card= element.getElement(CardElement)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
             card,
          })
           // confirm payment
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
             {
               payment_method: {
                 card: card,
                 billing_details: {
                   name: user,
                   email:useremail
                 },
               },
             },
           );
           
            setCardError(error?.message || '') 
            setSuccess('')
            
            if(intentError){
                setCardError(intentError.error)
              
            }

            else{
              const payment= {
                appointment:_id,
                transaction:paymentIntent.id
              }
                setCardError('')
                setTranslation(paymentIntent.id)
                console.log(paymentIntent)
                setSuccess('Congratulation')
                fetch(`https://boiling-cove-99887.herokuapp.com/${_id}`,{
                  method:'PATCH',
                  headers:{
                    'content-type': 'application/json'  
                  } ,
                  
                  body: JSON.stringify (payment)
                }).then(res=>res.json())
                .then(data=>{
                  console.log(data)
                })
            }
        
  };
  
    if (!stripe || !element){
        return
    } 
 
   

    return (
        <div>
            <>
            <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
      
    </form>
    {
        Carderror && <p className="text-danger">{Carderror}</p>
    }
    {
        success && <div>
        <p className="text-warning fw-bold">{success}</p>
        <p className="text-danger fw-bold">{translation}</p>

        </div>
        

    }
            </>
        </div>
    );
};

export default CheckOutFrom;
