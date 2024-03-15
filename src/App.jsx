import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Edit from "./components/User/Edit";
import Users from "./components/Users/Users";
import CalendarPage from "./components/Calendar/CalendarPage"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
