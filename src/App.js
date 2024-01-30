import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* style the links below */}
        <div className='link-menu' >
          <Link className='menu-item' to='/effect'>useEffect Examples</Link>
          <Link className='menu-item' to='/ref'>useRef Examples</Link>
          <Link className='menu-item' to='/memo'>useMemo Example</Link>
          <Link className='menu-item' to='/context'>context API Example</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
