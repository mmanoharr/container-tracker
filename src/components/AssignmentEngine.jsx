import React from "react";

const AssignmentEngine = ({ containers, packages }) => {
  const assignedContainers = containers.map((c) => ({ ...c }));

  packages.forEach((pkg) => {
    const match = assignedContainers.find(
      (c) =>
        c.source === pkg.source &&
        c.destination === pkg.destination &&
        c.capacity - c.usedVolume >= pkg.volume &&
        c.maxCargoWeight - c.usedWeight >= pkg.weight
    );
    if (match) {
      match.packages.push(pkg);
      match.usedVolume += pkg.volume;
      match.usedWeight += pkg.weight;
    }
  });

  return (
    <div>
      <h2>Assignment Results</h2>
      {assignedContainers.map((c) => (
        <div key={c.id}>
          <h3>
            {c.type} — {c.source} to {c.destination}
          </h3>
          {c.packages.length > 0 ? (
            <ul>
              {c.packages.map((pkg) => (
                <li key={pkg.id}>
                  {pkg.description} (Volume: {pkg.volume} m³, Weight:{" "}
                  {pkg.weight} kg)
                </li>
              ))}
            </ul>
          ) : (
            <p>No packages assigned</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssignmentEngine;
