/**
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Delete</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 */

import { refs } from './js/refs';
import { renderTasks } from './js/renderTasks';
import { submitHandler } from './js/submitHandler';

refs.formEl.addEventListener('submit', submitHandler);

renderTasks();
