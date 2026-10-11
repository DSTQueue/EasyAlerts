import {SendReminder} from "./SendReminder"
import {GetReminderSQL} from "./InitializeDatabase"
import {useEffect, useState} from "react"
import {DeleteReminderSQL} from "./InitializeDatabase"
import {UpdateReminderSQL} from "./InitializeDatabase"
import {RefreshReminders} from "./RefreshReminders"


export async function LoadReminders({setReminders}) {
    /*const [reminders, setReminders] = useState([]);

    useEffect(() => { //this tells the program to run after the component loads
        async function LoadRemindersFromDB() {
            const data = await GetReminderSQL();
            setReminders(data); //this loads the reminders list with the values from 
        }
        LoadRemindersFromDB();},
        []
    );*/
    const reminders = await GetReminderSQL();

    reminders.forEach((reminder) => {
        if(Date.now() >= reminder.reminder_time) {
            SendReminder(reminder.ticket);
            if(reminder.repeatReminder) {
                const newTime = reminder.reminder_time += 604800000;
                UpdateReminderSQL(reminder.id, newTime);
            } else {
                DeleteReminderSQL(reminder.id);
                setReminders(current => //basically RefreshReminders
                    current.filter(r => r.id !== reminder.id)
                );
            }
        }
    });
}