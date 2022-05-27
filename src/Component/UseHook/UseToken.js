import { useState,useEffect } from "react"

const useToken = (user) =>{
    const[token,setToken]= useState('')

    useEffect(()=>{
  const email= user?.user?.email
  const userCurrent={email:email}
  if(email){
      fetch(`http://localhost:5000/user/${email}`,{
        method: 'PUT',
        headers: { 
            'content-type':'application/json'
     },
 
     body: JSON.stringify(userCurrent)
    })
    .then(res=>res.json())
    .then(result=>
     {
         console.log('usetoken',result)
         const token= result.token
         localStorage.setItem('token',token)
         setToken(token)
    })
  }
    },[user])
    return[token]
}

export default useToken