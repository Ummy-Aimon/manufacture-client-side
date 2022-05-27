import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const ALLOrder = () => {
    const { register, handleSubmit } = useForm();
 
 const{data:tools,isLoading}= useQuery('tools',()=>fetch('https://boiling-cove-99887.herokuapp.com/tools').then(res=>res.json()))
 if(isLoading){
     return <Loading></Loading>
 }
 const onSubmit = data => {
    const url= `https://boiling-cove-99887.herokuapp.com/order`
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
        <div className="" w-50 mx-auto>
            < div className="title-text">
              <h1 className="title">Add Order Purchase</h1>
              </div>
            <form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="Enter Name" className="input input-bordered input-warning w-full max-w-xs"
{...register("Name")}
/>
<br></br><br></br>
<input type="email" placeholder="Enter Email" className="input input-bordered input-warning w-full max-w-xs" 
{...register("email", { required: true, maxLength: 20 })}

/>
<br></br><br></br>
<select className="input input-bordered input-warning w-full max-w-xs" {...register("quantity1")}class="select w-full max-w-xs">
    {
        tools.map(tool=><option key={tool._id} 
        value={tool.quantity1} >{tool.quantity1}
        </option>)
    }
    </select>
<br></br><br></br>
<select className="input input-bordered input-warning w-full max-w-xs" {...register("name")}class="select w-full max-w-xs">
    {
        tools.map(tool=><option key={tool._id} 
        value={tool.name} >{tool.name}
        </option>)
    }
    <br></br><br></br>
    </select>
    <input type="text" placeholder="photo url" className="input input-bordered input-warning w-full max-w-xs" 
{...register("img")}
/> 
<br></br><br></br>
<button type="submit" className="btn btn-warning ">ADD</button>
</form>
        </div>
    );
};

export default ALLOrder;