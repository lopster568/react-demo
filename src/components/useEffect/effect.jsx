import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Effect = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* style the links below */}
        <h1>useEffect</h1>
        <div className="link-menu">
          <Link className="menu-item" to="/effect/1">
            Example 1
          </Link>
          <Link className="menu-item" to="/effect/2">
            Example 2
          </Link>
          <Link className="menu-item" to="/effect/3">
            Example 3
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Effect;
