import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  demo,
  selected,
  add,
  remove,
  toggleDone,
} from "../store/slices/todoSlice";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const todosState = useSelector(selected);
  const dispatch = useDispatch();
  const addTodo = (text) => {
    dispatch(add({ text }));
    setTodoText("");
  };
  const deleteTodo = (id) => {
    dispatch(remove({ id, demoText: "demo" }));
  };
  const toggleTodo = (id) => {
    dispatch(toggleDone({ id }));
  };
  let handleclick = () => {
    dispatch(demo());
  };
  const renderTodo = todosState.todos.map((todo, index) => (
    <TodoItem
      key={todo.id}
      data={todo}
      index={index}
      handleDelete={deleteTodo}
      handleToggleDone={toggleTodo}
    />
  ));
  return (
    <>
      <input
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        type="email"
      />
      <button
        disabled={todoText ? false : true}
        onClick={() => addTodo(todoText)}
        className="btn btn-sm btn-secondary "
      >
        Add
      </button>

      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Text</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTodo}</tbody>
      </table>
    </>
  );
};

export default Todos;
