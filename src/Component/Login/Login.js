import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import Loading from '../Loading/Loading';
import auth from '../../firebase-init';


const Login = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, loading2, error2] = useSendPasswordResetEmail(
        auth );
      
const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
      const navigate= useNavigate()
      let location = useLocation();
 

  let from = location.state?.from?.pathname || "/";


    const handleEmailBlur = (e) =>{
        setEmail(e.target.value)
     }
     
     const handlePasswordBlur = e =>{
         setPassword(e.target.value)
     }

if(user){
navigate(from, { replace: true })
}
if(user1){
    navigate(from, { replace: true })
    }


     const handleSignIN =(e) =>{
        e.preventDefault()
        if (error) {
            return   
          }
          if (loading) {
            return 
          }

          if (error1) {
            return   
          }
          if (loading1) {
            return 
          }
          if (error2) {
            return   
          }
          if (loading2) {
            return 
          }

        signInWithEmailAndPassword(email,password)
     }
    return (
        <div className="login">
       <div  className="title-text">
              <h1 className=" text-warning fw-bold mt-5 ">Please Login</h1>
              </div>
           <Form onSubmit={handleSignIN} className="w-50 m-auto">     
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label className="fw-bold">Email address</Form.Label>
    <Form.Control onBlur={ handleEmailBlur} type="email" placeholder="Enter email" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label className="fw-bold">Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
    <Button onClick={async () => {
      if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }
      else{
        toast('Please Enter Your Email')
      }
         
        }} variant="link" type="submit">Forget password?</Button>
         <ToastContainer />
    <p className="text-danger">{error2?.message}</p>
 {
     loading2 && <Loading></Loading>
 }

  </Form.Group>
  
 <p className="text-danger">{error?.message}</p>
 {
     loading && <Loading></Loading>
 }
    
  <p className=" fw-bold"> 
  Sign Up For Painting Company? <Link className="text-secondary fw-bold text-decoration-none" to="/signup">Create an account</Link>
</p>
  <Button type="submit" className="w-100 fw-bold" variant="warning">Login</Button>
  <br></br> <br></br>

  <div class="divider">OR</div>
      <br></br>

  {/* <Button onClick={() => signInWithGoogle()} type= "submit" className="button"> 
  <FcGoogle className="fs-4"> </FcGoogle> Continue With Google </Button> */}

<button onClick={() => signInWithGoogle()}type= "submit"  className="btn btn-active btn-accent w-100 ">
 Continue With Google
  </button>
  <p className="text-danger">{error1?.message}</p>
 {
     loading1 && <Loading></Loading>
 }
</Form>

        </div>
    );
};

export default Login;


