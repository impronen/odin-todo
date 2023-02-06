

const taskArray = {
    taskStorage: [],

    filterByProject: function(projectToFilter) {
        let projectTasks = taskArray.taskStorage.filter(Object => Object.project === projectToFilter)
        console.log(projectTasks)
        return projectTasks
    },

    filterbyDueToday: function() {
        let dueToday = taskArray.taskStorage.filter(Object => Object.isTheDate() === 0)
        console.log(dueToday)
        return dueToday
    },
    filterbyPastDue: function() {
        let pastDue = taskArray.taskStorage.filter(Object => Object.isTheDate() > 0)
        console.log(pastDue)
        return pastDue
    },
}


export {taskArray}