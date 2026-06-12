import { useEffect, useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TASKS_DATA = "todoTasks";

const initialState = {
  tasks: [],
  taskText: "",
};

function formatTaskDate() {
  return new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getInitialState() {
  const savedTasks = localStorage.getItem(TASKS_DATA);

  if (savedTasks) {
    return {
      ...initialState,
      tasks: JSON.parse(savedTasks),
    };
  }

  return initialState;
}

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
            date: formatTaskDate(),
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
              date: formatTaskDate(),
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
  const [state, dispatch] = useReducer(todoReducer, initialState, getInitialState);

  useEffect(() => {
    localStorage.setItem(TASKS_DATA, JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <main className="app">
      <section className="todo-panel">
        <div className="app-header">
          <p className="app-label">Task manager</p>
          <h1>To-Do App</h1>
        </div>
        <TodoForm taskText={state.taskText} dispatch={dispatch} />
        <TodoList todos={state.tasks} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default App;
