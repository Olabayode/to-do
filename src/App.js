import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialState = {
  tasks: [],
  taskText: "",
};

function todoReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TASK_TEXT":
      return {
        ...state,
        taskText: action.taskText,
      };
    case "CREATE_TASK":
      if (state.taskText.trim() === "") {
        return state;
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: state.taskText,
            completed: false,
          },
        ],
        taskText: "",
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              text: action.text,
            };
          }

          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        }),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <main>
      <h1>To-Do App</h1>
      <TodoForm taskText={state.taskText} dispatch={dispatch} />
      <TodoList todos={state.tasks} dispatch={dispatch} />
    </main>
  );
}

export default App;
