import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    components: {
      1: {
        id: 1,
        type: 'Star',
        moveData: {
          moving: false,
          position: { x: 50, y: 100 },
          delta: undefined
        }
      },
      2: {
        id: 2,
        type: 'Circle',
        moveData: {
          moving: false,
          position: { x: 600, y: 100 },
          delta: undefined
        }
      },
    },
  },
  reducers: {
    updateElementMoveData: (state, action) => {
      const { id, moveData } = action.payload;
      state.components[id].moveData = moveData;
    },
  },
});

export const { updateElementMoveData } = boardSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectComponents = state => state.board.components;

export const selectComponent = id => state => state.board.components[id];

export default boardSlice.reducer;
