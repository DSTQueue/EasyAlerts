import {useEffect, useState} from "react"
import {GetReminderSQL} from "./InitializeDatabase"
import PrintReminder from "./PrintReminder.jsx" //doesn't matter?
import {RefreshReminders} from "./RefreshReminders.js"

function PrintReminderList({reminders}) {
    /*const [reminders, setReminders] = useState([]); //this defines reminders as an object in this function
    //allowing it to be updated by setReminders and loadReminders
    //reminders is the current list of reminders
    //setReminders is  a function
    //[] tells us the initial value is an empty array
    async function RefreshReminders() {
        const data = await GetReminderSQL();
        setReminders(data);
    }
    useEffect(()=>{
        RefreshReminders();
    }, []);

    useEffect(() => { //this tells the program to run after the component loads
        async function LoadReminders() {
            const data = await GetReminderSQL();
            setReminders(data); //this loads the reminders list with the values from 
        }
        LoadReminders();},
        []
    );*/

    return(
        <>
            {reminders.map((reminder) => ( //reminder is a temporary value used to store list parameters
                <PrintReminder //map goes through the list like a for loop
                    key={reminder.id} //incrementing counter, it uses the id from sql
                    ticket={reminder.ticket}
                    reminder_time={reminder.reminder_time}
                    importance={reminder.importance}
                    repeatReminder={reminder.repeatReminder}
                />
            ))
            }
        </>
    );
}
export default PrintReminderList;