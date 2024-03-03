import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/home">Counter</Link>
          </li>
          
          <li>
            <Link to="/contact">Headless Blog</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;