import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './Login/LoginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;