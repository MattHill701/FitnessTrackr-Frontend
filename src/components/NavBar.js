import ReactDom from "react-dom";
import { Route, Switch, Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="nav-bar">
      <Link className="nav-bar-link" to="/posts">
        Workouts
      </Link>
      <Link className="nav-bar-link" to="/activities">
        Activities
      </Link>
      {isLoggedIn ? (
        <div className="auth-links">
          <button
            className="nav-bar-link"
            onClick={() => {
              localStorage.clear();
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="auth-links">
          <Link className="nav-bar-link" to="/login">
            Login
          </Link>
          <Link className="nav-bar-link" to="/register">
            Register
          </Link>
        </div>
      )}
      <Link className="nav-bar-link" to="/userpage">
        User Page
      </Link>
    </div>
  );
};

export default NavBar;
