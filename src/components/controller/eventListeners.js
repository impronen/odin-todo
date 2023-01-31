import { newTask } from "../model/taskController"
import { taskArray } from "../../data/storage"
import { overLayDestroyer } from "../view/taskInputCreator"
import { looper } from "../../functions/storageLoopers"


function addToTaskListListener() {
    let buttonListener2 = document.querySelector('#addToTaskList')

    buttonListener2.addEventListener('click', function(){
        let form = document.querySelector('#inputOverlay')
        let name = form.querySelector('input[name="taskName"]').value
        let project = form.querySelector('input[name="projectName"]').value
        let priority = form.querySelector('input[name="priority"]').value
        let date = form.querySelector('input[id="selectedDate"]').value
        let info = form.querySelector('input[name="info"]').value
        
        const newTask1 = new newTask(name, project, priority, new Date(`${date}T00:00`), info)
        taskArray['taskStorage'].push(newTask1)
        newTask1.isTheDate()
        overLayDestroyer()
    })
}

function logArrayListener() {
    let logArrayBtn = document.querySelector('#logArrayBtn')
    logArrayBtn.addEventListener('click', function () {looper(taskArray['taskStorage'])})
}



/* buttonListener4.addEventListener('click', function () {
    testi.changeCompletion("X"), 
    console.log(testi)
    })  */

export {
    addToTaskListListener,
    logArrayListener
}