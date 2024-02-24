import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// middleWares

// * our own middleware
const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('current state', store.getState());

    next(action); //all the reducers, store will run now

    console.log('next state', store.getState());
};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// root-reducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);