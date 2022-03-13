import { FormContacts, ContactsList } from "../components";

import styles from "../Book.module.css";

export const Screen: React.FC = () => {
  return (
    <div className={styles.home}>
      <FormContacts />
      <ContactsList />
    </div>
  );
};
