import { createTask } from './createTask';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import { createTaskMarkup } from './createTaskMarkup';

export function submitHandler(event) {
  event.preventDefault();
  const task = createTask(event);
  localStorageAPI.add(task);
  const markup = createTaskMarkup(task);
  refs.taskListEl.insertAdjacentHTML('afterbegin', markup);
}
