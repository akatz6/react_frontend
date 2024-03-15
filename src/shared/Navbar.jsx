import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const auth = useSelector((state) => state.auth.token);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!auth && (
              <div className="registerLogin">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </div>
            )}
            {auth && (
              <div className="registerLogin">
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendar">
                    Calendar
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
