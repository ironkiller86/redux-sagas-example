import { createSelector } from "reselect";

import { ContactsState } from "../types";
import { ApplicationState } from "../../rootReducer";

export const contacts = (state: ApplicationState) =>
  state.bookState.contactList;
export const spinner = (state: ApplicationState) => state.bookState.loading;
