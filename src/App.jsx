import React, { useState } from 'react';
import './App.css';

function App() {
 const[word, setWord] = useState('')
 const[list,setList] = useState([])

const addWordToList = () => {
  if(word){
    setList(prevList => [...prevList, word])
    setWord('')
  }
}

const quickSort = (arr, left=0, right=arr.length -1) => {
  if(left < right){
    let pi = partition(arr,left,right) // pivotIndex

    quickSort(arr,left,pi-1)
    quickSort(arr,pi+1,right)
  }

  return arr
}
  const partition = (arr,left,right) => {
    let p = arr[right] //pivot
    let i = left-1

    for(let j=left ; j<right ; j++){
      if(arr[j].localeCompare(p) < 0){
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
      placeholder="Enter a word"
      value={word}
      onChange={(el) => setWord(el.target.value)}
      />

      <button onClick={addWordToList} >Add New Word</button>
      <button onClick={sortAscending}>Sort ascending</button>
      <button onClick={sortDescending}>Sort Descending</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
