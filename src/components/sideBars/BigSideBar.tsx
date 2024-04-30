// CSS
import Wrapper from "../../assets/wrappers/BigSidebar";
//Components
import Logo from "../Logo";
import NavLinks from "../NavLinks";
// Redux Toolkit
import { selectCurrentSidebarStates } from "../../redux/features/sidebar/sidebarSlice";
import { useAppSelector } from "../../redux/hooks";

const BigSideBar = () => {
  const { isSidebarOpen } = useAppSelector(selectCurrentSidebarStates);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
