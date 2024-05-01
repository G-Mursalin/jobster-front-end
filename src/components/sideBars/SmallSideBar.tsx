// CSS
import Wrapper from "../../assets/wrappers/SmallSidebar";
// React Icons
import { FaTimes } from "react-icons/fa";
// Components
import Logo from "../Logo";
import NavLinks from "../NavLinks";
// Redux Toolkit
import {
  selectCurrentSidebarStates,
  setToggleSidebar,
} from "../../redux/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const SmallSideBar = () => {
  const { isSidebarOpen } = useAppSelector(selectCurrentSidebarStates);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(setToggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
