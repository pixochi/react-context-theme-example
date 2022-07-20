import logo from "./logo.svg";
import "./App.css";
import { useThemeContext } from "./useTheme";

function App() {
  // Accessing theme values from the context with the custom hook.
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="App">
      <header
        // Conditionally changing the className according to the current theme.
        className={`App-header ${
          theme === "dark" ? "App-header-dark" : "App-header-light"
        }`}
      >
        <div>
          {/* Buttons for updating the current theme. */}
          <button onClick={() => setTheme("light")}>Light theme</button>
          <button onClick={() => setTheme("dark")}>Dark theme</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p
          // Conditionally changing the className according to the current theme.
          className={
            theme === "dark" ? "App-description-dark" : "App-description-light"
          }
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
