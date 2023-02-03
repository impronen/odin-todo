import date from 'date-and-time';

class newProject {
    constructor(project) {
        this.project = project
    }

    getProject() {
        return this.project
    }
    changeProject(x) { //this needs further work once project management is implemented
        return this.project = x
    }
}


class newTask extends newProject {
    constructor(name, project, priority, dueDate, info) {
        super(project)
        this.name = name
        this.priority = priority
        this.dueDate = dueDate
        this.info = info
        this.isCompleted = false
        this.uuid = crypto.randomUUID()
    }
    //Getters
    getName() {
        return this.name
    }
    getDate() {
        let exportDate = date.format(this.dueDate, 'DD/MM')
        return exportDate
    }
    getInfo() {
        return this.info
    }
    getCompletion() {
        return this.isCompleted;
    }
    getUuid() {
        return this.uuid
    }
    
    //Changers
    changeName(x) {
        return this.name = x
    }
    changePriority(x) {
        return this.priority = x
    }
    changeDate(x) {
        return this.dueDate = x
    }
    changeInfo(x) {
        return this.info = x
    }
    changeCompletion() {
        if (this.isCompleted === false){
        return this.isCompleted = true;
        } else {
        return this.isCompleted = false; 
        }
    }

    //Other methods
    isTheDate() {
        let today = new Date().getTime()
        let dueDate = this.dueDate
        let difference = dueDate.getTime() - today;
        let days = Math.ceil(difference / (1000 * 3600 * 24));
        console.log(`Task is due in ${days} days.`)
        return days
    }

    projectConnector() {

    }
}


export {
    newTask
} 