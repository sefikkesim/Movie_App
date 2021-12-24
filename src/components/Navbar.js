import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className=" navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand " href="/" style={{ color: "white" }}>
          React Movie App
        </a>
        <div className="buttons">
          {currentUser ? (
            <h3>{currentUser.displayName}</h3>
          ) : (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
          {currentUser ? (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => null}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
