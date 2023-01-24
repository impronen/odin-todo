

function overLayRendered () {
    let content = document.querySelector(".content")
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
    
    form.appendChild(taskName)
    form.appendChild(projectName)
    form.appendChild(priority)
    form.appendChild(dueDate)
    form.appendChild(info)

    overlay.appendChild(form)
}

export {
    overLayRendered
}