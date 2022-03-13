import { rootReducer } from "./rootReducer";
import { createStore, applyMiddleware, Store, compose } from "redux";
import { ApplicationState } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./book/rootSaga";
/*
 *
 */

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

export const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
