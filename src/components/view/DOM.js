import { newTask } from "../controller/taskController";
import { taskArray } from "../model/storage";
import "material-symbols";

const DOM = (() => {
  const content = document.querySelector(".content");

  // Basic UI layout creation

  function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    const logo = document.createElement("div");
    logo.innerHTML = `<span class="material-symbols-outlined">
    done_outline
    </span><h1 class="mainHeading">taskLister</h1>`;
    logo.classList.add("headerlogo");
    header.appendChild(logo);

    const middleTextContainer = document.createElement("div");
    middleTextContainer.classList.add("middleTextContainer");
    middleTextContainer.innerHTML = `<h4 class="tagText">organize your life</h3>`;
    header.appendChild(middleTextContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    header.appendChild(buttonContainer);

    const addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "New Task";
    addTaskButton.setAttribute("id", "addTaskButton");
    addTaskButton.setAttribute("type", "button");
    addTaskButton.classList.add("buttonstyle1");
    buttonContainer.appendChild(addTaskButton);
  }

  function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
  }

  function createSidebar() {
    const main = document.querySelector(".main");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    main.appendChild(sidebar);

    const allTasksButton = document.createElement("button");
    allTasksButton.innerHTML = "All tasks";
    allTasksButton.setAttribute("id", "allTasksButton");
    allTasksButton.classList.add("buttonstyle2");
    sidebar.appendChild(allTasksButton);

    const dueTodayButton = document.createElement("button");
    dueTodayButton.innerHTML = "Due today";
    dueTodayButton.setAttribute("id", "dueTodayButton");
    dueTodayButton.classList.add("buttonstyle2");
    sidebar.appendChild(dueTodayButton);

    const logArrayBtn = document.createElement("button");
    logArrayBtn.innerHTML = "Save to local";
    logArrayBtn.setAttribute("id", "logArrayBtn");
    logArrayBtn.classList.add("buttonstyle2");
    sidebar.appendChild(logArrayBtn);

    const pushFromLocal = document.createElement("button");
    pushFromLocal.innerHTML = "Push local to array";
    pushFromLocal.setAttribute("id", "pushFromLocal");
    pushFromLocal.classList.add("buttonstyle2");
    sidebar.appendChild(pushFromLocal);
  }

  function createDisplay() {
    const main = document.querySelector(".main");
    const display = document.createElement("div");
    display.classList.add("display");
    main.appendChild(display);
  }

  function createTaskFilterMenu() {
    const display = document.querySelector(".display");
    const TaskFilterMenu = document.createElement("div");
    TaskFilterMenu.classList.add("TaskFilterMenu");
    display.appendChild(TaskFilterMenu);
  }

  function createTaskDisplay() {
    const display = document.querySelector(".display");
    const taskDisplay = document.createElement("div");
    taskDisplay.classList.add("taskDisplay");
    display.appendChild(taskDisplay);
  }

  // Task displayer creation (cards)

  function arrayPrinter(currentArray) {
    // Use as cleaner & rebuilder of cards visible to user
    const oldCards = document
      .querySelectorAll(".taskCard")
      .forEach((e) => e.remove());
    console.log(currentArray);
    currentArray.forEach((task) => DOM.createTaskCard(task));
  }

  function createTaskCard(task) {
    const taskDisplay = document.querySelector(".taskDisplay");

    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskDisplay.appendChild(taskCard);

    const cardLeftSide = document.createElement("div");
    cardLeftSide.classList.add("cardLeftSide");
    taskCard.appendChild(cardLeftSide);

    const taskName = document.createElement("div");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.getName();
    cardLeftSide.appendChild(taskName);

    const projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.innerHTML = task.getProject();
    cardLeftSide.appendChild(projectName);

    const cardRightSide = document.createElement("div");
    cardRightSide.classList.add("cardRightSide");
    taskCard.appendChild(cardRightSide);

    const rightTopSideCont = document.createElement("div");
    rightTopSideCont.classList.add("rightTopSideCont");
    cardRightSide.appendChild(rightTopSideCont);

    const editButtonCont = document.createElement("div");
    editButtonCont.classList.add("editButtonCont");
    editButtonCont.innerHTML = `<span class="material-symbols-rounded">edit_note</span><span class="material-symbols-rounded">delete</span>`;
    rightTopSideCont.appendChild(editButtonCont);

    const taskDoneCheckbox = document.createElement("div");
    taskDoneCheckbox.classList.add("taskDoneCheckbox");
    taskDoneCheckbox.innerHTML = `<input type="checkbox" id="taskdone" name="taskdone"><label for="taskdone">Done</label>`;
    rightTopSideCont.appendChild(taskDoneCheckbox);

    const rightLowSideCont = document.createElement("div");
    rightLowSideCont.classList.add("rightLowSideCont");
    rightLowSideCont.innerHTML = `Due in ${task.isTheDate()} days`;
    cardRightSide.appendChild(rightLowSideCont);
  }

  // Form and overlay to add new tasks

  function formCreator() {
    const overlay = document.querySelector("#inputOverlay");

    const form = document.createElement("form");
    form.setAttribute("method", "post");

    const taskName = document.createElement("input");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("name", "taskName");
    taskName.setAttribute("placeholder", "Task");

    const projectName = document.createElement("input");
    projectName.setAttribute("type", "text");
    projectName.setAttribute("name", "projectName");
    projectName.setAttribute("placeholder", "Project");

    const priority = document.createElement("input");
    priority.setAttribute("type", "select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("value", "High");
    priority.setAttribute("value", "Normal");
    priority.setAttribute("value", "Low");

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "selectedDate");

    const info = document.createElement("input");
    info.setAttribute("type", "textarea");
    info.setAttribute("name", "info");
    info.setAttribute("rows", "5");
    info.setAttribute("cols", "30");
    info.setAttribute("placeholder", "Notes");

    form.appendChild(taskName);
    form.appendChild(projectName);
    form.appendChild(priority);
    form.appendChild(dueDate);
    form.appendChild(info);

    overlay.appendChild(form);

    const addToTaskList = document.createElement("button");
    addToTaskList.innerHTML = "Add task to list";
    addToTaskList.setAttribute("id", "addToTaskList");
    addToTaskList.classList.add("buttonstyle1");

    overlay.appendChild(addToTaskList);
    addToTaskListListener();
  }

  function overLayRendered() {
    const content = document.querySelector(".main");
    const inputOverlay = document.createElement("div");
    inputOverlay.setAttribute("id", "inputOverlay");
    inputOverlay.className = "inputOverlay";
    content.appendChild(inputOverlay);
    formCreator();
  }

  function overLayDestroyer() {
    const overlay = document.querySelector(".inputOverlay");
    overlay.remove();
  }

  // Function to run on load to draw the UI elements

  function createUI() {
    createHeader();
    createMain();
    createSidebar();
    createDisplay();
    createTaskFilterMenu();
    createTaskDisplay();
    arrayPrinter(taskArray.taskStorage);
  }

  // Event listeners

  function addToTaskListListener() {
    const buttonListener2 = document.querySelector("#addToTaskList");

    buttonListener2.addEventListener("click", () => {
      const form = document.querySelector("#inputOverlay");
      const name = form.querySelector('input[name="taskName"]').value;
      const project = form.querySelector('input[name="projectName"]').value;
      const priority = form.querySelector('input[name="priority"]').value;
      const date = form.querySelector('input[id="selectedDate"]').value;
      const info = form.querySelector('input[name="info"]').value;

      const newTask1 = new newTask(
        name,
        project,
        priority,
        new Date(`${date}T00:00`),
        info
      );
      taskArray.taskStorage.push(newTask1);
      newTask1.isTheDate();
      overLayDestroyer();
      arrayPrinter(taskArray.taskStorage);
    });
  }

  function logArrayListener() {
    const logArrayBtn = document.querySelector("#logArrayBtn");
    logArrayBtn.addEventListener("click", () => {
      taskArray.pushToLocal();
      console.log("JOO");
    });
  }

  function pullFromLocal() {
    const logLocalBtn = document.querySelector("#pushFromLocal");
    logLocalBtn.addEventListener("click", () => {
      taskArray.pullFromLocal();
    });
  }

  return {
    createUI,
    overLayRendered,
    createTaskCard,
    addToTaskListListener,
    logArrayListener,
    pullFromLocal,
    arrayPrinter,
  };
})();

export { DOM };
