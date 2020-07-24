import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
    const enhacer = applyMiddleware(...middlewares);
    return createStore(reducers, enhacer);
}