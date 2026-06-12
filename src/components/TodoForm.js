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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={props.taskText}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
