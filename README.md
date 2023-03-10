# Todo List or TaskLister

# What is this project about?

taskLister is my implementation of The Odin Projects [Todo-list project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

Built with vanilla JS, CSS and HTML.

Live site: https://impronen.github.io/odin-todo/

# FEATURES

Technical features:

- designed using the MVC pattern to have proper seperation of concerns
- as per MVC principles, view and model never directly interact but controller modules (taskcontroller and eventListeners) work as intermediares in directing actions
- built using webpack
- app uses npm packages such as dayjs and Google Material icons
- tasks are created with a class, other modules follow the IIFE pattern
- CSS transforms are used to create subtle animation effects
- all HTML elements are generated by DOM manipulation
- localstorage is used for permanence between sessions

User feature:

- user can add, edit and delete tasks
- user can view tasks based on project or other options (tasks due today, etc)
- task priority is indicated with a color coding
- task cards have indicators on how many days are left until task is overdue or if it is overdue
- user can come back to the app later and tasks have permanence in localstorage

# KNOWN ISSUES

- the app is not mobile responsive
- creation of DOM elements is inefficient and the code is hard to read, same holds for event listeners, where function names arent always properly indicative of purpose
- ~~user currently has no way of deleting a project other than deleting tasks one at a time -> feature to fix this is in planning~~ project deletion has been implemented

# THOUGHTS

This has been the most challenging and also rewarding project in my coding journey so far.
Using MVC pattern, class syntax and modules in general was a great lesson in code organisation.

The project scope has been significantly bigger than with the previous TOP assingments, so
proper planning was very helpful. For this I used Excalidraw, notebooks, notes on my repo and some pseudocode.
