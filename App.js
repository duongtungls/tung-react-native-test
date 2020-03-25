import React from 'react';
import { Provider } from 'react-redux';
import App from './src/screens/Screen';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getRootReducer from './src/redux/reducer';

const store = createStore(
  getRootReducer(),
  composeWithDevTools(applyMiddleware(thunk)),
);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
