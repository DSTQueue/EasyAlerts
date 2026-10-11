

function PrintReminder({ticket, reminder_time, importance, repeatReminder}) {
    const readableDate = new Date(reminder_time).toLocaleString();
    console.log("ticket sent");

    return (
        <div className="reminderBlock">
            <div className="left">
                <p>{ticket} at {readableDate}</p>
                <p><small>Settings: Importance - {importance}  Reoccurring: {repeatReminder}</small></p>
            </div>
            <div className="right">
                <form>
                    <button>Snooze</button>
                    <button>Delete</button>
                </form>
            </div>
        </div>
    );
} 

export default PrintReminder;
