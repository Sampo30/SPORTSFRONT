import React, { useState } from 'react';

const FetchPlayer = () => {
  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState(null);

  const fetchPlayerData = async () => {
    try {
      const response = await fetch('https://sports-api-o5gx.onrender.com/players/' + playerId);
      
      if (!response.ok) {
        throw new Error('Failed to fetch player data');
      }
      
      const data = await response.json();
      setPlayer(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleFetchPlayer = () => {
    fetchPlayerData();
  };

  return (
    <div>
      <h2>Fetch Player</h2>
      <div>
        <label>Player ID:</label>
        <input
          type="text"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
        />
        <button onClick={handleFetchPlayer}>Fetch Player</button>
      </div>
      {player ? (
        <div>
          <h3>Player Details</h3>
          <p>Name: {player.name}</p>
          <p>Number: {player.number}</p>
          <p>Position: {player.position}</p>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Points: {player.points}</p>
        </div>
      ) : (
        <p>Loading player data...</p>
      )}
    </div>
  );
};

export default FetchPlayer;
