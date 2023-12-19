import './App.css';
import { Outlet } from 'react-router-dom';
import { auth } from './firebase.js';

function App() {
  return (
    <div className='App flex items-center justify-center'>
      <Outlet />
    </div>
  );
}

export default App;
