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
          <Link className='menu-item' to='/effect/1'>useEffect Example: 1</Link>
          <Link className='menu-item' to='/effect/2'>useEffect Example: 2</Link>
          <Link className='menu-item' to='/effect/3'>useEffect Example: 3</Link>
          <Link className='menu-item' to='/ref/1'>useRef Example: 1</Link>
          <Link className='menu-item' to='/ref/2'>useRef Example: 2</Link>
          <Link className='menu-item' to='/ref/3'>useRef Example: 3</Link>
          <Link className='menu-item' to='/memo'>useMemo Example</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
