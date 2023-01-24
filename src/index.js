import './styles/style.css';
import date from 'date-and-time';
import { newTask } from './components/taskController.js';
import { taskArray, taskReader } from './data/taskStorage.js'
import { overLayRendered, formCreator } from './components/taskInputCreator'


const testi = newTask("testi", "projekti", "tärkeä", "pvm", "infoa");
console.log(testi)
testi.compStatus(true)
console.log(testi.getCompStatus())
console.log(testi)

taskArray.push(testi)


let content = document.querySelector(".content")


function button () {
    let button = document.createElement('button');
    button.innerHTML = "Add task to list"
    button.setAttribute('id', 'btn') 
    content.appendChild(button)
}

function button2 () {
    let button = document.createElement('button');
    button.innerHTML = "New Task"
    button.setAttribute('id', 'btn2') 
    content.appendChild(button)
}

function button3 () {
    let button = document.createElement('button');
    button.innerHTML = "Log Array"
    button.setAttribute('id', 'btn3') 
    content.appendChild(button)
}

button2();
button();
button3();

let buttonListener = document.querySelector('#btn')
let buttonListener2 = document.querySelector('#btn2')
let buttonListener3 = document.querySelector('#btn3')


buttonListener.addEventListener('click', function(){
    let form = document.querySelector('#inputOverlay')
    let name = form.querySelector('input[name="taskName"]').value
    let project = form.querySelector('input[name="projectName"]').value
    let priority = form.querySelector('input[name="priority"]').value
    let date = form.querySelector('input[id="selectedDate"]').value
    let info = form.querySelector('input[name="info"]').value
    console.log(name, project, priority, date, info)
    
    const testi2 = newTask(name, project, priority, date, info)
    taskArray.push(testi2)
})

buttonListener2.addEventListener('click', overLayRendered)
buttonListener3.addEventListener('click', taskReader)