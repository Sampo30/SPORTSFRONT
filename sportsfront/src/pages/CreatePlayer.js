import React, { useState } from 'react';
import axios from 'axios';

const CreatePlayer = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    number: 0,
    position: '',
    goals: 0,
    assists: 0,
    points: 0
  });

  const handleInputChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/players', playerData);
      console.log('Player created:', response.data);
      // Optionally, you can navigate to a different page or display a success message here
    } catch (error) {
      console.error('Error creating player:', error.message);
      // Handle the error here (display an error message, etc.)
    }
  };

  return (
    <div>
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={playerData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type="number" name="number" value={playerData.number} onChange={handleInputChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={playerData.position} onChange={handleInputChange} />
        </div>
        <div>
          <label>Goals:</label>
          <input type="number" name="goals" value={playerData.goals} onChange={handleInputChange} />
        </div>
        <div>
          <label>Assists:</label>
          <input type="number" name="assists" value={playerData.assists} onChange={handleInputChange} />
        </div>
        <div>
          <label>Points:</label>
          <input type="number" name="points" value={playerData.points} onChange={handleInputChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePlayer;
