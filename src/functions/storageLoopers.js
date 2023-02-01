import { DOM } from "../components/view/DOM";

function looper(storage) {
    storage.forEach(element => {
        console.log(element)
    });
}

function objectLooper(storageArray) {
    storageArray.forEach(task => DOM.createTaskCard(task))
}

export {
    looper,
    objectLooper
}