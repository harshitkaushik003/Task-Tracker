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
        },
        edit: (state, action)=>{
            const {id, priority, status} = action.payload;
            const index = state.tasks.findIndex(task=>task.id === id);

            if(index !== -1){
                const currentTask = {...state.tasks[index]};

                currentTask.priority = priority;
                currentTask.status = status;


                if(status !== 'pending' && status !== 'in progress'){
                    const currentDate = new Date();
                    const year = currentDate.getFullYear();
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const day = String(currentDate.getDate()).padStart(2, '0');

                    const formattedDate = `${year}-${month}-${day}`;

                    currentTask.endDate = formattedDate;
                }else  {
                    currentTask.endDate = null;
                }

                state.tasks[index] = currentTask;
            }

        }
    }
});

export const taskReducer = taskSlice.reducer;
export const actions = taskSlice.actions;
export const taskSelector = (state)=>state.taskReducer;