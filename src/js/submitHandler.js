import { createTask } from './createTask';
import { localStorageAPI } from './localStorageAPI';

export function submitHandler(event) {
  event.preventDefault();
  const task = createTask(event);
  localStorageAPI.add(task);
}
