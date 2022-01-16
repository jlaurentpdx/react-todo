import './TodoList.css';

export default function TodoList({
  message,
  todoList,
  task,
  setTask,
  addNewTask,
  handleCheck,
  handleClear,
}) {
  return (
    <section className="display-todos">
      {message && <p>{message}</p>}
      <div className="todo-list">
        {todoList.map((item) => (
          <label key={item.id} className="todo-item" htmlFor={item.id}>
            <input
              id={item.id}
              checked={item.is_complete}
              type="checkbox"
              onChange={() => handleCheck(item)}
            />
            {item.task}
          </label>
        ))}
      </div>
      <form className="todo-form">
        <input
          className="new-task-input"
          value={task}
          type="text"
          placeholder="add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-button" onClick={addNewTask}>
          add it
        </button>
      </form>
      <button className="clear-button" onClick={handleClear}>
        clear completed?
      </button>
    </section>
  );
}
