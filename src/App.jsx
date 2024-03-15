import "./App.css";
import Navbar from "./shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Edit from "./components/User/Edit";
import Users from "./components/Users/Users";
import CalendarPage from "./components/Calendar/CalendarPage";
import Logout from "./components/Auth/Logout";
import { ProtectedRoute } from "./shared/ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/users" element={<ProtectedRoute />}>
            <Route path="/users" element={<Users />}></Route>
          </Route>
          <Route path="/edit/:id" element={<ProtectedRoute />}>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Route>
          <Route path="/calendar" element={<ProtectedRoute />}>
            <Route path="/calendar" element={<CalendarPage />}></Route>
          </Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
