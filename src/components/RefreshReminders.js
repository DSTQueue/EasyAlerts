import {GetReminderSQL} from "./InitializeDatabase"

export async function RefreshReminders(setReminders) {
    const data = await GetReminderSQL();
    setReminders(data);
}