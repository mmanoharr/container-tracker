import { useState } from "react";

function AssignmentEngine({ containers, packages }) {
  const [assignments, setAssignments] = useState({});
  const [containerData, setContainerData] = useState(containers);

  const handleSelectChange = (packageId, containerId) => {
    setAssignments((prev) => ({
      ...prev,
      [packageId]: containerId,
    }));
  };

  const handleAssign = () => {
    const updatedContainers = containerData.map((container) => {
      // make a copy of the container object
      const updatedContainer = {
        ...container,
        packages: [...container.packages],
      };
      for (const [packageId, containerId] of Object.entries(assignments)) {
        if (parseInt(containerId) === container.id) {
          const pkg = packages.find((p) => p.id === parseInt(packageId));
          // avoid adding the same package twice
          if (!updatedContainer.packages.find((p) => p.id === pkg.id)) {
            updatedContainer.packages.push(pkg);
            updatedContainer.usedVolume += pkg.volume;
            updatedContainer.usedWeight += pkg.weight;
          }
        }
      }
      return updatedContainer;
    });

    setContainerData(updatedContainers);
  };

  return (
    <div>
      <h2>Assignment Results</h2>
      {containerData.map((container) => (
        <div key={container.id}>
          <h3>
            {container.type} — {container.source} to {container.destination}
          </h3>
          <ul>
            {container.packages.map((p) => (
              <li key={p.id}>
                {p.description} (Volume: {p.volume} m³, Weight: {p.weight} kg)
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Assign Packages Manually</h2>
      <ul>
        {packages.map((p) => (
          <li key={p.id}>
            {p.description} — {p.source} to {p.destination}
            <br />
            <select
              value={assignments[p.id] || ""}
              onChange={(e) => handleSelectChange(p.id, e.target.value)}
            >
              <option value="">Select container</option>
              {containers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.type} ({c.source} to {c.destination})
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button onClick={handleAssign}>Assign Packages</button>
    </div>
  );
}

export default AssignmentEngine;
