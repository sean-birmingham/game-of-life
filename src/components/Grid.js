import React from 'react';
import Box from './Box';

const Grid = (props) => {
  const width = props.cols * 16;
  let rowsArray = [];

  let boxClass = '';

  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let boxId = `${i}_${j}`;

      boxClass = props.fullGrid[i][j] ? 'box on' : 'box off';

      rowsArray.push(
        <Box key={boxId} boxClass={boxClass} boxId={boxId} row={i} col={j} />
      );
    }
  }

  return (
    <div className='grid' style={{ width: width }}>
      {rowsArray}
    </div>
  );
};

export default Grid;
