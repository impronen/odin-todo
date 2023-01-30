import './styles/style.css';
import date from 'date-and-time';
import { newTask } from './components/taskController.js';
import { taskArray } from './data/storage.js'
import { overLayRendered, overLayDestroyer } from './components/taskInputCreator'
/* import { looper } from './functions/storageLoopers' */
import { createUI, createTaskCard } from './components/uiCreator'
import { addToTaskListListener, logArrayListener } from './components/eventListeners.js'


const testi = new newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");

taskArray['taskStorage'].push(testi)
/* console.log(taskArray) */

createUI()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', overLayRendered)

addToTaskListListener()
logArrayListener()

createTaskCard(testi) 