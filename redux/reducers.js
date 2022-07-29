import {createSlice} from '@reduxjs/toolkit';

const initialState = {
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
    clear: state => {
      state.input = '0';
      state.operator = null;
      state.previousInput = null;
      state.previousOp = null;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      // This is the first input of the equation
      // So we need to store the previous input and the previous operator in the state

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
          case 'x':
            state.previousInput = state.input;
            state.previousOp = 'x';
            state.input = '';
            state.operator = null;
            break;
          case '/':
            state.previousInput = state.input;
            state.previousOp = '/';
            state.input = '';
            state.operator = null;
            break;
          case '=':
            state.previousInput = state.input;
            state.previousOp = '=';
            state.input = '= ' + state.input;
            state.operator = null;
            break;
          case '+/-':
            state.input = Number(state.input) * -1;
            break;
          default:
            state.previousInput = state.input;
            state.input = 'default';
            state.operator = null;
            break;
        }
      } else if (
        // This is the case where the user has already entered a number and then pressed an operator button
        // The user has to press the operator button again to perform the operation

        state.previousInput !== null &&
        state.previousOp !== null &&
        state.input !== ''
      ) {
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
          case 'x':
            state.previousInput =
              Number(state.previousInput) * Number(state.input);
            state.previousOp = state.operator;
            state.operator = null;
            state.input = '';
            break;
          case '/':
            state.previousInput =
              Number(state.previousInput) / Number(state.input);
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
        // This is the case when you press an operator button if you have not enter any number.
        // if previousInput is and previousOp is not null but input is empty
        // then you can change the operator whenever you like.

        switch (state.operator) {
          case '+':
            state.previousOp = '+';
            state.operator = null;
            break;
          case '-':
            state.previousOp = '-';
            state.operator = null;
            break;
          case 'x':
            state.previousOp = 'x';
            state.operator = null;
            break;
          case '/':
            state.previousOp = '/';
            state.operator = null;
            break;
          case '+/-':
            state.input = Number(state.input) * -1;
            state.operator = null;
            break;

          default:
            state.previousInput = state.input;
            state.input = 'defaultaaa';
            state.operator = null;
            break;
        }
      }
    },
    handleEqual: (state, action) => {
      switch (state.previousOp) {
        case '+':
          state.previousOp = state.operator;
          state.operator = null;
          state.input =
            '=' + (Number(state.previousInput) + Number(state.input));
          state.previousInput = null;
          break;
        case '-':
          state.previousOp = state.operator;
          state.operator = null;
          state.input =
            '=' + (Number(state.previousInput) - Number(state.input));
          state.previousInput = null;
          break;
        case 'x':
          state.previousOp = state.operator;
          state.operator = null;
          state.input = '=' + Number(state.previousInput) * Number(state.input);
          state.previousInput = null;
          break;
        case '/':
          state.previousOp = state.operator;
          state.operator = null;
          state.input = '=' + Number(state.previousInput) / Number(state.input);
          state.previousInput = null;
          break;
        default:
          state.previousInput = null;
          state.previousOp = null;
          state.input = '0';
          state.operator = null;
          break;
      }
    },
  },
});

export const {setInput, clear, setOperator, handleEqual} = counterSlice.actions;

export default counterSlice.reducer;
