import { useEffect, useState } from "react";
import { ReminderForm } from "./ReminderForm";
import { ReminderList } from "./ReminderList";
import "./style.css";

export default function App() {
  const [reminders, setReminders] = useState(() => {
    const localValue = localStorage.getItem('Items');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  function addReminder(title) {
    setReminders((currentReminders) => {
      return [...currentReminders, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  //runs this function every time the values inside the array change
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(reminders))
  }, [reminders])

  function toggleReminder(id, completed) {
    setReminders((currentReminders) => {
      return currentReminders.map((reminder) => {
        if (reminder.id == id) {
          return { ...reminder, completed };
        }
        return reminder;
      });
    });
  }

  function deleteReminder(id) {
    setReminders((currentReminders) => {
      //only returns the items that don't match the current id
      return currentReminders.filter((reminder) => reminder.id != id);
    });
  }
  return (
    <>
      <ReminderForm onSubmit={addReminder} />
      <h1 className="header">Reminders</h1>
      <ReminderList
        reminders={reminders}
        toggleReminder={toggleReminder}
        deleteReminder={deleteReminder}
      />
    </>
  );
}
