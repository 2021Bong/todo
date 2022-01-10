import { useRef } from "react";
import AddButton from "../Item/AddButton";
import styles from "./TodoInput.module.css";
const TodoInput = ({ onAdd }) => {
  const inputRef = useRef();
  // inputRef.current.focus();
  const clickAddButton = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onAdd(value);
  };

  // const onKeyPress = (e) => {
  //   console.log(e);
  //   if (e.key === "Enter") {
  //     clickAddButton();
  //   }
  // };

  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        autoFocus
        type="text" /*onKeyPress={onKeyPress}*/
      />
      <span onClick={clickAddButton}>
        <AddButton />
      </span>
    </form>
  );
};

export default TodoInput;
