import './styles/style.css';
import date from 'date-and-time';
import { newTask } from './components/model/taskController.js';
import { taskArray } from './data/storage.js'
import { overLayRendered, overLayDestroyer } from './components/view/taskInputCreator'
import { objectLooper } from './functions/storageLoopers'
import { createUI, createTaskCard } from './components/view/uiCreator'
import { addToTaskListListener, logArrayListener } from './components/controller/eventListeners'


const testi = new newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");
const test2 = new newTask("Toinen", "Project", "Important", "2023-01-27", "Do it ya git");
taskArray['taskStorage'].push(testi)
taskArray['taskStorage'].push(test2)


createUI()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', overLayRendered)

objectLooper(taskArray['taskStorage'])

addToTaskListListener()
logArrayListener()

/* createTaskCard(testi)  */