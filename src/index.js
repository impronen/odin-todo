import './styles/style.css';
import date from 'date-and-time';
import { newTask } from './components/taskController.js';
import { taskArray } from './data/storage.js'
import { overLayRendered, formCreator } from './components/taskInputCreator'
import { looper } from './functions/storageLoopers'
import { createUI } from './components/uiCreator'


const testi = new newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");

taskArray['taskStorage'].push(testi)
/* console.log(taskArray) */

createUI()

let buttonListener = document.querySelector('#addTaskButton')
let buttonListener2 = document.querySelector('#addToTaskList')
let buttonListener3 = document.querySelector('#logArrayBtn')


buttonListener2.addEventListener('click', function(){
    let form = document.querySelector('#inputOverlay')
    let name = form.querySelector('input[name="taskName"]').value
    let project = form.querySelector('input[name="projectName"]').value
    let priority = form.querySelector('input[name="priority"]').value
    let date = form.querySelector('input[id="selectedDate"]').value
    let info = form.querySelector('input[name="info"]').value
    
    const newTask1 = new newTask(name, project, priority, new Date(`${date}T00:00`), info)
    taskArray.push(newTask1)
    newTask1.isTheDate()
})

buttonListener.addEventListener('click', overLayRendered)
buttonListener3.addEventListener('click', function () {looper(taskArray['taskStorage'])})

/* buttonListener4.addEventListener('click', function () {
    testi.changeCompletion("X"), 
    console.log(testi)
    })  */