let content = document.querySelector(".content")

function createUI() {
    createHeader()
    createMain()
    createSidebar ()
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







/* function button4 () {
    let button = document.createElement('button');
    button.innerHTML = "Change complete"
    button.setAttribute('id', 'btn4') 
    content.appendChild(button)
    
} */


export {
    createUI
}