import './App.css';
import { Outlet } from 'react-router-dom';
import FestivalReviewScreen from './screens/FestivalReviewScreen';

function App() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
