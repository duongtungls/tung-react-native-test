import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const calculator = (state = initialState, action) => {};

function getRootReducer() {
  return combineReducers({
    calculator,
  });
}

export default function getStore() {
  return createStore(
    getRootReducer(),
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
