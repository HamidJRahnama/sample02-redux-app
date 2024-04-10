import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  demo,
  demoChange,
  selected,
  add,
  remove,
  toggleDone,
} from "../store/slices/todoSlice";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const todosState = useSelector(selected);
  const todosIndex = useSelector((store) => Object.keys(store.todoSlice.todos));
  console.log(todosIndex);
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
  const handleChange = (id, text) => {
    dispatch(demoChange({ id, text }));
  };
  const demoRenderTodo = todosIndex.map((todosIndex) => (
    <TodoItem
      key={todosIndex}
      index={todosIndex}
      // index={index}
      handleDelete={deleteTodo}
      handleToggleDone={toggleTodo}
    />
  ));
  // const renderTodo = todosState.todos.map((todo, index) => (
  //   <TodoItem
  //     key={todo.id}
  //     data={todo}
  //     index={index}
  //     handleDelete={deleteTodo}
  //     handleToggleDone={toggleTodo}
  //   />
  // ));
  return (
    <>
      <button
        onClick={() => handleChange(1, "Changes 1")}
        className="btn btn-sm btn-info "
      >
        Change
      </button>
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
        <tbody>{demoRenderTodo}</tbody>
      </table>
    </>
  );
};

export default Todos;
