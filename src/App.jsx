/*import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import testFunction from "./testFunction.jsx";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Welcome to EasyAlerts</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>

      <div><testFunction /></div>
    </main>
  );
}

export default App;
*/

//above is default app from react
//this page should render all the static html

import reactLogo from "./assets/react.svg";
import TestFunction from './TestFunction.jsx';
import ListReminders from "./components/ListReminders.jsx";

function App () {
  return (
    <main class="dashboard">
      <div class="sidebar">
        <div class="time-view">
          <p>Today</p>
          <p>This week</p>
          <p>Later</p>
        </div>
      </div>
      <div class="right-side">
      <div class="main-content">
        <div class="heading">
          <h1>Today's reminders</h1>
          <p>
            <img src="/EasyAlert logo.png" className="logo EasyAlert" alt="EasyAlert logo" />
            Made with 
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
          </p>
        </div>
        <div class="reminders">
          <ListReminders />
        </div>
      </div>
      <div id="input-area">
        <form>
          <label id="reminder-input" class="input-label">
            Add reminder:
            <input type="text" />
          </label>
          <label id="date-input" class="input-label">
            Date
            <input type="date" />
          </label>
          <label id="importance-level" class="input-label">
            Importance
            <select>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>            
          </label>
          <label id="weekly-recurring" class="input-label">
            Recurring
            <input type="checkbox" unchecked/>
          </label>
        </form>
      </div>
      </div>
    </main>
  );
}

export default App;