import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = () => {
    const token = useSelector((state) => state.auth.token);
  

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
