// import logo from './logo.svg';
import './App.css';

import Stats from './components/layouts/Stats';
import Navbar from './components/navbars/Navbar'
import Sidebar from './components/navbars/Sidebar'
import Header from './components/layouts/Header'

function App() {
  return (
    <div className='app'>
      <div className='layout'>
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className='Navbar'>
          <Navbar />
        </div>
        <div className="Spacer"></div>
        <div className='Header'>
          <Header />
        </div>
        <div className='Stats'>
          <Stats />
        </div>
        <div className="Spacer2"></div>
      </div>
    </div>
  );
}

export default App;
