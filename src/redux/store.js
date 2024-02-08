import { applyMiddleware, createStore } from "redux"
import rootReducer from "./rootReducer"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger))
const persistor = persistStore(store)
export {store, persistor}