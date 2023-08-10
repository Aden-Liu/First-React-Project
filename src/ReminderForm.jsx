import { useState } from "react";

export function ReminderForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    //prevents page from refreshing
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="form-row">
        <label htmlFor="item">New Item: </label>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn">Set Reminder</button>
    </form>
  );
}
