import './styles/style.css';
import './styles/cardstyles.css';
import date from 'date-and-time';
import { newTask } from './components/controller/taskController.js';
import { taskArray } from './components/model/storage.js'
import { DOM } from './components/view/DOM';
import { objectLooper } from './functions/storageLoopers'



const testi = new newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");
const test2 = new newTask("Toinen", "Project", "Important", "2023-01-27", "Do it ya git");
taskArray['taskStorage'].push(testi)
taskArray['taskStorage'].push(test2)


DOM.createUI()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', DOM.overLayRendered)

/* objectLooper(taskArray['taskStorage']) */

DOM.addToTaskListListener()
DOM.logArrayListener()

DOM.createTaskCard(testi)
