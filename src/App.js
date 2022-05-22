import { Route, Routes } from 'react-router-dom';
import './App.css';
import Achievement from './Component/Achievement/Achievement';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Review from './Component/Review/Review';
import Service from './Component/Service/Service';
import SignUp from './Component/SignUp/SignUp';
import Team from './Component/Team/Team';
import Footer1 from './Shared/Footer/Footer';
// import Footer1 from './Shared/Footer/Footer';
import Homepage from './Shared/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/achievement" element={<Achievement></Achievement>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
         <Route path="/team" element={<Team></Team>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    <Footer1></Footer1>
    </div>
  );
}

export default App;
