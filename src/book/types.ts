export type Contact = {
  uid: string;
  name: string;
  number: string;
};

export type ContactsState = {
  contactList: Contact[];
  loading: boolean;
};

type Payload = {
  contact?: Contact;
  uid?: string;
  enableSpinner?: boolean;
};

export type ContactAction = {
  type: string;
  payload: Payload;
};

export type DispatchType = (args: ContactAction) => ContactAction;
