import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { items:[] };

const popTableSlice = createSlice({
  name: 'popTable',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
  }
});

const store = configureStore({
  reducer: popTableSlice.reducer
});

export const popTableActions = popTableSlice.actions;

export default store;
