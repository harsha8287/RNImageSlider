import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';

const logger = createLogger({ collapsed: true })

export const ConfigureStore = () => {
    const store = createStore(RootReducer, applyMiddleware(thunk, logger));
    return store;
}