import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Context = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* style the links below */}
        <h1>Context API</h1>
        <div className="link-menu">
          <Link className="menu-item" to="/context/1">
            Example 1
          </Link>
          <Link className="menu-item" to="/context/2">
            Example 2
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Context;
