import {useState} from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
export default function GameBoard({playerSymbol, onUpdatePlayer}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

      if (updatedGameBoard[rowIndex][colIndex] === null) {
        updatedGameBoard[rowIndex][colIndex] = playerSymbol;

        // Update the state for player from here
      }

      return updatedGameBoard;
    });

    onUpdatePlayer();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> {col} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}