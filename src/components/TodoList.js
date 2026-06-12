import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos || [];

  if (todos.length === 0) {
    return <p>No to-dos yet.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;
