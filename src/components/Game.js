import React, { useState } from 'react';
import Grid from './Grid';

const Game = () => {
  let speed = 100;
  let rows = 30;
  let cols = 50;

  const [generation, setGeneration] = useState(0);
  const [fullGrid, setFullGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const arrayClone = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  };

  const selectBox = (row, col) => {
    let gridClone = arrayClone(fullGrid);
    gridClone[row][col] = !gridClone[row][col];
    setFullGrid(gridClone);
  };

  return (
    <div>
      <h1>Game of Life</h1>
      <Grid fullGrid={fullGrid} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
};

export default Game;
