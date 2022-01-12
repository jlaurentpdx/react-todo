import { checkError, client } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function createTodo(task) {
  const resp = await client.from('todos').insert({ user_id: client.auth.user().id, task: task });
  return checkError(resp);
}

export async function toggleCompleted(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().eq('id', id);
  return checkError(resp);
}
