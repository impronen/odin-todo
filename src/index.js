import "./styles/style.css";
import "./styles/cardstyles.css";
import storage from "./components/model/storage";
import DOM from "./components/view/DOM";
import EVENTS from "./components/controller/eventListeners";

// Setting up UI and loading the default task view (all tasks)

DOM.createUI();
storage.checkLocalOnLoad();

DOM.arrayPrinter(storage.taskStorage);
DOM.sidebarProjectList(storage.filterProjectNames());
EVENTS.setDefaultViewListeners();
