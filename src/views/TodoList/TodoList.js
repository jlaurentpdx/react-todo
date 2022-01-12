import { logout } from '../../services/users';

import './TodoList.css';

export default function TodoList({ setCurrentUser }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  const addTask = () => {
    alert('you clicked the button');
  };

  return (
    <div>
      <h1>here&apos;s what.</h1>
      <form className="todo-form">
        <input type="text" placeholder="add a task" />
        <button onClick={addTask}>add it</button>
      </form>
      <button onClick={logoutUser} style={{ margin: 'auto', marginTop: '2%' }}>
        logout
      </button>
    </div>
  );
}
