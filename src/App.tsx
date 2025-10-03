import { useMemo, useState } from "react";
import "./App.css";
import { VersionSwitcher } from "./components/VersionSwitcher";
import { versionMap, type VersionKey } from "./constants/versions";

function App() {
  const [version, setVersion] = useState<VersionKey>("local");

  const handleVersionChange = (version: VersionKey) => {
    setVersion(version);
  };

  const SelectedVersion = useMemo(
    () => versionMap[version].component,
    [version]
  );

  return (
    <div>
      <VersionSwitcher handleVersionChange={handleVersionChange} />
      {SelectedVersion && <SelectedVersion />}
    </div>
  );
}

export default App;
