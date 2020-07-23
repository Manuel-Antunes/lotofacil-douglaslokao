import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import { persistStore } from 'redux-persist';
import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';
import persistReducers from './persistReducers';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
