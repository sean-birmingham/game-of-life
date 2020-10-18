import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.playBtn}>Play/Pause</button>
    </div>
  );
};

export default Controls;
