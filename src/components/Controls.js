import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.playBtn}>Play</button>
      <button onClick={props.pauseBtn}>Pause</button>
    </div>
  );
};

export default Controls;
