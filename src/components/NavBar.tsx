// React
import { useState } from "react";
// CSS
import Wrapper from "./../assets/wrappers/Navbar";
// React Icons
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
// Components
import Logo from "./Logo";
// Redux Toolkit
import { logOut } from "../redux/features/auth/authSlice";
import { setToggleSidebar } from "../redux/features/sidebar/sidebarSlice";
import { useGetMeQuery } from "../redux/features/user/userApi";
import { useAppDispatch } from "../redux/hooks";

const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetMeQuery(undefined);

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(setToggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {isLoading ? "Loading..." : data.data.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={() => dispatch(logOut())}
              type="button"
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
