import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        add: (state, action)=>{
            state.tasks.push(action.payload);
        }
    }
});

export const taskReducer = taskSlice.reducer;
export const actions = taskSlice.actions;
export const taskSelector = (state)=>state.taskReducer;