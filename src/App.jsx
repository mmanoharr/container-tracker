import "./App.css";

import ContainerList from "./components/ContainerList";
import PackageList from "./components/PackageList";
function App() {
  return (
    <div>
      <h1>Container Tracker Prototype</h1>
      <ContainerList />
      <PackageList />
    </div>
  );
}

export default App;
