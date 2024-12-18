import logo from "./logo.svg";
import "./App.css";
import ObjectEntry from "./components/ObjectEntry";
import RadarApp from "./components/RadarApp";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
      }}
    >
      <RadarApp />
    </div>
  );
}

export default App;
