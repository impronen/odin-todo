import "./styles/style.css";
import "./styles/cardstyles.css";
import taskArray from "./components/model/storage";
import DOM from "./components/view/DOM";
import EVENTS from "./components/controller/eventListeners";

// Setting up UI and loading the default task view (all tasks)

DOM.createUI();
EVENTS.setDefaultViewListeners();

taskArray.checkLocalOnLoad();
DOM.arrayPrinter(taskArray.taskStorage);
DOM.sidebarProjectList(taskArray.filterProjectNames());
