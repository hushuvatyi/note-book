function add(task) {
  const tasks = getAll();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getAll() {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
}
export const localStorageAPI = { add, getAll };
