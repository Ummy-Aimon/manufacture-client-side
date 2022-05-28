import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase-init';
import UseAdmin from '../UseHook/UseAdmin';


const DashBoard = () => {
  const [user]=useAuthState(auth)
  const [admin]=UseAdmin(user)
    return (
        <div className="info">
            <div class="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content text-center">
  <h2 className="text-danger text-center mt-5">Welcome to my Dashboard</h2>
  <Outlet></Outlet>
  <label for="my-drawer" className="btn btn-primary jutify-content-end drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    {/* <!-- Page content here --> */}
   {!admin && <li><Link to="/dashboard/order"> My order</Link></li>}
   { !admin && <li><Link to ="/dashboard/review">Review</Link></li>}
      <li><Link to ="/dashboard/profile">MyProfile</Link></li>
   { admin && <li><Link to ="/dashboard/users">All Users</Link></li>}
    {admin &&<li><Link to ="/dashboard/allorder">Add order</Link></li>}
   {admin && <li><Link to ="/dashboard/manageorder">Manage Product</Link></li>}
   {admin && <li><Link to ="/dashboard/manage">Manage Order</Link></li>}
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashBoard;