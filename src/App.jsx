import { containers } from "./data/containers";
import { packages } from "./data/packages";
import ContainerList from "./components/ContainerList";
import PackageList from "./components/PackageList";
import AssignmentEngine from "./components/AssignmentEngine";

function App() {
  return (
    <div>
      <h1>Container Tracker Prototype</h1>
      {/* Show the container list */}
      <ContainerList containers={containers} />

      {/* Show the package list */}
      <PackageList packages={packages} />

      {/* Show the assignment results */}
      <AssignmentEngine containers={containers} packages={packages} />
    </div>
  );
}

export default App;
