import { ReminderItem } from "./ReminderItem";

export function ReminderList({ reminders, toggleReminder, deleteReminder }) {
  return (
    <ul className="list">
      {reminders.length === 0 && "Add a Reminder"}
      {reminders.map((reminder) => {
        return (
          <ReminderItem
            {...reminder}
            key={reminder.id}
            toggleReminder={toggleReminder}
            deleteReminder={deleteReminder}
          />
        );
      })}
    </ul>
  );
}
