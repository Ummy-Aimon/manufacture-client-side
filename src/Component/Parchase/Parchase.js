import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';


const Parchase = () => {
    const navigate= useNavigate()
    const {id}= useParams()
 const[tools,setTool]= useState({})
 useEffect(()=>{
    fetch(`https://boiling-cove-99887.herokuapp.com/tools/${id}`)
    .then(response=>response.json())
    .then(data=>setTool(data))
 },[id])
 const [user] = useAuthState(auth)


// 

 const minQuantity = tools?.quantity1
 console.log(minQuantity)
 const maxQuantity = tools?.quantity2
 const [isDesable,setDesable]=useState(false)
 const[errorElement,setErrorElement]=useState('')
 const[quantityPurchase,setQuantityPurchase]= useState(tools?.quantity1)
useEffect(()=>{
 setQuantityPurchase(tools.quantity1)
},[tools.quantity1])
 const handledisable= (e)=>{
     const orderQuantity= e.target.value;
     if(orderQuantity<minQuantity){
        setErrorElement(`order quantity must be more than ${minQuantity}`)
             setDesable(true)
         }
         else if (orderQuantity>maxQuantity){
            setErrorElement(`order quantity must be less than ${maxQuantity}`)
             setDesable(true)
         }
        
         else{
             setErrorElement('')
             setDesable(false)
             setQuantityPurchase(orderQuantity)
 }

 
 }
 const { register, handleSubmit } = useForm();
 const onSubmit = data => {
     const {price,...rest}=data
     const newdata= {...rest,price:tools.price,qurantity:quantityPurchase}
     console.log(newdata)
        const url= `https://boiling-cove-99887.herokuapp.com/purchase`
         fetch(url,{
             method: 'POST',
             headers: { 
                 'content-type':'application/json',
                 'authorization': `Bearer ${localStorage.getItem('token')}`

          },
      
          body: JSON.stringify(newdata)
         })
         .then(res=>res.json())
         .then(result=>
          {
              console.log(result)
         })
 } 
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
<form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
<input type="text" value={user?.displayName} className="input input-bordered input-warning w-full mt-3 max-w-xs"
{...register("Name")}
/>
<input type="text" value={tools.name} className="input input-bordered input-warning  mt-3 w-full max-w-xs"
{...register("name")}
/>

<input type="email"  value={user?.email} className="input input-bordered input-warning w-full  mt-3 max-w-xs" 
{...register("email", { required: true, maxLength: 20 })}
/>
<input type="text" placeholder="Phone Number" className="input input-bordered input-warning  mt-3 w-full max-w-xs"
{...register("phone")}
/>

<input type="number"  placeholder="Quranty order" className="input input-bordered input-warning  mt-3 w-full max-w-xs"
{...register("qurantity")}
defaultValue={quantityPurchase}
min={tools.quantity1}
max={tools.quantity2}
onChange={(e)=>handledisable(e)}
/>
{errorElement && <p><small className="text-danger my-2">{errorElement}</small></p>}
<input type="text" placeholder="Price"value={tools.price} className="input input-bordered  mt-3 input-warning mt-3 w-full max-w-xs"
{...register("price")}
/>
<button disabled={isDesable} type="submit" className="btn btn-warning w-full max-w-xs mt-3">Submit</button>
  
</form>
</div>
</div>
    );
};

export default Parchase;