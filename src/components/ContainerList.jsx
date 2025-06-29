import { containers } from "../data/containers";

function ContainerList() {
  return (
    <div>
      <h2>Container List</h2>
      <ul>
        {containers.map((container) => (
          <li key={container.id}>
            <strong>{container.type}</strong> — {container.source} to{" "}
            {container.destination}
            <br />
            Capacity: {container.capacity} m³, Max Weight:{" "}
            {container.maxCargoWeight} kg
            <br />
            Currently used volume: {container.usedVolume} m³
            <br />
            Currently used weight: {container.usedWeight} kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContainerList;
