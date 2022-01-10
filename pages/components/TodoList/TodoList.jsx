import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import CreateButton from "../Item/CreateButton";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Reading Book",
      status: false,
      edit: false,
    },
    {
      id: 2,
      name: "Wathing Movie",
      status: false,
      edit: false,
    },
    {
      id: 3,
      name: "Playing Game",
      status: false,
      edit: false,
    },
  ]);

  const [create, setCreate] = useState(false);

  const updateStatus = (id) => {
    // 이 부분 검색해서 해결함(값을 하위컴포넌트에서 받아오기보다는 여기서 해결하는게 나을 수도...?)
    setTodos(() => {
      const newTodos = [...todos];
      todos.map((todo) => {
        todo.id === id ? (todo.status = !todo.status) : todo.status;
      });
      return newTodos;
    });
  };

  const setCreateMode = () => {
    setCreate(create === false ? true : false);
  };

  const setEditMode = (id) => {
    setTodos(() => {
      const newTodos = [...todos];
      newTodos.map((todo) => {
        todo.id == id ? (todo.edit = !todo.edit) : todo.edit;
      });
      return newTodos;
    });
  };

  const editItem = (newName, id) => {
    setTodos(() => {
      const newTodos = [...todos];
      newTodos.map((todo) => {
        todo.id == id ? (todo.name = newName) : todo.name;
      });
      return newTodos;
    });
  };
  const deleteItem = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleAdd = (value) => {
    setCreateMode();
    value &&
      setTodos([
        ...todos,
        { id: new Date(), name: value, status: "Uncompleted", edit: false },
      ]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <span onClick={setCreateMode}>
        <CreateButton create={create} />
      </span>
      {create === true && (
        <div className="input-field">
          <TodoInput onAdd={handleAdd} create={create} />
        </div>
      )}
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            edit={item.edit}
            updateStatus={updateStatus}
            deleteItem={deleteItem}
            editItem={editItem}
            editMode={setEditMode}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
