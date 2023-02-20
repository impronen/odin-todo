import Task from "./taskController";
import taskArray from "../model/storage";
import DOM from "../view/DOM";

const EVENTS = (() => {
  function addToTaskListListener() {
    const buttonListener2 = document.querySelector("#addToTaskList");

    buttonListener2.addEventListener("click", () => {
      const form = document.querySelector("#inputOverlay");
      const name = form.querySelector('input[name="taskName"]').value;
      const project = form.querySelector('input[name="projectName"]').value;
      const priority = form.querySelector('input[name="priority"]').value;
      const date = form.querySelector('input[id="selectedDate"]').value;
      const info = form.querySelector('input[name="info"]').value;

      const newTask1 = new Task(
        name,
        project,
        priority,
        new Date(`${date}T00:00`),
        info
      );
      taskArray.taskStorage.push(newTask1);
      taskArray.pushToLocal();
      newTask1.isTheDate();
      DOM.overLayDestroyer();
      DOM.arrayPrinter(taskArray.taskStorage);
    });
  }

  function taskAddingOverlayListener() {
    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", () => {
      DOM.overLayRendered();
      addToTaskListListener();
    });
  }

  function showAllTasks() {
    const allTasksButton = document.querySelector("#allTasksButton");
    allTasksButton.addEventListener("click", () => {
      console.log("All tasks button");
    });
  }
  function showDueTodayTasks() {
    const dueTodayButton = document.querySelector("#dueTodayButton");
    dueTodayButton.addEventListener("click", () => {
      console.log("Due today button");
    });
  }

  function showUpcomingTasks() {
    const upcomingButton = document.querySelector("#upcomingButton");
    upcomingButton.addEventListener("click", () => {
      console.log("Upcoming tasks button");
    });
  }

  function projectList() {
    const projectbutton = document.querySelector("#logArrayBtn");
    projectbutton.addEventListener("click", () => {
      taskArray.filterProjectNames();
    });
  }

  function setDefaultViewListeners() {
    taskAddingOverlayListener();
    showAllTasks();
    showDueTodayTasks();
    showUpcomingTasks();
    projectList();
  }

  function pullFromLocal() {
    const logLocalBtn = document.querySelector("#pushFromLocal");
    logLocalBtn.addEventListener("click", () => {
      taskArray.pullFromLocal();
    });
  }
  return {
    pullFromLocal,
    setDefaultViewListeners,
    projectList,
  };
})();

export default EVENTS;
