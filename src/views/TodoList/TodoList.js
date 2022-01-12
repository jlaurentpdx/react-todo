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
  }, []);

  const addTask = async () => {
    try {
      await createTodo(task);
      alert('task added');
    } catch {
      alert('something went wrong');
    }
  };

  return (
    <section>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <input value={item.task} type="checkbox" /> <span>{item.task}</span>
          </div>
        ))}
      </div>
      <h1>here&apos;s what.</h1>
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
