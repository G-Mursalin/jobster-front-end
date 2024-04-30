// React Router
import { NavLink } from "react-router-dom";
// React Redux
// Utils
import links from "../utils/links";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((val) => (
        <NavLink
          to={val.path}
          key={val.id}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="icon">{val.icon}</span> {val.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
