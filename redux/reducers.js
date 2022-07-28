import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sum: null,
  input: '0',
  operator: null,
  previousInput: null,
  previousOp: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setInput: (state, action) => {
      if (state.input.length == 1 && state.input[0] === '0') {
        state.input = action.payload;
      } else {
        state.input += action.payload;
      }
    },
    clear: (state, action) => {
      state.sum = 0;
      state.input = '0';
      state.operator = null;
      state.previousInput = null;
      state.previousOp = null;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      if (state.previousInput === null) {
        switch (state.operator) {
          case '+':
            state.previousInput = state.input;
            state.input = '';
            state.previousOp = '+';
            state.operator = null;
            break;
          case '-':
            state.previousInput = state.input;
            state.previousOp = '-';
            state.input = '';
            state.operator = null;
            break;
          default:
            state.previousInput = state.input;
            state.input = 'default';
            state.operator = null;
            break;
        }
      } else if (state.previousInput !== null && state.previousOp !== null) {
        switch (state.previousOp) {
          case '+':
            state.previousInput =
              Number(state.previousInput) + Number(state.input);
            state.previousOp = state.operator;
            state.operator = null;
            state.input = '';
            break;
          case '-':
            state.previousInput =
              Number(state.previousInput) - Number(state.input);
            state.previousOp = state.operator;
            state.operator = null;
            state.input = '';
            break;
          default:
            state.input = 'default';
            state.operator = null;
            break;
        }
      } else {
      }
    },
  },
});

export const {setInput, clear, setOperator} = counterSlice.actions;

export default counterSlice.reducer;
