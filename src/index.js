import "./styles/style.css";
import "./styles/cardstyles.css";
import { newTask } from "./components/controller/taskController.js";
import { taskArray } from "./components/model/storage";
import { DOM } from "./components/view/DOM";

DOM.createUI();

const buttonListener = document.querySelector("#addTaskButton");
buttonListener.addEventListener("click", DOM.overLayRendered);

DOM.arrayPrinter(taskArray.taskStorage);

/* DOM.addToTaskListListener() */
DOM.logArrayListener();
