import { checkError, client } from './client';

export async function fetchTodos() {
  const resp = await client
    .from('todos')
    .select('*')
    .order('is_complete', true)
    .order('inserted_at', true);
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

export async function deleteChecked() {
  const resp = await client.from('todos').delete().eq('is_complete', true);
  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().eq('id', id);
  return checkError(resp);
}
