import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>Dictionary</header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Alana Vazquez and open-sourced on{" "}
        <a href="https://github.com/alanarv99/react-dictionary" target="blank">
          Github
        </a>
      </footer>
    </div>
  );
}
