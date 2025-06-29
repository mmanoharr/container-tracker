import { packages } from "../data/packages";

function PackageList() {
  return (
    <div>
      <h2>Package List</h2>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            <strong>{pkg.description}</strong> — {pkg.source} to{" "}
            {pkg.destination}
            <br />
            Volume: {pkg.volume} m³, Weight: {pkg.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageList;
