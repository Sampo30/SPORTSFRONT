import React, { useRef } from 'react';

const UpdatePlayer = () => {
  const idRef = useRef();
  const nameRef = useRef();
  const numberRef = useRef();
  const positionRef = useRef();
  const goalsRef = useRef();
  const assistsRef = useRef();
  const pointsRef = useRef();

  const updatePlayer = async () => {
    try {
      const id = idRef.current.value;
      const updatedPlayer = {};

      if (nameRef.current.value.trim() !== '') {
        updatedPlayer.name = nameRef.current.value.trim();
      }

      if (numberRef.current.value.trim() !== '') {
        updatedPlayer.number = parseInt(numberRef.current.value.trim());
      }

      if (positionRef.current.value.trim() !== '') {
        updatedPlayer.position = positionRef.current.value.trim();
      }

      if (goalsRef.current.value.trim() !== '') {
        updatedPlayer.goals = parseInt(goalsRef.current.value.trim());
      }

      if (assistsRef.current.value.trim() !== '') {
        updatedPlayer.assists = parseInt(assistsRef.current.value.trim());
      }

      if (pointsRef.current.value.trim() !== '') {
        updatedPlayer.points = parseInt(pointsRef.current.value.trim());
      }

      const response = await fetch(`https://sports-api-o5gx.onrender.com/players/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPlayer),
      });

      if (response.ok) {
        alert('Player updated successfully');
      } else {
        throw new Error('Failed to update player');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Update Player</h2>
      <div>
        <label>Player ID:</label>
        <input type="text" ref={idRef} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" ref={numberRef} />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" ref={positionRef} />
      </div>
      <div>
        <label>Goals:</label>
        <input type="text" ref={goalsRef} />
      </div>
      <div>
        <label>Assists:</label>
        <input type="text" ref={assistsRef} />
      </div>
      <div>
        <label>Points:</label>
        <input type="text" ref={pointsRef} />
      </div>
      <button onClick={updatePlayer}>Update Player</button>
    </div>
  );
};

export default UpdatePlayer;
