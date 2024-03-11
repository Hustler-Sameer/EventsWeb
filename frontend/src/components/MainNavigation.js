import { Link, NavLink } from "react-router-dom";
import classes from "../components/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home{" "}
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink
                to="events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Events
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
