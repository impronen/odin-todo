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
    addTaskButton.innerHTML = `<span class="material-symbols-outlined">
    add_circle
    </span> Add task`;
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

  // Creating sidebar

  // Sidebar buttons

  function createSidebarButton() {
    const sideButtonContainer = document.querySelector(".sideButtonContainer");

    const allTasksButton = document.createElement("button");
    allTasksButton.innerHTML = `<span class="material-symbols-outlined ">
    view_cozy
    </span> All tasks`;
    allTasksButton.setAttribute("id", "allTasksButton");
    allTasksButton.classList.add("buttonstyle2");
    sideButtonContainer.appendChild(allTasksButton);

    const dueTodayButton = document.createElement("button");
    dueTodayButton.innerHTML = `<span class="material-symbols-outlined">
    today
    </span> Due today`;
    dueTodayButton.setAttribute("id", "dueTodayButton");
    dueTodayButton.classList.add("buttonstyle2");
    sideButtonContainer.appendChild(dueTodayButton);

    const upcomingButton = document.createElement("button");
    upcomingButton.innerHTML = `<span class="material-symbols-outlined">
    calendar_month
    </span> Due this week`;
    upcomingButton.setAttribute("id", "upcomingButton");
    upcomingButton.classList.add("buttonstyle2");
    sideButtonContainer.appendChild(upcomingButton);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<span class="material-symbols-outlined">
    checklist_rtl
    </span> Completed`;
    completedButton.setAttribute("id", "completedButton");
    completedButton.classList.add("buttonstyle2");
    sideButtonContainer.appendChild(completedButton);
  }

  // Main sidebar elements

  function createSidebar() {
    const main = document.querySelector(".main");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    main.appendChild(sidebar);

    const sideButtonContainer = document.createElement("div");
    sideButtonContainer.classList.add("sideButtonContainer");
    sidebar.appendChild(sideButtonContainer);

    createSidebarButton();

    const projectListContainer = document.createElement("div");
    projectListContainer.classList.add("projectListContainer");
    projectListContainer.innerHTML = `<h3 class="projectHeading">Projects</h3>`;
    sidebar.appendChild(projectListContainer);
  }

  // Sidebar project list - initialised w/ sidebarProjectList() and items are added w/ addSingleProjectToSidebar

  function projectListRemover() {
    const projectList = document.querySelector(".projectList");
    if (projectList != null) {
      projectList.remove();
    }
  }

  function sidebarProjectList(projectArray) {
    projectListRemover();
    const projectContainer = document.querySelector(".projectListContainer");
    const projectList = document.createElement("ul");
    projectList.classList.add("projectList");

    projectArray.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("id", `${project}`);
      listItem.dataset.project = `${project}`;
      listItem.innerHTML = `${project}`;
      projectList.appendChild(listItem);
    });
    projectContainer.appendChild(projectList);
  }

  // Creating right side of screen w/ filter menu & container for tasks

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
    document.querySelectorAll(".taskCard").forEach((e) => e.remove());
    currentArray.forEach((task) => DOM.createTaskCard(task));
  }

  function createTaskCard(task) {
    const taskDisplay = document.querySelector(".taskDisplay");

    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskCard.dataset.uuid = task.getUuid();
    taskDisplay.appendChild(taskCard);

    // Column 1
    const cardCol1 = document.createElement("div");
    cardCol1.classList.add("cardCol1");
    taskCard.appendChild(cardCol1);

    const taskName = document.createElement("div");
    taskName.classList.add("taskName");
    taskName.innerHTML = task.getName();
    cardCol1.appendChild(taskName);

    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.innerText = task.getDate();
    cardCol1.appendChild(dueDate);

    // Column 2
    const cardCol2 = document.createElement("div");
    cardCol2.classList.add("cardCol2");
    taskCard.appendChild(cardCol2);

    const projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.innerHTML = task.getProject();
    cardCol2.appendChild(projectName);

    const daysLeft = document.createElement("div");
    daysLeft.classList.add("daysLeft");
    daysLeft.innerHTML = `${task.isTheDate()} left`;
    cardCol2.appendChild(daysLeft);

    // Column 3
    const cardCol3 = document.createElement("div");
    cardCol3.classList.add("cardCol3");
    taskCard.appendChild(cardCol3);

    const taskDoneBtn = document.createElement("button");
    taskDoneBtn.classList.add("taskDoneBtn");
    if (task.getCompletion() === true) {
      taskDoneBtn.classList.add("completedBtn");
    }
    taskDoneBtn.innerText = "Done";
    cardCol3.appendChild(taskDoneBtn);

    const editButtonCont = document.createElement("div");
    editButtonCont.classList.add("editButtonCont");
    editButtonCont.innerHTML = `<span class="material-symbols-rounded edit">edit_note</span><span class="material-symbols-rounded delete">delete</span>`;
    cardCol3.appendChild(editButtonCont);
  }

  function removeTaskCard(card) {
    card.remove();
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
  }

  function overLayRendered() {
    const page = document.querySelector(".main");
    const inputOverlay = document.createElement("div");
    inputOverlay.setAttribute("id", "inputOverlay");
    inputOverlay.className = "inputOverlay";
    page.appendChild(inputOverlay);
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
  }

  return {
    createUI,
    overLayRendered,
    createTaskCard,
    arrayPrinter,
    overLayDestroyer,
    sidebarProjectList,
    removeTaskCard,
  };
})();

export default DOM;
