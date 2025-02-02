import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
  

  return (
    <div className={`fullPage`}>
      <Router>
        <Routes>
          <Route exact path='/' element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
