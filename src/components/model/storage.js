import Task from "../controller/taskController";

const dayjs = require("dayjs");
// import dayjs from 'dayjs' // ES 2015
dayjs().format();

const taskArray = {
  taskStorage: [],

  // Functions to manage local storage

  pushToLocal() {
    // To be used each time changes to tasks are made

    taskArray.taskStorage.forEach((element) => {
      localStorage.setItem(element.uuid, JSON.stringify(element));
    });
  },
  pullFromLocal() {
    // To be only used in conjuction with checkLocalOnLoad() when refreshing /  opening the app
    Object.keys(localStorage).forEach((key) => {
      const storageObject = JSON.parse(localStorage.getItem(key));
      const taskFromStorage = new Task(
        storageObject.name,
        storageObject.project,
        storageObject.priority,
        new Date(`${storageObject.dueDate}`),
        storageObject.info,
        storageObject.uuid,
        storageObject.isCompleted
      );
      taskArray.taskStorage.push(taskFromStorage);
    });
  },
  checkLocalOnLoad() {
    if (localStorage.length > 0) {
      taskArray.pullFromLocal();
    }
  },
  // Filters unique project names to an array - used to have project list in sidebar
  filterProjectNames() {
    const projectNames = taskArray.taskStorage.map((Object) => Object.project);
    const uniqueProjectNames = [];
    projectNames.forEach((element) => {
      if (!uniqueProjectNames.includes(element)) {
        uniqueProjectNames.push(element);
      }
      uniqueProjectNames.sort();
    });
    return uniqueProjectNames;
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
  filterCompleted() {
    const completed = taskArray.taskStorage.filter(
      (Object) => Object.getCompletion() === true
    );
    return completed;
  },
  findByuuid(uuid) {
    const targetTask = taskArray.taskStorage.find(
      (Object) => Object.getUuid() === uuid
    );
    return targetTask;
  },
  findIndexByuuid(uuid) {
    const targetTask = taskArray.taskStorage.findIndex(
      (Object) => Object.getUuid() === uuid
    );
    return targetTask;
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

  // Edit functions

  removeTask(uuid) {
    const taskToRemove = taskArray.findIndexByuuid(uuid);
    if (taskToRemove > -1) {
      taskArray.taskStorage.splice(taskToRemove, 1);
    }
    return taskArray.taskStorage;
  },
};

export default taskArray;
