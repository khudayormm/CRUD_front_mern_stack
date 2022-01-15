import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/tools/Header';
import Home from './components/pages/Home';
import Players from './components/pages/Players';
import CreatePlayer from './components/pages/CreatePlayer';
import EditPlayer from './components/pages/EditPlayer';
import Success from './components/pages/Success';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/players" element={<Players/>} />
            <Route path="/create" element={<CreatePlayer/>} />
            <Route path="/:id" element={<EditPlayer/>} />
            <Route path="/success" element={<Success/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
