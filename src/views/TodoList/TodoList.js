import { useState, useEffect } from 'react';
import { fetchTodos, createTodo } from '../../services/todos';

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
  }, [list]);

  const addTask = async (e) => {
    try {
      e.preventDefault();
      await createTodo(task);
    } catch {
      alert('something went wrong');
    }
    setList((prevState) => [...prevState, task]);
    setTask('');
  };

  return (
    <section className="display-todo">
      <h1>here&apos;s what:</h1>
      <div className="todo-list">
        {list.map((item) => (
          <label key={item.id} className="list-item" htmlFor={item.id}>
            <input id={item.id} type="checkbox" />
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
