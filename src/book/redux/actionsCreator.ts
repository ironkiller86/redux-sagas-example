import * as actionTypes from "./actionTypes";
import { Contact, ContactAction, DispatchType } from "../types";

export const addContact = (contact: Contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (index: string) => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload: index,
  };
};

export const httpCallFake = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("finito");
    }, 5000);
  });
};

export const toggleSpinner = (enableSpinner: boolean) => {
  return {
    type: actionTypes.TOGGLE_SPINNER,
    payload: enableSpinner,
  };
};

export const simulateHttpRequest = (action: ContactAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};
