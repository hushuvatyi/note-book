import { createTaskMarkup } from './createTaskMarkup';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';

export function renderTasks() {
  const tasks = localStorageAPI.getAll();
  const markup = tasks.map(createTaskMarkup).join('');
  refs.taskListEl.insertAdjacentHTML('afterbegin', markup);
}
