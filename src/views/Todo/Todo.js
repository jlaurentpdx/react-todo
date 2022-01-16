import { useState, useEffect } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import { fetchTodos, createTodo, toggleCompleted, deleteChecked } from '../../services/todos';

export default function Todo() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodoList(data);
      if (data.length < 1) setMessage('no tasks at this time');
    };
    fetchData();
  }, []);

  const addNewTask = async (e) => {
    try {
      e.preventDefault();
      const resp = await createTodo(task);
      setTask('');
      setMessage('');
      setTodoList((prevState) => [resp[0], ...prevState]);
    } catch {
      setMessage('tasks must be more than 3 characters in length');
    }
  };

  const handleCheck = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);

    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === task.id ? { ...task, is_complete: !task.is_complete } : item
      )
    );
  };

  const handleClear = async () => {
    if (confirm('do you want to erase all completed tasks?')) {
      await deleteChecked();

      const resp = await fetchTodos();
      setTodoList(resp);

      resp.length < 1 ? setMessage('you did it!') : setMessage('');
    }
  };

  return (
    <>
      <p style={{ margin: '0' }}>here&apos;s</p>
      <h1 style={{ margin: '0' }}>what to-do</h1>
      <hr style={{ width: '10%' }} />
      <TodoList {...{ message, todoList, task, setTask, addNewTask, handleCheck, handleClear }} />
    </>
  );
}
