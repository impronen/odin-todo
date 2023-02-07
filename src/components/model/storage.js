const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const taskArray = {
    taskStorage: [],

    filterByProject: function(projectToFilter) {
        let projectTasks = taskArray.taskStorage.filter(Object => Object.project === projectToFilter)
        return projectTasks
    },

    filterbyDueToday: function() {
        let dueToday = taskArray.taskStorage.filter(Object => Object.isTheDate() === 0)
        return dueToday
    },
    filterbyDueThisWeek: function() {
        let dueThisWeek = taskArray.taskStorage.filter(Object => Object.isTheWeek() === true)
        return dueThisWeek
    },
    filterbyDueThisMonth: function() {
        let dueThisMonth= taskArray.taskStorage.filter(Object => Object.isTheMonth() === true)
        return dueThisMonth
    },
    filterbyPastDue: function() {
        let pastDue = taskArray.taskStorage.filter(Object => Object.isTheDate() > 0)
        return pastDue
    },
    sortImportance: function(order) {
        if (order === "descending") {
            return taskArray.taskStorage.sort((a, b) => (a.convertPriority() > b.convertPriority()) ? -1 : 1)
        } else {
            return taskArray.taskStorage.sort((a, b) => (a.convertPriority() > b.convertPriority()) ? 1 : -1)
        }
    },
    sortProject: function() {
        return taskArray.taskStorage.sort((a, b) => (a.getProject() > b.getProject()) ? 1 : -1)
    },
    sortByDate: function(order) {
        if (order === "descending") {
            return taskArray.taskStorage.sort((a, b) => (a.getDate() > b.getDate()) ? -1 : 1)
        } else {
            return taskArray.taskStorage.sort((a, b) => (a.getDate() > b.getDate()) ? 1 : -1)
        }
    }
    
}


export {taskArray}