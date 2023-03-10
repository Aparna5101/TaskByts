import { useState } from 'react';
import './App.css';

import List from "./List";
import OverBox from './OverBox';

function App() {

  let [tiles,setTiles] = useState(["text","text"]);
  let [isEdit,setIsEdit] = useState(false);
  let [index,setIndex] = useState(-1);
  let [aText,setAText] = useState("");
  let [isAdd,setIsAdd] = useState(false);

  const onEdit = (i) => {
    console.log("Edit",i);
    setAText(tiles[i]);
    setIndex(i);
    setIsEdit(true);
  }
  const onEdited = (txt,i) => {
    tiles[i] = txt
    setAText("");
    setTiles(tiles);
    setIsEdit(false);
  }
  const onAdded = (txt,type) => {
    console.log("Added");
    type == 0 ? tiles.push(txt) : tiles.unshift(txt);
    console.log(tiles);
    setTiles(tiles);
    setIsAdd(false);
  }
  const onAdd = (i) => {
    console.log("Add");
    setIsAdd(true);
  }
  const onDelete = (i) => {
    tiles=tiles.filter((v,id,a) => id != i);
    console.log(tiles);
    setTiles(tiles);
  }

  return (
    <div className="App">
      {isEdit && <OverBox onSubmit={onEdited} index={index} value={aText} />}
      {isAdd && <OverBox onSubmit={onAdded}  />}
      <div className='Header'>
        TodoList
      </div>
      <List Tiles={tiles} onDelete={onDelete} onEdit={onEdit} />
      <div className='btn' onClick={onAdd}>
         New
      </div>
    </div>
  );
}

export default App;
