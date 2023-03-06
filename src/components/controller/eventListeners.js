import Task from "./taskController";
import storage from "../model/storage";
import DOM from "../view/DOM";

const EVENTS = (() => {
  function addListenersToProjectList() {
    const projectList = document.querySelector(".projectList");
    projectList.addEventListener("click", (event) => {
      DOM.arrayPrinter(storage.filterByProject(event.target.id));
    });
  }

  function addRemoveListenersToTaskCards() {
    const deleteIcons = document.querySelectorAll(".delete");
    deleteIcons.forEach((element) =>
      element.addEventListener("click", (event) => {
        const parent = event.target.closest(".taskCard");
        storage.removeTask(parent.dataset.uuid);
        localStorage.clear();
        storage.pushToLocal();
        DOM.sidebarProjectList(storage.filterProjectNames());
        parent.classList.add("removedCard");
        parent.addEventListener("transitionend", () => {
          parent.remove();
        });
      })
    );
  }
  function addEditListenersToTaskCards() {
    const editIcons = document.querySelectorAll(".edit");
    editIcons.forEach((element) =>
      element.addEventListener("click", () => {
        console.log("edit buttons are being pressed");
      })
    );
  }
  function addCompletedEventListenersToTaskCards() {
    const completeButton = document.querySelectorAll(".taskDoneBtn");
    completeButton.forEach((element) => {
      const parent = element.closest(".taskCard");
      const daysLeft = parent.querySelector(".daysLeft");
      element.addEventListener("click", () => {
        const targetTask = storage.findByuuid(parent.dataset.uuid);
        console.log(targetTask.getCompletion());
        targetTask.changeCompletion();
        console.log(targetTask.getCompletion());
        if (targetTask.getCompletion() === true) {
          daysLeft.innerHTML = "Completed";
          daysLeft.classList.add("completed");
          element.classList.add("completedBtn");
          // eslint-disable-next-line no-param-reassign
          element.innerHTML = "Task Done";
        } else {
          daysLeft.innerHTML = targetTask.howManyDays();
          daysLeft.classList.remove("completed");
          element.classList.remove("completedBtn");
          // eslint-disable-next-line no-param-reassign
          element.innerHTML = "Mark Completed";
        }
        storage.pushToLocal();
        console.log(localStorage);
      });
    });
  }
  function addToTaskListListener() {
    const buttonListener2 = document.querySelector("#addToTaskList");

    buttonListener2.addEventListener("click", () => {
      const form = document.querySelector("#inputOverlay");
      const name = form.querySelector('input[name="taskName"]').value;
      const project = form.querySelector('input[name="projectName"]').value;
      const priority = form.querySelector('select[name="priority"]').value;
      const date = form.querySelector('input[id="selectedDate"]').value;
      const info = form.querySelector('input[name="info"]').value;

      const newTask1 = new Task(
        name,
        project,
        priority,
        new Date(`${date}T00:00`),
        info
      );
      storage.taskStorage.push(newTask1);
      storage.pushToLocal();
      newTask1.isTheDate();
      DOM.overLayDestroyer();
      DOM.arrayPrinter(storage.taskStorage);
      DOM.sidebarProjectList(storage.filterProjectNames());
      addListenersToProjectList();
      addRemoveListenersToTaskCards();
      addCompletedEventListenersToTaskCards();
      addEditListenersToTaskCards();
    });
  }
  function addAllCardListeners() {
    addRemoveListenersToTaskCards();
    addCompletedEventListenersToTaskCards();
    addEditListenersToTaskCards();
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
      DOM.arrayPrinter(storage.taskStorage);
      addAllCardListeners();
    });
  }
  function showDueTodayTasks() {
    const dueTodayButton = document.querySelector("#dueTodayButton");
    dueTodayButton.addEventListener("click", () => {
      DOM.arrayPrinter(storage.filterbyDueToday());
      addAllCardListeners();
    });
  }
  function showUpcomingTasks() {
    const upcomingButton = document.querySelector("#upcomingButton");
    upcomingButton.addEventListener("click", () => {
      DOM.arrayPrinter(storage.filterbyDueThisWeek());
      addAllCardListeners();
    });
  }
  function showCompletedTasks() {
    const completedButton = document.querySelector("#completedButton");
    completedButton.addEventListener("click", () => {
      DOM.arrayPrinter(storage.filterCompleted());
      addAllCardListeners();
    });
  }
  function setDefaultViewListeners() {
    taskAddingOverlayListener();
    showAllTasks();
    showDueTodayTasks();
    showUpcomingTasks();
    showCompletedTasks();
    addListenersToProjectList();
    addRemoveListenersToTaskCards();
    addEditListenersToTaskCards();
    addCompletedEventListenersToTaskCards();
  }
  return {
    setDefaultViewListeners,
    addListenersToProjectList,
    addRemoveListenersToTaskCards,
    addEditListenersToTaskCards,
  };
})();

export default EVENTS;
