import './styles/style.css';
import './styles/cardstyles.css';
import date from 'date-and-time';
import { newTask } from './components/controller/taskController.js';
import { taskArray } from './components/model/storage.js'
import { DOM } from './components/view/DOM';


DOM.createUI()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', DOM.overLayRendered)

DOM.arrayPrinter(taskArray['taskStorage'])

/* DOM.addToTaskListListener() */
DOM.logArrayListener()

