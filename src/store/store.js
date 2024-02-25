import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import logger from "redux-logger"; // I could use logger, but I prefer to use my own middleware for now

import { rootSaga } from './root-saga';
import { rootReducer } from "./root-reducer";
import { loggerMiddleware } from './middleware/logger';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'development' && loggerMiddleware,
    sagaMiddleware,
].filter(Boolean);

//to use the redux tools chrome extension 
const composeEnhancer = (
    process.env.NODE_ENV !== 'production' 
    && window 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


// root-reducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);