import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        running: true
    },
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        toggleRunning: state => {
            state.running = !state.running
        },
        incrementBy: (state, action) => {
            state.count += action.payload
        }
    }
})

// slice.reducer
// slice.actions
export const { increment, decrement, toggleRunning, incrementBy } = slice.actions

export default slice.reducer