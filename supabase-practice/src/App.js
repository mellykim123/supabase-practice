import "./App.css";
import SupabaseProvider from "./SupabaseProvider.js";

function App() {
  return (
    <div className="App">
      <SupabaseProvider>
        <h1>Login</h1>
      </SupabaseProvider>
    </div>
  );
}

export default App;
