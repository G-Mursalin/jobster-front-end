// CSS
import Wrapper from "../../assets/wrappers/SmallSidebar";
// React Icons
import { FaTimes } from "react-icons/fa";
// Components
import Logo from "../Logo";
import NavLinks from "../NavLinks";
// Redux Toolkit
import { selectCurrentSidebarStates } from "../../redux/features/sidebar/sidebarSlice";
import { useAppSelector } from "../../redux/hooks";

const SmallSideBar = () => {
  const { isSidebarOpen } = useAppSelector(selectCurrentSidebarStates);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn">
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
