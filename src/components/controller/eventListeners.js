import newTask from "./taskController";
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

      const newTask1 = new newTask(
        name,
        project,
        priority,
        new Date(`${date}T00:00`),
        info
      );
      taskArray.taskStorage.push(newTask1);
      newTask1.isTheDate();
      DOM.overLayDestroyer();
      DOM.arrayPrinter(taskArray.taskStorage);
    });

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
      addToTaskListListener,
      logArrayListener,
      pullFromLocal,
    };
  }
})();

export default EVENTS;
