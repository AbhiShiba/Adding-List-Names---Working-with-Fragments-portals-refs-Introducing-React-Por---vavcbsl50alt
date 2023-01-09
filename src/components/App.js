import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [name,setName] = useState(null);
  const [list,setList] = useState([]);

  const eventChange = (e) => {
    setName(e.target.value);
  }

  const eventSubmit = () => {
    setList([...list,name])
    setName(null);
  }

  return (
    <div id="main">
       <input id="input" value={name} onChange={eventChange} />
      <button id="button" onClick={eventSubmit}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
