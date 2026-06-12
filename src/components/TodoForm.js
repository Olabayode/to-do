function TodoForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.dispatch({ type: "CREATE_TASK" });
  }

  function handleChange(event) {
    props.dispatch({
      type: "UPDATE_TASK_TEXT",
      taskText: event.target.value,
    });
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task"
        value={props.taskText}
        onChange={handleChange}
      />
      <button className="add-button" type="submit">
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
