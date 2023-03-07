import Task from "./taskController";
import storage from "../model/storage";
import DOM from "../view/DOM";

const EVENTS = (() => {
  function addListenersToProjectList() {
    const projectList = document.querySelector(".projectList");
    projectList.addEventListener("click", (event) => {
      DOM.arrayPrinter(storage.filterByProject(event.target.id));
      DOM.changecurrentView(event.target.textContent);
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
        addListenersToProjectList();
        parent.classList.add("removedCard");
        parent.addEventListener("transitionend", () => {
          parent.remove();
        });
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
        targetTask.changeCompletion();
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
      });
    });
  }
  function closeOverLayLister() {
    const lilX = document.querySelector(".closebutton");
    lilX.addEventListener("click", () => {
      DOM.overLayDestroyer();
    });
  }
  function saveModifiedTask() {
    const saveTask = document.querySelector("#addToTaskList");
    saveTask.addEventListener("click", () => {
      const form = document.querySelector("#inputOverlay");
      const name = form.querySelector('input[name="taskName"]').value;
      const project = form.querySelector('input[name="projectName"]').value;
      const priority = form.querySelector('select[name="priority"]').value;
      const date = form.querySelector('input[id="selectedDate"]').value;
      const info = form.querySelector('input[name="info"]').value;

      const taskToMod = storage.findByuuid(saveTask.dataset.task);
      taskToMod.changeName(name);
      taskToMod.changeProject(project);
      taskToMod.changePriority(priority);
      taskToMod.changeDate(new Date(`${date}T00:00`));
      taskToMod.changeInfo(info);

      storage.pushToLocal();
      DOM.overLayDestroyer();
      DOM.arrayPrinter(storage.taskStorage);
      DOM.sidebarProjectList(storage.filterProjectNames());
      addListenersToProjectList();
      addRemoveListenersToTaskCards();
      addCompletedEventListenersToTaskCards();
      // eslint-disable-next-line no-use-before-define
      addEditListenersToTaskCards();
    });
  }
  function addEditListenersToTaskCards() {
    const editIcons = document.querySelectorAll(".edit");
    editIcons.forEach((element) =>
      element.addEventListener("click", () => {
        const parent = element.closest(".taskCard");
        const targetTask = storage.findByuuid(parent.dataset.uuid);
        DOM.overLayRendered(targetTask);
        closeOverLayLister();
        saveModifiedTask();
      })
    );
  }
  function saveNewTask() {
    const addNewTask = document.querySelector("#addToTaskList");

    addNewTask.addEventListener("click", () => {
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
  function taskAddingListener() {
    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", () => {
      DOM.overLayRendered();
      saveNewTask();
      closeOverLayLister();
    });
  }
  function showAllTasks() {
    const allTasksButton = document.querySelector("#allTasksButton");
    allTasksButton.addEventListener("click", () => {
      DOM.changecurrentView("All Tasks");
      DOM.arrayPrinter(storage.taskStorage);
      addAllCardListeners();
    });
  }
  function showDueTodayTasks() {
    const dueTodayButton = document.querySelector("#dueTodayButton");
    dueTodayButton.addEventListener("click", () => {
      DOM.changecurrentView("Today");
      DOM.arrayPrinter(storage.filterbyDueToday());
      addAllCardListeners();
    });
  }
  function showUpcomingTasks() {
    const upcomingButton = document.querySelector("#upcomingButton");
    upcomingButton.addEventListener("click", () => {
      DOM.changecurrentView("This Week");
      DOM.arrayPrinter(storage.filterbyDueThisWeek());
      addAllCardListeners();
    });
  }
  function showCompletedTasks() {
    const completedButton = document.querySelector("#completedButton");
    completedButton.addEventListener("click", () => {
      DOM.changecurrentView("Completed");
      DOM.arrayPrinter(storage.filterCompleted());
      addAllCardListeners();
    });
  }
  function setDefaultListeners() {
    taskAddingListener();
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
    setDefaultListeners,
    addListenersToProjectList,
    addRemoveListenersToTaskCards,
    addEditListenersToTaskCards,
  };
})();

export default EVENTS;
