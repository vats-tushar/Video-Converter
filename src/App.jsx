import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  function handleTheme() {
    setDark(prev=>!prev);
  }

  return (
    <div className={`fullPage ${dark ? 'darkBack' : 'lightBack'}`}>
      <Router>
        <div className={dark ? ' header-dark' : ' header-light'}>
          <span style={{fontWeight : '600', fontSize: '28px', fontFamily: 'cursive'}}>Video Converter</span>

          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" checked={dark} onChange={handleTheme}/>
              <span className="theme__fill"></span>
              <span className={dark ? 'theme__icon2' : 'theme__icon'}>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
              </span>
            </span>
          </label>
        </div>
        <Routes>
          <Route exact path='/' element={<MainPage selectTheme={dark}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
