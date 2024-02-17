import React from "react";

export default function SortTask({ list, sortAscending, sortDescending, onDelete, toggleImportant }) {
  const styles = {
    width: '50px',
    height: '45px',
    border: '2px solid white',
    color: 'white',
    fontSize: '36px',
    margin: 'auto',
    backgroundColor: 'inherit',
  };

  const importantStyles = {
    color: 'red',
    fontSize: '28px',
  };

  const normalStyles = {
    fontSize: '28px',
    color:'white'
  };

  return (
    <div>
      <button onClick={sortAscending}>Sort Ascending</button>
      <button onClick={sortDescending}>Sort Descending</button>
      <ul>
        {list.map((task) => (
          <React.Fragment key={task.id}>
            <li style={task.isImportant ? importantStyles : normalStyles}>
              {task.name}
              <input 
                type="checkbox" 
                checked={task.isImportant}
                onChange={() => toggleImportant(task.id)}
                style={{ marginLeft: '10px' }}
              />
              <button onClick={() => onDelete(task.id)} style={styles}>X</button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
