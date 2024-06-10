import { createSlice, current } from "@reduxjs/toolkit";

// TODO: todoSlice 를 작성하세요.
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    deleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleTodo(state, action) {
      const { itemId, currentIsDone } = action.payload;
      return state.map((item) =>
        item.id === itemId ? { ...item, isDone: !currentIsDone } : item
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
