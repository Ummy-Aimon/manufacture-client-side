import React from 'react';
import { useForm } from "react-hook-form";

const MyReview = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
  const url= `https://boiling-cove-99887.herokuapp.com/reviews`
   fetch(url,{
       method: 'POST',
       headers: { 
           'content-type':'application/json'
    },

    body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(result=>
    {
        console.log(result)
   })
  }
    return (
            <div className="w-50 mx-auto">
            <h1>My Review</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="name" {...register("name", { required: true, maxLength: 20 })}/>
      <textarea className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="review" {...register("review")}/>
     
      <input className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="rating" type="number" {...register("rating")}/>
      <input className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="photo Url" type="text" {...register("image")}/>
      
      <input className="btn btn-warning w-50" type="submit"  value="Add Review"/>
    </form>
        </div>
    );
};

export default MyReview;



