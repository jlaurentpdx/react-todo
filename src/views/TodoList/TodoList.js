import { useState } from 'react';
import { logout } from '../../services/users';
import { createTodo } from '../../services/todos';

import './TodoList.css';

export default function TodoList({ props, setCurrentUser }) {
  const [task, setTask] = useState('');

  const addTask = async () => {
    try {
      await createTodo(task);
      alert('task added');
    } catch {
      alert('something went wrong');
    }
  };

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
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
      <button onClick={logoutUser} style={{ margin: 'auto', marginTop: '2%' }}>
        logout
      </button>
    </div>
  );
}
