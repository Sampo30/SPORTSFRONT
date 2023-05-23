import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreatePlayer from './pages/CreatePlayer';
import FetchPlayer from './pages/FetchPlayer';
import UpdatePlayer from './pages/UpdatePlayer';
import DeletePlayer from './pages/DeletePlayer';
import FetchAllPlayers from './pages/FetchAllPlayers';
import './App.css';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span className="menu-icon"></span>
        </button>

        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/create-player">Create Player</Link>
            </li>
            <li>
              <Link to="/fetch-player">Fetch Player</Link>
            </li>
            <li>
              <Link to="/update-player">Update Player</Link>
            </li>
            <li>
              <Link to="/delete-player">Delete Player</Link>
            </li>
            <li>
              <Link to="/fetch-all-players">Fetch All Players</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create-player" element={<CreatePlayer />} />
          <Route path="/fetch-player" element={<FetchPlayer />} />
          <Route path="/update-player" element={<UpdatePlayer />} />
          <Route path="/delete-player" element={<DeletePlayer />} />
          <Route path="/fetch-all-players" element={<FetchAllPlayers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
