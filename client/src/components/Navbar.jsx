import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3>Job Board</h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
