import * as actionTypes from "./actionTypes";
import { Contact, ContactsState, ContactAction } from "../types";

const initialState: ContactsState = {
  contactList: [],
  loading: false,
};

export const reducer = (
  state: ContactsState = initialState,
  action: ContactAction
): ContactsState => {
  switch (action.type) {
    case "ADD_CONTACT":
      console.log("payload", action.payload);
      return {
        ...state,
        contactList: [...state.contactList, action.payload as Contact],
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.uid !== (action.payload as string)
        ),
      };
    case "TOGGLE_SPINNER":
      return {
        ...state,
        loading: action.payload as boolean,
      };
  }
  return state;
};
