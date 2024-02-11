import React, { useState } from 'react';
import './App.css';

function App() {
  const[word, setWord] = useState('')
  const[list, setList] = useState([])

  const addWordToList = () => {
    if(word){
      setList(prevList => [...prevList, word])
      setWord('')
    }
  }

  const quickSort = (arr,left=0, right = arr.length - 1) => {
    if(left < right){
      let pivotIndex = partition(arr,left,right)

      quickSort(arr, left, pivotIndex - 1)
      quickSort(arr, pivotIndex+1, right)
    }
    return arr;
  }

  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1

    for(let j=left ; j<right ; j++){
      if(arr[j].localeCompare(pivot) < 0){
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    [arr[i+1], arr[right]] = [arr[right], arr[i+1]]
    return i+1

  }
  const sortAscending = () => {
    setList(prevList => quickSort([...prevList]))
  }

  const sortDescending = () => {
    setList(prevList => quickSort([...prevList]).reverse())
  }
  return (
    <div className="App">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Introduceți un cuvânt"
      />
      <button onClick={addWordToList}>Adaugă Cuvânt</button>
      <button onClick={sortAscending}>Ordonează Crescător</button>
      <button onClick={sortDescending}>Ordonează Descrescător</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
