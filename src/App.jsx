import {useState} from "react";

import Player from './components/Player.jsx';
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [gameTurns, setTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setTurns((prevTurns) => {

      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      return [
        {
          square: {row: rowIndex, col: colIndex}, player: currentPlayer
        }, ...prevTurns
      ];
    });
  }

  return (<main>
    <div id="game-container">
      {/* List of Players */}
      <ol id="players" className="highlight-player">
        <Player
          initialName={'Player 1'}
          symbol={'X'}
          activePlayer={activePlayer === 'X'}
        />
        <Player
          initialName={'Player 2'}
          symbol={'O'}
          activePlayer={activePlayer === 'O'}
        />
      </ol>

      {/* Game board */}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns}
      />
    </div>

    Logs
  </main>);
}

export default App
