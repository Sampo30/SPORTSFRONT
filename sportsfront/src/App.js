import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreatePlayer from './pages/CreatePlayer';
import FetchPlayer from './pages/FetchPlayer';
import UpdatePlayer from './pages/UpdatePlayer';
import DeletePlayer from './pages/DeletePlayer';
import FetchAllPlayers from './pages/FetchAllPlayers';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <nav>
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
}

export default App;
