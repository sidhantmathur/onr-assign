import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbars/Navbar'
import Sidebar from './components/navbars/Sidebar'

function App() {
  return (
    <div>
      <div className='layout'>
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
