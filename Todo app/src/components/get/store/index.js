import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { todo:[], completed:[] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    removeTodo(state, action) {
      state.todo = state.todo.filter(item => item.todo !== action.payload);
    },
    addCompleted(state, action) {
      state.completed.push(action.payload);
    },
    removeCompleted(state, action) {
      state.completed = state.completed.filter(item => item.todo !== action.payload);
    },
   
  }
});

const store = configureStore({
  reducer: todoSlice.reducer
});

export const todoActions = todoSlice.actions;

export default store;
