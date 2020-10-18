import React, { Component } from 'react';
import Grid from './Grid';
import Controls from './Controls';
class Game extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      gameRunning: false,
      generation: 0,
      fullGrid: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.fullGrid);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      fullGrid: gridCopy
    });
  };

  seed = () => {
    let gridCopy = arrayClone(this.state.fullGrid);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      fullGrid: gridCopy
    });
  };

  pause = () => {
    clearInterval(this.intervalID);
    this.setState({ gameRunning: false });
  };

  playBtn = () => {
    if (this.state.gameRunning === false) {
      this.intervalID = setInterval(this.play, this.speed);
      this.setState({ gameRunning: true });
    } else {
      this.pause();
    }
  };

  clear = () => {
    let grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));

    this.pause();

    this.setState({
      gameRunning: false,
      fullGrid: grid,
      generation: 0
    });
  };

  play = () => {
    let grid1 = this.state.fullGrid;
    let grid2 = arrayClone(this.state.fullGrid);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (grid1[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid1[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (grid1[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (grid1[i][j + 1]) count++;
        if (j > 0) if (grid1[i][j - 1]) count++;
        if (i < this.rows - 1) if (grid1[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (grid1[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (grid1[i + 1][j + 1]) count++;
        if (grid1[i][j] && (count < 2 || count > 3)) grid2[i][j] = false;
        if (!grid1[i][j] && count === 3) grid2[i][j] = true;
      }
    }
    this.setState({
      fullGrid: grid2,
      generation: this.state.generation + 1
    });
  };

  componentDidMount() {
    this.seed();
  }

  render() {
    return (
      <div>
        <Controls playBtn={this.playBtn} seed={this.seed} clear={this.clear} />
        <Grid
          fullGrid={this.state.fullGrid}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Game;
