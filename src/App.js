import './App.css';
import React, { useState } from 'react'

function App() {

  const [items, setItems] = useState([
    { name: "Cut grass" },
    { name: "Weed beds" },
    { name: "Turn Compost" }
  ])

  const itemNodes = items.map((item, index) => {
    return (
      <li key={index}>
        <span>{item.name}</span>
      </li>
    )
  })

  const [newItem, setNewItem] = useState('');

  const saveNewItem = (evt) => {
    evt.preventDefault();
    const copyItems = [...items];
    copyItems.push({ name: newItem });
    setItems(copyItems);
    setNewItem("")
  }

  const handleItemInput = (evt) => {
    setNewItem(evt.target.value)
  }

  return (
    <div className="App">

      <h1>Dodo List</h1>
      <hr></hr>

      <form onSubmit={saveNewItem}>
        <label htmlFor='new-item'>Save item:</label>
        <input id='new-item' type='text' value={newItem} onChange={handleItemInput} />
        <input type='submit' value='Save new item' />
      </form>

      <ul>
        {itemNodes}
      </ul>


    </div>
  );
}

export default App;
