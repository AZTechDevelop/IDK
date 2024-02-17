import React, { useState } from 'react';
import NewTask from './NewTask'; 
import SortTask from './SortTask'; 
import '../App.css';

function QuickSort() {
  const [word, setWord] = useState('');
  const [list, setList] = useState([
    { id: 1, name: "basic task true", isImportant: true },
   { id: 2, name: "basic task false", isImportant: false },
  ]);

  const addWordToList = () => {
    if (word.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: word,
        isImportant: false,
      };
      setList((prevList) => [...prevList, newTask]);
      setWord('');
    }
  };

  const toggleImportant = (taskId) => {
    setList(list.map(task => 
      task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
    ));
  };

  const deleteTask = (taskId) => {
    setList(list.filter(task => task.id !== taskId));
  };

  const sortAscending = () => {
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  };

  const sortDescending = () => {
    const sortedList = [...list].sort((a, b) => b.name.localeCompare(a.name));
    setList(sortedList);
  };

  return (
    <div className="App">
      <NewTask 
        word={word} 
        setWord={setWord} 
        addWordToList={addWordToList} 
      />
      <SortTask 
        list={list} 
        sortAscending={sortAscending} 
        sortDescending={sortDescending}
        onDelete={deleteTask} 
        toggleImportant={toggleImportant}
      />
    </div>
  );
}

export default QuickSort;
