import { InitializeDatabase } from "./InitializeDatabase.js"; // import database
import { addReminderSQL } from "./InitializeDatabase.js"; //import reminder function
import {RefreshReminders} from "./RefreshReminders.js"
import {useState} from "react" //import react function

function ReminderForm({setReminders}) {
    //sets the parameters and their update parameters
    const [ticket, setTicket] = useState(""); //useState constantly updates the ticket value using setTicket 
    const [reminder_time, setReminder_time] = useState(""); //setTicket is a function that updates ticket
    const [importance, setImportance] = useState(1);
    const [repeatReminder, setRepeatReminder] = useState(false);
    //useState variables tells react to redraw the screen everytime the variable is updated
    

    async function handleSubmit(e) {
        e.preventDefault(); //prevents the browser from reloading the page

        await addReminderSQL(ticket, Date.parse(reminder_time), importance, repeatReminder);
        await RefreshReminders(setReminders)
        //calls addReminderSQL to add the remind to the table

        setTicket("");
        setReminder_time("");
        setImportance(1);
        setRepeatReminder(false);
        //resets all the variables

        console.log("Reminder added to SQL table from handleSubmit");
    }

    //setParameter updates everytime there is a change in the input field
    //value = {parameter} saves the value?
    //handleSubmit is the function that calls addReminder and resets variables
    return (
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label id="reminder-input" className="input-label">
            Add reminder:
            <input type="text" name="reminder" value={ticket} onChange={(e) => setTicket(e.target.value)} />
          </label>
          <label id="date-input" className="input-label">
            Date
            <input type="datetime-local" value={reminder_time} onChange={(e) => setReminder_time(e.target.value)} />
          </label>
          <label id="importance-level" className="input-label">
            Importance
            <select value={importance} onChange={(e) => setImportance(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>            
          </label>
          <label id="weekly-recurring" className="input-label">
            Recurring
            <input type="checkbox" value={repeatReminder} onChange={(e) => setRepeatReminder(e.target.checked)}/>
          </label>
          <button type="submit">Submit</button>
        </fieldset>
        </form>
    );
}

export default ReminderForm;