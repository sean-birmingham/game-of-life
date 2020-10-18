import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.playBtn}>Play/Pause</button>
      <button onClick={props.seed}>Seed</button>
      <button onClick={props.clear}>Clear Grid</button>
    </div>
  );
};

export default Controls;
