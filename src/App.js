import React, { useState } from 'react';
import './App.css';

function Light({ id, isOn, toggleLight }) {
  const lightStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: isOn ? 'green' : 'black',
    borderRadius: '50%',
    display: 'inline-block',
    cursor: 'pointer',
  };

  return <div style={lightStyle} onClick={() => toggleLight(id)}></div>;
}

function App() {
  const [lights, setLights] = useState(Array(9).fill(false));

  const toggleLight = (id) => {
    const newLights = [...lights];

    newLights[id] = !newLights[id];
    if (id % 3 !== 0) newLights[id - 1] = !newLights[id - 1]; 
    if (id % 3 !== 2) newLights[id + 1] = !newLights[id + 1];
    if (id - 3 >= 0) newLights[id - 3] = !newLights[id - 3];
    if (id + 3 < 9) newLights[id + 3] = !newLights[id + 3];

    setLights(newLights);
  };

  return (
    <div className="App">
      <h1>Lights On Game</h1>
      <div className="flex-container">
        {lights.map((isOn, index) => (
          <Light key={index} id={index} isOn={isOn} toggleLight={toggleLight} />
        ))}
      </div>
    </div>
  );
}

export default App;
