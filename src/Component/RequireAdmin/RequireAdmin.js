import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase-init';
import Loading from '../Loading/Loading';
import UseAdmin from '../UseHook/UseAdmin';

const RequireAdmin = ({children}) => {
    const[user,loading]= useAuthState(auth)
    const location= useLocation()
    const [admin,adminLoading]= UseAdmin(user)
    if(loading || adminLoading){
        return <Loading></Loading>
    }
  if(!user || !admin){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
 
    return children
};


export default RequireAdmin;