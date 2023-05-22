import React, { useState } from 'react';

const DeletePlayer = () => {
  const [playerId, setPlayerId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/players/${playerId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Player deleted successfully');
        // Perform any additional actions after successful deletion
      } else {
        console.log('Error deleting player');
        // Handle error scenario
      }
    } catch (error) {
      console.log('Error:', error.message);
      // Handle error scenario
    }
  };

  return (
    <div>
      <h2>Delete Player</h2>
      <label>
        Player ID:
        <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} />
      </label>
      <button onClick={handleDelete}>Delete Player</button>
    </div>
  );
};

export default DeletePlayer;
