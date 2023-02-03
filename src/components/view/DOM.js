import { newTask } from "../controller/taskController"
import { taskArray } from "../model/storage"
import 'material-symbols';

const DOM = (() => {


    let content = document.querySelector(".content")

    function createUI() {
        createHeader()
        createMain()
        createSidebar()
        createTaskDisplay()
    }

    function createHeader() {
        let header = document.createElement('div');
        header.classList.add('header')
        content.appendChild(header)

        let logo = document.createElement('div');
        logo.innerHTML = `<h1>taskLister</h1>`
        logo.classList.add('headerlogo')
        header.appendChild(logo)

        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer')
        header.appendChild(buttonContainer)


        let addTaskButton = document.createElement('button');
        addTaskButton.innerHTML = "New Task"
        addTaskButton.setAttribute('id', 'addTaskButton') 
        addTaskButton.classList.add('buttonstyle1')
        buttonContainer.appendChild(addTaskButton)

        
        
        
    }

    function createMain() {
        let main = document.createElement('div');
        main.classList.add('main')
        content.appendChild(main)
    }

    function createSidebar () {
        let main = document.querySelector(".main")
        let sidebar = document.createElement('div');
        sidebar.classList.add('sidebar')
        main.appendChild(sidebar)

        let allTasksButton = document.createElement('button');
        allTasksButton.innerHTML = "All tasks"
        allTasksButton.setAttribute('id', 'allTasksButton')
        allTasksButton.classList.add('buttonstyle2')
        sidebar.appendChild(allTasksButton)

        let dueTodayButton = document.createElement('button');
        dueTodayButton.innerHTML = "Due today"
        dueTodayButton.setAttribute('id', 'dueTodayButton')
        dueTodayButton.classList.add('buttonstyle2')
        sidebar.appendChild(dueTodayButton)

        let logArrayBtn = document.createElement('button');
        logArrayBtn.innerHTML = "Log Array"
        logArrayBtn.setAttribute('id', 'logArrayBtn')
        logArrayBtn.classList.add('buttonstyle2') 
        sidebar.appendChild(logArrayBtn)
            

        //Create List for projects that cycles the content from projects on storage array
    }

    function createTaskDisplay() {
        let main = document.querySelector(".main")
        let taskDisplay = document.createElement('div');
        taskDisplay.classList.add('taskDisplay')
        main.appendChild(taskDisplay)
    }

    function arrayPrinter(currentArray) { //Use as cleaner & rebuilder of cards visible to user
        let oldCards = document.querySelectorAll(".taskCard").forEach(e => e.remove());
        currentArray.forEach(task => DOM.createTaskCard(task))
    } 

    function createTaskCard(task)  {
        let taskDisplay = document.querySelector(".taskDisplay")

        let taskCard = document.createElement('div')
        taskCard.classList.add('taskCard')
        taskDisplay.appendChild(taskCard)

        let cardLeftSide = document.createElement('div')
        cardLeftSide.classList.add('cardLeftSide')
        taskCard.appendChild(cardLeftSide)

        let taskName = document.createElement('div')
        taskName.classList.add('taskName')
        taskName.innerHTML = task.getName()
        cardLeftSide.appendChild(taskName)

        let projectName = document.createElement('div')
        projectName.classList.add('projectName')
        projectName.innerHTML = task.getProject()
        cardLeftSide.appendChild(projectName)

        let cardRightSide = document.createElement('div')
        cardRightSide.classList.add('cardRightSide')
        taskCard.appendChild(cardRightSide)

        let rightTopSideCont = document.createElement('div')
        rightTopSideCont.classList.add('rightTopSideCont')
        cardRightSide.appendChild(rightTopSideCont)

        let editButtonCont = document.createElement('div')
        editButtonCont.classList.add('editButtonCont')
        editButtonCont.innerHTML = `<span class="material-symbols-rounded">edit_note</span><span class="material-symbols-rounded">delete</span>`
        rightTopSideCont.appendChild(editButtonCont)

        let taskDoneCheckbox = document.createElement('div')
        taskDoneCheckbox.classList.add('taskDoneCheckbox')
        taskDoneCheckbox.innerHTML = `<input type="checkbox" id="taskdone" name="taskdone"><label for="taskdone">Done</label>`
        rightTopSideCont.appendChild(taskDoneCheckbox)

        let rightLowSideCont = document.createElement('div')
        rightLowSideCont.classList.add('rightLowSideCont')
        rightLowSideCont.innerHTML = `Due in ${task.isTheDate()} days`
        cardRightSide.appendChild(rightLowSideCont)


    }

    function overLayRendered () {
        let content = document.querySelector(".taskDisplay")
        let inputOverlay = document.createElement('div')
        inputOverlay.setAttribute('id', 'inputOverlay')
        inputOverlay.className = "inputOverlay"
        content.appendChild(inputOverlay)
        formCreator ()
    }
    
    function formCreator () {
        let overlay = document.querySelector("#inputOverlay");
    
        let form = document.createElement("form");
        form.setAttribute("method", "post");
    
        let taskName = document.createElement("input");
        taskName.setAttribute("type", "text");
        taskName.setAttribute("name", "taskName");
        taskName.setAttribute("placeholder", "Task");
        
        let projectName = document.createElement("input");
        projectName.setAttribute("type", "text");
        projectName.setAttribute("name", "projectName");
        projectName.setAttribute("placeholder", "Project");
    
        let priority = document.createElement("input");
        priority.setAttribute("type", "select")
        priority.setAttribute("name", "priority")
        priority.setAttribute("value", "High")
        priority.setAttribute("value", "Normal")
        priority.setAttribute("value", "Low")
    
        let dueDate = document.createElement('input');
        dueDate.setAttribute("type", "date")
        dueDate.setAttribute("id", "selectedDate")
        
        let info = document.createElement("input");
        info.setAttribute("type", "textarea")
        info.setAttribute("name", "info")
        info.setAttribute("rows", "5")
        info.setAttribute("cols", "30")
        info.setAttribute("placeholder", "Notes")
        
        form.appendChild(taskName)
        form.appendChild(projectName)
        form.appendChild(priority)
        form.appendChild(dueDate)
        form.appendChild(info)
    
        overlay.appendChild(form)

        let addToTaskList = document.createElement('button');
        addToTaskList.innerHTML = "Add task to list"
        addToTaskList.setAttribute('id', 'addToTaskList')
        addToTaskList.classList.add('buttonstyle1')

        overlay.appendChild(addToTaskList)
        addToTaskListListener()

    }
    
    function overLayDestroyer() {
        let overlay = document.querySelector('.inputOverlay')
        overlay.remove()
    
    }


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
            arrayPrinter(taskArray['taskStorage'])
        })
    }
    
    function logArrayListener() {
        let logArrayBtn = document.querySelector('#logArrayBtn')
        logArrayBtn.addEventListener('click', function () {looper(taskArray['taskStorage'])})
    }
    return { createUI, 
        overLayRendered, 
        createTaskCard,
        addToTaskListListener, 
        logArrayListener,
        arrayPrinter }
})()


export {
    DOM
}