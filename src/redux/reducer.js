import { combineReducers } from 'redux';
import {
  CLEAR_ALL,
  INPUT_VALUE,
  INPUT_OPERATOR,
  UPDATE_CALCULATION_AND_RESULT,
} from '../constants';

const initialState = {
  calculation: [],
  inputting: '',
  prevValue: null,
  result: 0,
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        inputting: `${state.inputting}${action.value}`,
        result: 0,
      };
    case INPUT_OPERATOR:
      return {
        ...state,
        inputting: '',
        prevValue: state.inputting,
        calculation: [
          ...state.calculation,
          state.inputting || state.result,
          action.value,
        ],
      };
    case UPDATE_CALCULATION_AND_RESULT:
      return {
        ...state,
        inputting: '',
        prevValue: null,
        calculation: [],
        result: action.payload.result,
      };
    case CLEAR_ALL:
      return {
        inputting: '',
        prevValue: null,
        calculation: [],
        result: 0,
      };
    default:
      return state;
  }
};

export default function getRootReducer() {
  return combineReducers({
    calculator,
  });
}
