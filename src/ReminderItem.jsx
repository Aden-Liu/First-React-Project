export function ReminderItem({ completed, id, title, toggleReminder, deleteReminder }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleReminder(id, e.target.checked)}
        />
        {title}
      </label>
      {/* function calls deleteReminder */}
      <button onClick={() => deleteReminder(id)} className="btn btn-delete">
        Delete
      </button>
    </li>
  );
}
