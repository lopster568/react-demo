import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Ref = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* style the links below */}
        <h1>useRef</h1>
        <div className="link-menu">
          <Link className="menu-item" to="/ref/1">
            Example 1
          </Link>
          <Link className="menu-item" to="/ref/2">
            Example 2
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Ref;
