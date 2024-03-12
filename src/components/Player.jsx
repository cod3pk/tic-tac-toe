import {useState} from "react";

export default function Player({initialName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const editHandler = () => {
    setIsEditing(editable => !editable);
  };

  const updateNameHandler = (event) => {
    setPlayerName(event.target.value);
  }

  let player = <span className='player-name'> {playerName} </span>;
  if (isEditing) {
    player = <input type='text' value={playerName} onChange={updateNameHandler} required/>
  }

  return (
    <li>
      <span className='player'>
        {player}
        <span className='player-symbol'> {symbol} </span>
      </span>
      <button onClick={editHandler}> {isEditing ? 'Save' : 'Edit'} </button>
    </li>
  );
}