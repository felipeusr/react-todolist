import { useState } from 'react';
import './App.css';
import Tarefas from './Components/Tarefas';
import Axios from "axios";

function App() {
  const [tarefa, setTarefa] = useState("");

  function enviar() {
    Axios.post("http://localhost:3001/enviar", {tarefa : tarefa});
  }

  return (
    <div>
      {/*Toolbar*/}
      <nav>
        <ul>
          <li>
            <img width="45" height="45" src="https://user-images.githubusercontent.com/1711854/28282651-29665d66-6af9-11e7-96d1-e9346a836007.png" />
          </li>
          <li><a>Todo List</a></li>
        </ul>
      </nav>
      {/*Toolbar*/}


      {/*Table*/}
      <div className="container">
        <Tarefas></Tarefas>
      </div>
      {/*Table*/}


      {/*Footer*/}
      <nav className="footer">
        <ul>
          <li>
            <input onChange={(key)=>{ setTarefa(key.target.value) }} type="text" placeholder="Digite aqui..." />
          </li>
          <li>
            <button onClick={enviar} className="btn">Criar tarefa</button>
          </li>
        </ul>
      </nav>
      {/*Footer*/}
    </div>
  );
}

export default App;