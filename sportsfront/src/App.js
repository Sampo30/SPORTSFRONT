import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('/players'); // Make sure to use the correct route path
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPlayer = async () => {
    try {
      const newPlayer = {
        name: 'John Doe', // Replace with the desired player data
        age: 25,
        position: 'Forward',
      };

      const response = await axios.post('/players', newPlayer); // Make sure to use the correct route path
      console.log(response.data);
      fetchPlayers(); // Refresh the player list after creating a new player
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Floorball Team Database</h1>
      <button onClick={createPlayer}>Create Player</button>
      {/* Add other buttons for different routes */}
      <ul>
        {players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
