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

    
    let addToTaskList = document.createElement('button');
    addToTaskList.innerHTML = "Add task to list"
    addToTaskList.setAttribute('id', 'addToTaskList')
    addToTaskList.classList.add('buttonstyle1') 
    buttonContainer.appendChild(addToTaskList)
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
    editButtonCont.innerHTML = "Buttons here"
    rightTopSideCont.appendChild(editButtonCont)

    let taskDoneCheckbox = document.createElement('div')
    taskDoneCheckbox.classList.add('taskDoneCheckbox')
    taskDoneCheckbox.innerHTML = `<input type="checkbox" id="taskdone" name="taskdone"><label for="taskdone">Done</label>`
    rightTopSideCont.appendChild(taskDoneCheckbox)

    let rightLowSideCont = document.createElement('div')
    rightLowSideCont.classList.add('rightLowSideCont')
    rightLowSideCont.innerHTML = `Due date: ${task.getDate()}`
    cardRightSide.appendChild(rightLowSideCont)


}


export {
    createUI,
    createTaskCard
}