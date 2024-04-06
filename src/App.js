
import './App.css';
import SideBar from './components/sidebar/SideBar';
import MainContext from './components/MainContext';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar/>
      <div className='SideContent' style={{width: 'calc(100% - 150px)'}}>
      <Header/>
      <MainContext/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

