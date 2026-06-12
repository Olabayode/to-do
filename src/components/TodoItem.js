import { FaCheck, FaPen, FaTrash, FaUndo } from "react-icons/fa";

function TodoItem(props) {
  function handleComplete() {
    props.dispatch({
      type: "COMPLETE_TASK",
      id: props.todo.id,
    });
  }

  function handleUpdate() {
    const newText = prompt("Update task", props.todo.text);

    if (newText !== null && newText.trim() !== "") {
      props.dispatch({
        type: "UPDATE_TASK",
        id: props.todo.id,
        text: newText,
      });
    }
  }

  function handleDelete() {
    props.dispatch({
      type: "DELETE_TASK",
      id: props.todo.id,
    });
  }

  return (
    <li className="todo-item">
      <div className="task-content">
        <span className={props.todo.completed ? "task-text completed" : "task-text"}>
          {props.todo.text}
        </span>
        <span className="task-date">{props.todo.date}</span>
      </div>
      <button
        type="button"
        className="icon-button complete-button"
        onClick={handleComplete}
        aria-label={props.todo.completed ? "Mark task incomplete" : "Complete task"}
        title={props.todo.completed ? "Mark incomplete" : "Complete"}
      >
        {props.todo.completed ? <FaUndo /> : <FaCheck />}
      </button>
      <button
        type="button"
        className="icon-button update-button"
        onClick={handleUpdate}
        aria-label="Update task"
        title="Update"
      >
        <FaPen />
      </button>
      <button
        type="button"
        className="icon-button delete-button"
        onClick={handleDelete}
        aria-label="Delete task"
        title="Delete"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
