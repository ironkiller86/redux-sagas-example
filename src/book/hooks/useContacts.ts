import { useState, useCallback, useEffect, useMemo } from "react";
import { addContact } from "../redux/actionsCreator";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "../types";
import { useDispatch } from "react-redux";

export const useContacts = () => {
  const dispatch = useDispatch();
  const [contact, setContacts] = useState<Contact>({
    name: "",
    number: "",
    uid: "",
  });

  const handlerFields: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      setContacts({ ...contact, [evt.target.name]: evt.target.value });
    },
    [contact]
  );

  const clearField = useCallback((evt: React.FormEvent) => {
    evt.preventDefault();
    setContacts({ name: "", number: "", uid: "" });
  }, []);

  const saveContact = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault();
      contact.uid = uuidv4();
      //  dispatch(addContact(contact));
      dispatch({ type: "ADD_ASYNC_CONTACT", payload: contact });
      clearField(evt);
    },
    [dispatch, contact]
  );

  const enableBtn = useMemo(() => {
    return !!contact.name && !!contact.number;
  }, [contact]);

  return {
    handlerFields,
    contact,
    clearField,
    saveContact,
    enableBtn,
  };
};
