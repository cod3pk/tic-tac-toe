import {useState} from "react";

import Player from './components/Player.jsx';
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function updatePlayer() {
    setActivePlayer((lastPlayer) => lastPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={'Player 1'} symbol={'X'} activePlayer={activePlayer === 'X'}/>
          <Player initialName={'Player 2'} symbol={'O'} activePlayer={activePlayer === 'O'}/>
        </ol>
        <GameBoard playerSymbol={activePlayer} onUpdatePlayer={updatePlayer} />
      </div>

      Logs
    </main>
  );
}

export default App
