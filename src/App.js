import React, { useState } from 'react';
import Grid from './components/Grid';

function App() {
  let speed = 100;
  let rows = 30;
  let cols = 50;

  const [generation, setGeneration] = useState(0);
  const [fullGrid, setFullGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  return (
    <div>
      <h1>Game of Life</h1>
      <Grid fullGrid={fullGrid} rows={rows} cols={cols} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

export default App;
