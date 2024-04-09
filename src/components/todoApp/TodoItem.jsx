import React from "react";

const TodoItem = (props) => {
  const todo = props.data;
  return (
    <tr className={todo.isDone ? "table-dark " : ""}>
      <td>{props.index + 1}</td>
      <td>{todo.text}</td>
      <td>
        <span>
          <button
            onClick={() => props.handleToggleDone(todo.id)}
            className="btn btn-sm btn-success  "
          >
            {todo.isDone ? "Undo" : "Done"}
          </button>
          <button
            onClick={() => props.handleDelete(todo.id)}
            className="btn btn-sm btn-danger "
          >
            Delete
          </button>
        </span>
      </td>
    </tr>
  );
};

export default TodoItem;
