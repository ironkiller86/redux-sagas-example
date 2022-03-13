import { useCallback } from "react";
import styles from "../../Book.module.css";
import { useContacts } from "../../hooks/useContacts";
import { useSelector } from "react-redux";
import { spinner } from "../../redux/selector";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: flex;
  border-color: green;
  align-item: center;
`;

export const FormContacts = () => {
  const { contact, handlerFields, clearField, saveContact, enableBtn } =
    useContacts();
  const loadingFlag = useSelector(spinner);

  return (
    <>
      <form className={styles.form}>
        <input
          name="name"
          onChange={handlerFields}
          className={styles.input}
          value={contact.name}
          placeholder="Nome"
        />
        <input
          name="number"
          className={styles.input}
          value={contact.number}
          onChange={handlerFields}
          placeholder="numero"
        />
        <div className="btn">
          <button
            disabled={!enableBtn || loadingFlag}
            onClick={saveContact}
            className={styles.btnSx}
          >
            {loadingFlag ? (
              <ClipLoader
                color={"green"}
                loading={loadingFlag}
                //  css={override}
                size={8}
              />
            ) : (
              "Salva"
            )}
          </button>
          <button onClick={clearField} className={styles.btnDx}>
            Annulla
          </button>
        </div>
      </form>
    </>
  );
};
