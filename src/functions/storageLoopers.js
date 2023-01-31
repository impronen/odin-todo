import { createTaskCard } from '../components/view/uiCreator'

function looper(storage) {
    storage.forEach(element => {
        console.log(element)
    });
}

function objectLooper(storageArray) {
    storageArray.forEach(task => createTaskCard(task))
}

export {
    looper,
    objectLooper
}