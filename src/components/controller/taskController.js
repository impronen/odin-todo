/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */
import date from "date-and-time";

const dayjs = require("dayjs");
// import dayjs from 'dayjs' // ES 2015
dayjs().format();

class Project {
  constructor(project) {
    this.project = project;
  }

  getProject() {
    return this.project;
  }

  changeProject(x) {
    // this needs further work once project management is implemented
    return (this.project = x);
  }
}

class Task extends Project {
  constructor(name, project, priority, dueDate, info, uuid, completion) {
    super(project);
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.info = info;
    this.isCompleted = false;
    if (uuid === undefined) {
      this.uuid = crypto.randomUUID();
    } else {
      this.uuid = uuid;
    }
    if (completion === undefined) {
      this.isCompleted = false;
    } else {
      this.isCompleted = completion;
    }
  }

  // Getters
  getName() {
    return this.name;
  }

  getDate() {
    const exportDate = date.format(this.dueDate, "DD/MM");
    return exportDate;
  }

  getInfo() {
    return this.info;
  }

  getCompletion() {
    return this.isCompleted;
  }

  getUuid() {
    return this.uuid;
  }

  // Changers
  changeName(x) {
    return (this.name = x);
  }

  changePriority(x) {
    return (this.priority = x);
  }

  changeDate(x) {
    return (this.dueDate = x);
  }

  changeInfo(x) {
    return (this.info = x);
  }

  changeCompletion() {
    if (this.isCompleted === false) {
      return (this.isCompleted = true);
    }
    return (this.isCompleted = false);
  }

  // Methods to show is the task due in how many days or this week etc
  isTheDate() {
    const today = new Date().getTime();
    const { dueDate } = this;
    const difference = dueDate.getTime() - today;
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    console.log(`Task is due in ${days} days.`);
    return days;
  }

  isTheWeek() {
    const week = dayjs().isSame(this.dueDate, "week");
    return week;
  }

  isTheMonth() {
    const month = dayjs().isSame(this.dueDate, "month");
    return month;
  }

  convertPriority() {
    const i = this.priority; // High, Normal, Low
    if (i === "High") {
      return 2;
    }
    if (i === "Normal") {
      return 1;
    }
    return 0;
  }
}

export default Task;
