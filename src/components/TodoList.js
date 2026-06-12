import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos || [];

  if (todos.length === 0) {
    return <p className="empty-state">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;
