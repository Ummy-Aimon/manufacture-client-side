import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase-init';
import Loading from '../Loading/Loading';

const SignUp = () => {
   const [displayName,setdisplayName]= useState('')
   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const [confirmpassword,setConfirmPassword]= useState('')
   const [error,setError]= useState('')
  const  navigate= useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    error1,
    loading ]=
  useCreateUserWithEmailAndPassword(auth);
  const [updateProfile,updating] = useUpdateProfile(auth);


  if(error1){
      return
  }
if(loading){
return
}
if (updating) {
  return <Loading></Loading>
}
if(user){
    navigate('/')
 }

//   form even blur

const handleNameBlur = (e)=>{
  setdisplayName(e.target.value)
}
const handleEmailBlur = (e)=>{
    setEmail(e.target.value)
    }
    const handlePaswordBlur = (e)=>{
        setPassword(e.target.value)
        }
        const handleConfirmPasswordBlur = (e)=>{
            setConfirmPassword(e.target.value)
            }
            const  handleCreateUser = async (e)=>{
             
                e.preventDefault()
                if(password !== confirmpassword){
                    setError('Your password did not match')
                    return
                    }
                    if(password.length <6){
                        setError('Password must be 6 character')
                        return;
                    }
     
               await createUserWithEmailAndPassword(email, password)
                await updateProfile(displayName) 
                
            }
            
    return (
        <div className="info">
           <div  className="title-text">
              <h1 className=" text-warning fw-bold mt-5 ">Please Register</h1>
              </div>
              <Form onSubmit={handleCreateUser} className="m-auto w-50 mt-3">
              <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
  </Form.Group>          
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={ handleEmailBlur} type="email" placeholder="Enter Your email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handlePaswordBlur} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder=" Comfirm Password" required />
  </Form.Group>
  <p className="text-danger">{error}</p>
  {
loading && <Loading></Loading>
} 
  <p className="fw-bold text-secondary">Already have a account ? <Link className="text-decoration-none text-secondary" to="/login">Login</Link></p>
  <Button  className="fw-bold w-100" variant="warning" type="submit">
    Register
  </Button>
  <p className="text-danger">{error1.message}</p>
</Form>
 </div>
    );
};

export default SignUp;