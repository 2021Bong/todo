import React from "react";
import Confirmed from "../Item/Confirmed";
import TodoName from "../Item/TodoName";
import EditButton from "../Item/EditButton";
import DeleteButton from "../Item/DeleteButton";
import styles from "./TodoItem.module.css";

const TodoItem = ({
  id,
  name,
  status,
  updateStatus,
  deleteItem,
  editItem,
  editMode,
  edit,
}) => {
  const onDelete = () => {
    deleteItem(id);
  };
  const onEdit = () => {
    console.log("click");
    editMode(id);
  };
  return (
    <div className={styles.item}>
      <Confirmed id={id} updateStatus={updateStatus} />
      <TodoName
        id={id}
        name={name}
        status={status}
        edit={edit}
        editItem={editItem}
      />
      <span className={styles.btn} onClick={onEdit}>
        <EditButton edit={edit} />
      </span>
      <span className={styles.btn} onClick={onDelete}>
        <DeleteButton />
      </span>
    </div>
  );
};

export default TodoItem;
