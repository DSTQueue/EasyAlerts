import Database from "@tauri-apps/plugin-sql"

export async function InitializeDatabase() {
    const db = await Database.load("sqlite:reminders.db");

    await db.execute(`
        CREATE TABLE IF NOT EXISTS reminders(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ticket TEXT NOT NULL,
            reminder_time INTEGER NOT NULL,
            importance INTEGER NOT NULL,
            repeatReminder BOOLEAN NOT NULL
        )
        `);

    return db;
}

//this function takes all the input parameters and adds them to the sql table
export async function addReminderSQL(ticket, reminder_time, importance, repeatReminder) {
    const db = await Database.load("sqlite:reminders.db"); //wait for the data base to load

    await db.execute(`
        INSERT INTO reminders (ticket, reminder_time, importance, repeatReminder) VALUES (?, ?, ?, ?)`,
        [ticket, reminder_time, importance, repeatReminder ? 1 : 0]
        );
    
    const printTable = await db.select(
        'SELECT * FROM reminders'
    );
    console.log(printTable);
}

//this function prints the table
//this function should return each variable as a printable asset
export async function GetReminderSQL() {
    const db = await Database.load("sqlite:reminders.db");

    return await db.select(
        `SELECT * FROM reminders`
    );

}

//this function should remove a line from the table
export async function DeleteReminderSQL(id) {
    const db = await Database.load("sqlite:reminders.db");

    await db.execute(
        'DELETE FROM reminders WHERE id = ?',
        [id]
    );
    console.log("Deleted ticket")
}

export async function UpdateReminderSQL(id, newTime) {
    const db = await Database.load('sqlite:reminders.db');

    await db.execute(
        "UPDATE reminders SET reminder_time = ? WHERE id = ?",
        [newTime, id]
    );
    console.log("Reminder updated")
}

