// import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbars/Navbar'
import Sidebar from './components/navbars/Sidebar'

function App() {
  return (
    <div className='app'>
      <div className='layout'>
        <div className='item a'>
          <Sidebar />
        </div>
        <div className='item b'>
          <Navbar />
        </div>
        <div className='item c'>
          C
        </div>
        <div className='item d'>
          D
        </div>
        <div className='item e'>
          E
        </div>
      </div>
    </div>
  );
}

export default App;
