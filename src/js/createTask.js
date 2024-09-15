import { nanoid } from 'nanoid';

export function createTask(event) {
  const task = { id: nanoid() };
  const formData = [...new FormData(event.currentTarget)];

  formData.reduce((acc, [key, value]) => {
    if (!value) alert('Enter all inputs');
    task[key] = value;
  }, '');
  return task;
}
