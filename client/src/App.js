import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Loginauth from "./Pages/Loginauth/Loginauth";
import Signupauth from "./Pages/Signupauth/Signupauth";
import Login from "./Pages/Loginauth/Login/Login";
import Signup from "./Pages/Signupauth/Signup/Signup";
import Decide from "./Pages/Decide/Decide";
import LoginOwner from "./Pages/Loginauth/Login/LoginOwner";
import SignupOwner from "./Pages/Signupauth/Signup/SignupOwner";
import Kolkata from "./Pages/LocationsInfo/Kolkata";
import Chennai from "./Pages/LocationsInfo/Chennai";
import Gujarat from "./Pages/LocationsInfo/Gujarat";
import Delhi from "./Pages/LocationsInfo/Delhi";
import Benguluru from "./Pages/LocationsInfo/Benguluru";
import Rajasthan from "./Pages/LocationsInfo/Rajasthan";

import Dashboard from "./Pages/ShopOwner/Dashboard";
import Mycustomers from "./Pages/ShopOwner/Mycustomers";
import Mypendingorders from "./Pages/ShopOwner/Mypendingorders";
import Mydoneorders from "./Pages/ShopOwner/Mydoneorders";
import Additems from "./Pages/ShopOwner/Additems";


import Dashboardcustomer from "./Pages/Customers/Dashboardcustomer";
import Exploreshops from './Pages/Customers/Exploreshops';
import History from "./Pages/Customers/History";
import MyCart from './Pages/Customers/Mycart';
import Favouriteshops from "./Pages/Customers/Favouriteshops";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginauth" element={<Loginauth />} />
        <Route path="/signupauth" element={<Signupauth />} />
        <Route path="/signupauth/signup" element={<Signup />} />
        <Route path="/signupauth/signupowner" element={<SignupOwner />} />
        <Route path="/loginauth/login" element={<Login />} />
        <Route path="/loginauth/loginowner" element={<LoginOwner />} />
        <Route path="/decide" element={<Decide />} />
        <Route path="/locationinfo/kolkata" element={<Kolkata />} />
        <Route path="/locationinfo/chennai" element={<Chennai />} />
        <Route path="/locationinfo/gujarat" element={<Gujarat />} />
        <Route path="/locationinfo/benguluru" element={<Benguluru />} />
        <Route path="/locationinfo/rajasthan" element={<Rajasthan />} />
        <Route path="/locationinfo/delhi" element={<Delhi />} />

        
        <Route path="/owner/myshop" element={<Dashboard />} />
        <Route path="/owner/mycustomer" element={<Mycustomers />} />
        <Route path="/owner/mypendingorders" element={<Mypendingorders />} />
        <Route path="/owner/mydoneorders" element={<Mydoneorders />} />
        <Route path="/owner/additems" element={<Additems />} />


        <Route path="/customer/dashboard" element={<Dashboardcustomer />} />
        <Route path="/customer/exploreshops" element={<Exploreshops />} />
        <Route path="/customer/history" element={<History />} />
        <Route path="/customer/mycart" element={<MyCart />} />
        <Route path="/customer/favouriteshops" element={<Favouriteshops />} />
        
      </Routes>
    </>
  );
}

export default App;
