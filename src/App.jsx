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
import Database from "@tauri-apps/plugin-sql";
import { useEffect } from "react";
import { useState } from "react";
import {InitializeDatabase} from "./components/InitializeDatabase.js"
import ReminderForm from "./components/ReminderForm.jsx"
import PrintReminderList from "./components/PrintReminderList.jsx"
import {LoadReminders} from "./components/LoadReminders.js"
import {GetReminderSQL} from "./components/InitializeDatabase.js"



function App () {
  const [reminders, setReminders] = useState([]);
  //any componenet that calls setReminders updates the app state and causes a rerender
  useEffect(()=> { //loads the data when app launches
    async function LoadRemindersFromDB() {
      const data = GetReminderSQL();
      setReminders(data)
    }
    LoadRemindersFromDB();
  }, []);

  useEffect(() => { //creates or finds database when the app launches
    InitializeDatabase();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      LoadReminders({setReminders});
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="dashboard">
      <div className="sidebar">
        <div className="time-view">
          <p>Today</p>
          <p>This week</p>
          <p>Later</p>
        </div>
      </div>
      <div className="right-side">
      <div className="main-content">
        <div className="heading">
          <h1>Today's reminders</h1>
          <p>
            <img src="/EasyAlert logo.png" className="logo EasyAlert" alt="EasyAlert logo" />
            Made with 
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
          </p>
        </div>
        <div className="reminders">
          <PrintReminderList reminders={reminders} />
        </div>
      </div>
      <div id="input-area">
        <ReminderForm setReminders={setReminders}/>
      </div>
      </div>
    </main>
  );
}

export default App;