import { Outlet, Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useNavigate, Navigate } from "react-router-dom";

const RouteLayout = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const loggedinUser = sessionStorage.getItem("username");

  return (
    <>
      {!isLoggedIn && <Navigate to={"/login"} replace={true} />}
      <div id="sidebar">
        <h1 onClick={handleLogout}>
          <span>
            <CiLogout />
          </span>
          Logout
        </h1>
        <div>
          <h3 className="loggedinUser">{loggedinUser}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/tables`}>Tables</Link>
            </li>
            <li>
              <Link to={`/forms`}>Forms</Link>
            </li>
            <li>
              <Link to={`/charts`}>Charts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default RouteLayout;
