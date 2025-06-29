import "./App.css";
import { containers } from "./data/containers";
import { packages } from "./data/packages";
function App() {
  console.log("Containers", containers);
  console.log("Packages", packages);
  return (
    <div>
      <h1>Container Tracker Prototype</h1>
    </div>
  );
}

export default App;
