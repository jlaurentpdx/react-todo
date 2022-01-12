import { checkError, client } from './client';

export async function createTodo(task) {
  const resp = await client.from('todos').insert({ user_id: client.auth.user().id, task: task });
  return checkError(resp);
}
