import { newTask } from "../controller/taskController";

const dayjs = require("dayjs");
// import dayjs from 'dayjs' // ES 2015
dayjs().format();

const taskArray = {
    taskStorage: [],

    // Functions to manage local storage

    pushToLocal() {
        taskArray.taskStorage.forEach((element) => {
            console.log(element);
            localStorage.setItem(element.uuid, JSON.stringify(element));
        });
    },
    pullFromLocal() {
        Object.keys(localStorage).forEach((key) => {
            const storageObject = JSON.parse(localStorage.getItem(key))
            console.log(storageObject);
            const taskFromStorage = new newTask(
                storageObject.name,
                storageObject.project,
                storageObject.priority,
                storageObject.dueDate,
                storageObject.info,
                storageObject.uuid
            )
            taskArray.taskStorage.push(taskFromStorage)
        });
        console.log(taskArray.taskStorage)
    },
    checkLocalOnLoad() {
        if (localStorage.length > 0) {
            taskArray.pullFromLocal();
        }
    },

    // Filter functions

    filterByProject(projectToFilter) {
        const projectTasks = taskArray.taskStorage.filter(
            (Object) => Object.project === projectToFilter
        );
        return projectTasks;
    },
    filterbyDueToday() {
        const dueToday = taskArray.taskStorage.filter(
            (Object) => Object.isTheDate() === 0
        );
        return dueToday;
    },
    filterbyDueThisWeek() {
        const dueThisWeek = taskArray.taskStorage.filter(
            (Object) => Object.isTheWeek() === true
        );
        return dueThisWeek;
    },
    filterbyDueThisMonth() {
        const dueThisMonth = taskArray.taskStorage.filter(
            (Object) => Object.isTheMonth() === true
        );
        return dueThisMonth;
    },
    filterbyPastDue() {
        const pastDue = taskArray.taskStorage.filter(
            (Object) => Object.isTheDate() > 0
        );
        return pastDue;
    },

    // Sort functions

    sortImportance(order) {
        if (order === "descending") {
            return taskArray.taskStorage.sort((a, b) =>
                a.convertPriority() > b.convertPriority() ? -1 : 1
            );
        }
        return taskArray.taskStorage.sort((a, b) =>
            a.convertPriority() > b.convertPriority() ? 1 : -1
        );
    },
    sortProject() {
        return taskArray.taskStorage.sort((a, b) =>
            a.getProject() > b.getProject() ? 1 : -1
        );
    },
    sortByDate(order) {
        if (order === "descending") {
            return taskArray.taskStorage.sort((a, b) =>
                a.getDate() > b.getDate() ? -1 : 1
            );
        }
        return taskArray.taskStorage.sort((a, b) =>
            a.getDate() > b.getDate() ? 1 : -1
        );
    },
};

export { taskArray };
