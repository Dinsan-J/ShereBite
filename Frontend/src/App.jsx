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
import SignUpPage from "./Pages/SignUp/SignUpPage";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                authUser.role === "restaurant" ? (
                  <RestDash />
                ) : authUser.role === "ngo" ? (
                  <NgoDashBoard />
                ) : (
                  <Navigate to="/Login" />
                )
              ) : (
                <Home /> // Show Home page for unauthenticated users
              )
            }
          />
          <Route
            path="/Login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/Signup"
            element={authUser ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route path="/NgoRequest" element={<NgoRequest />} />
          <Route path="/ManageRequests" element={<ManageRequests />} />
          <Route path="/Requests" element={<RequestsPage />} />
          <Route path="/ManagePost" element={<ManagePostsPage />} />
          <Route path="/post-food" element={<PostFood />} />
          <Route path="/Ngodash" element={<NgoDashBoard />} />
          <Route path="/Restdash" element={<RestDash />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
