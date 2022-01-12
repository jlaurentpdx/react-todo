import { useState, useEffect } from 'react';
import { fetchTodos, createTodo, toggleCompleted, deleteTodo } from '../../services/todos';

import './TodoList.css';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setList(data);
    };
    fetchData();
  }, []);

  const addTask = async (e) => {
    try {
      e.preventDefault();
      const resp = await createTodo(task);
      setTask('');
      setList((prevState) => [...prevState, resp[0]]);
    } catch {
      alert('something went wrong');
    }
  };

  const handleCheck = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);

    const resp = await fetchTodos();
    setList(resp);
  };

  return (
    <section className="display-todo">
      <h1>here&apos;s what:</h1>
      <div className="todo-list">
        {list.map((item) => (
          <label key={item.id} className="list-item" htmlFor={item.id}>
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
          value={task}
          type="text"
          placeholder="add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>add it</button>
      </form>
    </section>
  );
}
