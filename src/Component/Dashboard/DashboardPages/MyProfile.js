import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase-init';
import UseAdmin from '../../UseHook/UseAdmin';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    const url= `https://boiling-cove-99887.herokuapp.com/profile`
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
            <div  className="title-text">
              <h1 className="title">MY Profile</h1>
              </div>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input  className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="name" {...register("name", { required: true, maxLength: 20 })}/>
      <input value={user?.email}className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="Email" {...register("email", { required: true, maxLength: 20 })}/>
      <textarea className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="Education" {...register("Education")}/>
     
      <input className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="location" type="text" {...register("location")}/>
      <input className="mb-3 input input-bordered input-warning w-full max-w-xs" placeholder="Address" {...register("adress", { required: true, maxLength: 20 })}/>

      <input className="btn btn-warning w-50" type="submit"  value="Add Review"/>
    </form>
        </div>
    );
};

export default MyProfile;