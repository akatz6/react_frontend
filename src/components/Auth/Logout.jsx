import { useEffect } from "react";
import { useLogoutMutation } from "./AuthSlice";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  });
  return <div>Logout</div>;
}
