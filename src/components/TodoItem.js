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
    <li>
      <span>{props.todo.text}</span>
      <button type="button" onClick={handleComplete}>
        {props.todo.completed ? "Undo" : "Complete"}
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
