import { Route, Routes } from 'react-router-dom';
import './App.css';
import Achievement from './Component/Achievement/Achievement';
import Blog from './Component/Blog/Blog';
import DashBoard from './Component/Dashboard/DashBoard';
import MyOrder from './Component/Dashboard/DashboardPages/MyOrder';
import MyProfile from './Component/Dashboard/DashboardPages/MyProfile';
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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/achievement" element={<Achievement></Achievement>}></Route>
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
         <Route index element={<MyOrder></MyOrder>}></Route>
         <Route path="review" element={<MyReview></MyReview>}></Route>
         <Route path="profile" element={<MyProfile></MyProfile>}></Route>
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
