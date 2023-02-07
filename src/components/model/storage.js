const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

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
    filterbyDueThisWeek: function() {
        let dueThisWeek = taskArray.taskStorage.filter(Object => Object.isTheWeek() === true)
        console.log(dueThisWeek)
        return dueThisWeek
    },
    filterbyDueThisMonth: function() {
        let dueThisMonth= taskArray.taskStorage.filter(Object => Object.isTheMonth() === true)
        console.log(dueThisMonth)
        return dueThisMonth
    },
    filterbyPastDue: function() {
        let pastDue = taskArray.taskStorage.filter(Object => Object.isTheDate() > 0)
        console.log(pastDue)
        return pastDue
    },
}


export {taskArray}