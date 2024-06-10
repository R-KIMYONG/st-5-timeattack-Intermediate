import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: 0,
  reducers: {
    plusNum(state, action) {
      return Number(state) + Number(action.payload);
    },
    minusNum(state, action) {
        return state - Number(action.payload)
    },
  },
});

export const { plusNum, minusNum } = calculatorSlice.actions;
export default calculatorSlice.reducer;
