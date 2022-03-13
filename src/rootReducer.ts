import { combineReducers, Reducer } from "redux";
import { reducer } from "./book/redux/reducer";
import { ContactsState } from "./book/types";

export type ApplicationState = {
  bookState: ContactsState;
};

export const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    bookState: reducer,
  });
