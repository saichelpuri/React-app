// src/App.js
import React, { useState } from "react";

const initialBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

function SudokuGame() {
  const [board, setBoard] = useState(initialBoard);

  const handleChange = (e, row, col) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 9) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = value;
      setBoard(newBoard);
    }
  };

  return (
    <div className="game">
      <h1>Sudoku</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                className="cell"
                type="number"
                min="1"
                max="9"
                value={cell || ""}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                disabled={initialBoard[rowIndex][colIndex] !== null}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SudokuGame;
