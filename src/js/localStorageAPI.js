function add(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const localStorageAPI = { add };
