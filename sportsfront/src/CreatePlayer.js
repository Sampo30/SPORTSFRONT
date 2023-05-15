import React, { useState } from 'react';
import axios from 'axios';

function CreatePlayer() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/players', { name, position });
        console.log(response.data);
        // You can perform any necessary actions after creating a player
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h2>Create Player</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
  
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  
  export default CreatePlayer;
  