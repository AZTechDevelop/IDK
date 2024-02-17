import React from 'react';

function NewTask({ word, setWord, addWordToList }) {
  return (
    <div>
      <input 
        type="text"
        placeholder="Enter a Task"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={addWordToList}>Add New Task</button>
    </div>
  );
}

export default NewTask;
