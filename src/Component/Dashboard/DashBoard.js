import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const DashBoard = () => {
    
    return (
        <div className="info">
            <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content text-center">
  <h2 className="text-danger text-center mt-5">Welcome to my Dashboard</h2>
  <Outlet></Outlet>
  <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    {/* <!-- Page content here --> */}
      <li><Link to="/dashboard"> My order</Link></li>
      <li><Link to ="/dashboard/review">Review</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashBoard;