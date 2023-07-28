import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RandomSelection from './components/RandomSelection';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Index = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/random' element={<RandomSelection />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);