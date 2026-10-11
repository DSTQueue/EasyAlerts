import {sendNotification} from "@tauri-apps/plugin-notification"

export function SendReminder(ticket) {
    
        sendNotification({
            title: "EasyAlerts",
            body: ticket
    });
}