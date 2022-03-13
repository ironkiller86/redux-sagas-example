import { useCallback } from "react";
import styles from "../../Book.module.css";
import { useSelector } from "react-redux";
import { contacts } from "../../redux/selector";
import Delete from "../../../assets";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actionsCreator";

export const ContactsList: React.FC = () => {
  const dispatch = useDispatch();
  const delContact = useCallback((uid: string) => {
    dispatch(deleteContact(uid));
  }, []);
  const contactList = useSelector(contacts);
  return (
    <>
      <p>ContactsList</p>
      <div className={styles.listContainer}>
        {contactList?.map((contact, index) => (
          <div key={index + contact.number} className={styles.row}>
            <p style={{ width: "10%" }}>{index + 1}</p>
            <p style={{ width: "30%" }}>{contact.name}</p>
            <p style={{ width: "30%" }}>{contact.number}</p>
            <div
              style={{
                width: "10%",
                alignSelf: "center",
                justifyItems: "center",
              }}
            >
              <div
                onClick={() => delContact(contact.uid)}
                style={{ width: "25px" }}
              >
                <Delete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
