// React Router
import { Link } from "react-router-dom";
// Components
import Logo from "../components/Logo";
// Images-svg
import main from "./../assets/images/main.svg";
// CSS
import Wrapper from "./../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Search your dream jobs. Discover your workplace community. Niche job
            board for techies looking to relocate. One Search, Millions of Jobs.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
