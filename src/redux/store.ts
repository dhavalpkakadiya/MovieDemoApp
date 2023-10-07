
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ThemeReducer } from './reducer';

const rootReducer = combineReducers({
    theme: ThemeReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;