import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);

  const handleCreatePlayer = async () => {
    try {
      const response = await axios.post('/players', { name: 'John Doe', position: 'Forward' });
      console.log(response.data);
      // Add any necessary logic after creating a player

      // Fetch the updated list of players after creating a new player
      const updatedPlayers = await axios.get('/players');
      setPlayers(updatedPlayers.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchPlayer = async () => {
    try {
      // Implement logic to fetch a specific player
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePlayer = async () => {
    try {
      // Implement logic to update a player
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePlayer = async () => {
    try {
      // Implement logic to delete a player
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchAllPlayers = async () => {
    try {
      // Implement logic to fetch all players
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/players');
        setPlayers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Floorball Team Database</h1>
      <button onClick={handleCreatePlayer}>Create Player</button>
      <button onClick={handleFetchPlayer}>Fetch Player</button>
      <button onClick={handleUpdatePlayer}>Update Player</button>
      <button onClick={handleDeletePlayer}>Delete Player</button>
      <button onClick={handleFetchAllPlayers}>Fetch All Players</button>
      <ul>
        {players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
