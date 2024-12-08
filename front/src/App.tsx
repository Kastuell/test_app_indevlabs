import { TodoForm, TodoList } from "./shared/ui";

function App() {
  return (
    <div className="bg-secondary min-h-screen text-center pt-20 text-primary">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-7xl font-medium">TODO app</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
