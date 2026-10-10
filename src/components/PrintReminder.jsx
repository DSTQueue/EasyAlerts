//this function needs to pull data from the sql table and 

function PrintReminder () {

    return (
        <div class="reminderTicket">
            <p>reminder at time and date</p>
            <label>
                Snooze:
                <input type="button" />
            </label>
            <label>
                Delete:
                <input type="button" />
            </label>
        </div>
    );
}

export default PrintReminder;