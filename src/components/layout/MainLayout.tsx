// React Router
import { Outlet } from "react-router-dom";
// CSS
import Wrapper from "../../assets/wrappers/MainLayout";
// Components
import NavBar from "../NavBar";
import BigSideBar from "../sideBars/BigSideBar";
import SmallSideBar from "../sideBars/SmallSideBar";

const MainLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default MainLayout;
