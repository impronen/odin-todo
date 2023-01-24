
const newTask =  (name, project, priority, dueDate, info) => {
    let taskName = name;
    let isCompleted = false;
    let taskProject = project;
    let taskPriority = priority;
    let taskDueDate = dueDate;
    let taskInfo = info;

    const compStatus = completed => {
        if (completed === true) {
            isCompleted = true
            console.log(`Task ${name} has been completed`)
        }
    }

    const getCompStatus = () => isCompleted

    return { compStatus, getCompStatus, taskName, isCompleted, taskProject, taskPriority, taskDueDate, taskInfo };
}


export {
    newTask
}