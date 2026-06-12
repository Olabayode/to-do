function TodoItem(props) {
  return (
    <li>
      <span>{props.todo.text}</span>
      <button type="button">Complete</button>
      <button type="button">Delete</button>
    </li>
  );
}

export default TodoItem;
