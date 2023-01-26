
class newTask {
    constructor(name, project, priority, dueDate, info) {
        this.name = name
        this.project = project
        this.priority = priority
        this.dueDate = dueDate
        this.info = info
        this.isCompleted = false
    }
    //Getters
    getName() {
        return this.name
    }
    getProject() {
        return this.project
    }
    getDate() {
        return this.dueDate
    }
    getInfo() {
        return this.info
    }
    getCompletion() {
        return this.isCompleted;
    }

    //Changers
    changeName(x) {
        return this.name = x
    }
    changeProject(x) {
        return this.project = x
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
        return days
    }
}


export {
    newTask
} 