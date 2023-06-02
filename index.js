import { configureStore, createSlice } from "@reduxjs/toolkit";
import { increment, decrement, incrementBy, toggleRunning } from "./features/counter/counterSlice"
import store from './store'

/*
Redux:
- store: Single Source of Truth (where state lives)
- dispatch(action): called when we need to update state
- subscribe: called when we want to listen for updates to state
- reducer: a pure function that takes state + an action and returns a new state
- action: an object describing how we want to change state { type: "increment", payload: 10 }

Redux Toolkit:
- createSlice: a helpful function for creating a reducer, initializing state, and creating actions
- configureStore: a helpful function for setting up the store with one or more reducers
*/

store.subscribe(render)

function render() {
    const state = store.getState().counter

    // if store in store.js could be: 
    // const store = configureStore({reducer: counterReducer})
    // then state would be:
    // const state = store.getState()
    
    const count = document.querySelector("#count")
    
    // get the current count and display it
    count.textContent = `Count: ${state.count}`
    
    // show a play button or pause button based on state
    document.querySelector("#play").textContent = state.running ? "⏸" : "▶️"
}

setInterval(() => {
    const state = store.getState().counter
    // check if the app is paused or not
    if (state.running) {
        // dispatch an action to increase the count by 1
        store.dispatch(increment())
    }
}, 1000)

document.querySelector("#plus").addEventListener("click", () => {
    // dispatch an action to increase the count by 1
    store.dispatch(incrementBy(10))
})

document.querySelector("#minus").addEventListener("click", () => {
    // dispatch an action to decrease the count by 1
    store.dispatch(decrement())
})

document.querySelector("#play").addEventListener("click", () => {
    // check if the app is paused or not
    // dispatch an action to either play or pause the counter
    store.dispatch(toggleRunning())
})