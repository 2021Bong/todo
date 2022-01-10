import { memo, useRef } from "react";
import styles from "./Item.module.css";

const TodoName = memo(({ id, name, status, edit, editItem }) => {
  const inputRef = useRef();
  const editName = (e) => {
    const newName = e.target.value;
    console.log(newName);
    editItem(newName, id);
  };
  if (edit === true) {
    return (
      <input
        ref={inputRef}
        onChange={editName}
        autoFocus
        type="text"
        value={name}
      />
    );
  }
  if (status === true) {
    return <div className={styles.checkedName}>{name}</div>;
  }
  return <div>{name}</div>;
});

export default TodoName;
