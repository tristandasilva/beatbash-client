import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App h-screen flex items-center justify-center'>
      <Outlet />
    </div>
  );
}

export default App;
