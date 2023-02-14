import "./styles/style.css";
import "./styles/cardstyles.css";
import { newTask } from "./components/controller/taskController";
import { taskArray } from "./components/model/storage";
import { DOM } from "./components/view/DOM";

DOM.createUI();
/* taskArray.checkLocalOnLoad() */

const buttonListener = document.querySelector("#addTaskButton");
buttonListener.addEventListener("click", DOM.overLayRendered);

DOM.pullFromLocal();
DOM.arrayPrinter(taskArray.taskStorage);

/* DOM.addToTaskListListener() */
DOM.logArrayListener();
