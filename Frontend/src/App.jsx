// import FoodDetails from "./Pages/FoodDetails";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import PostFood from "./Pages/Restaurant/RestaurentFoodPost";
import RestDash from "./Pages/Restaurant/RestarentDashBoard";
import RequestsPage from "./Pages/Restaurant/RequestsPage";
import ManagePostsPage from "./Pages/Restaurant/ManagePostsPage";
import NgoRequest from "./Pages/NGO/NgoRequest";
import NgoDashBoard from "./Pages/NGO/NgoDashBoard";
import ManageRequests from "./Pages/NGO/ManageRequests";
import Login from "./Pages/Login/Login";
import SignUpPage from "./Pages/Signin/SignUpPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/" element={<FoodDetails />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<PostFood />} /> */}
          {/* <Route path="/" element={<RestDash />} /> */}
          {/* <Route path="/" element={<RequestsPage />} /> */}
          {/* <Route path="/" element={<ManagePostsPage />} /> */}
          {/* <Route path="/" element={<NgoRequest />} /> */}
          {/* <Route path="/" element={<NgoDashBoard />} /> */}
          {/* <Route path="/" element={<ManageRequests />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<SignUpPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
