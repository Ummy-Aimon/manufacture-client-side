import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import DashBoard from './Component/Dashboard/DashBoard';
import MyOrder from './Component/Dashboard/DashboardPages/MyOrder';
import MyReview from './Component/Dashboard/DashboardPages/MyReview';
import Gallary from './Component/Gallary/Gallary';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Parchase from './Component/Parchase/Parchase';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Review from './Component/Review/Review';
import SignUp from './Component/SignUp/SignUp';
import Team from './Component/Team/Team';
import Footer1 from './Shared/Footer/Footer';
import Homepage from './Shared/HomePage/Homepage';
import Profile from './Component/Profile/Profile';
import UserName from './Component/Dashboard/DashboardPages/UserName';
import ALLOrder from './Component/Dashboard/DashboardPages/ALLOrder';
import ManageOrder from './Component/Dashboard/DashboardPages/ManageOrder';
import RequireAdmin from './Component/RequireAdmin/RequireAdmin';
import MyProfile from './Component/Dashboard/DashboardPages/MyProfile';
import Payment from './Component/Dashboard/DashboardPages/Payment';


function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
         <Route path="/team" element={<Team></Team>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp></SignUp>}></Route>
         <Route path="/dashboard" 
         element={
           <RequireAuth>
         <DashBoard></DashBoard>
         </RequireAuth>
         }>
         <Route path="order" element={<MyOrder></MyOrder>}></Route>
         <Route path="review" element={<MyReview></MyReview>}></Route>
         <Route path="payment/:id" element={<Payment></Payment>} ></Route>
         <Route path="profile" element={<MyProfile></MyProfile>}></Route>
         <Route path="users" element={
           <RequireAdmin>
           <UserName></UserName>
           </RequireAdmin>}></Route>
         <Route path="allorder" element={<ALLOrder></ALLOrder>}></Route>
         <Route path="manageorder" element={<ManageOrder></ManageOrder>}></Route>
         </Route>
         <Route path="/blog" element={<Blog></Blog>}></Route>
         <Route path="/gallary" element={<Gallary></Gallary>}></Route>
         <Route path="/tools/:id"
          element={
            <RequireAuth>
          <Parchase></Parchase>
          </RequireAuth>
          }></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    <Footer1></Footer1>
    </div>
  );
}

export default App;
