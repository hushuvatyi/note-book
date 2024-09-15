export function createTask(event) {
  const task = {};
  const formData = [...new FormData(event.currentTarget)];

  formData.reduce((acc, [key, value]) => {
    if (!value) alert('Enter all inputs');
    task[key] = value;
  }, '');
  return task;
}
