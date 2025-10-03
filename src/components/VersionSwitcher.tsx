import { versionMap, versions, type VersionKey } from "../constants/versions";
interface VersionSwitcherProps {
  handleVersionChange: (version: VersionKey) => void;
}

export const VersionSwitcher = ({
  handleVersionChange,
}: VersionSwitcherProps) => {
  return (
    <select
      onChange={(event) =>
        handleVersionChange(event.target.value as VersionKey)
      }
    >
      {versions.map((v) => (
        <option key={v} value={v}>
          {versionMap[v].display}
        </option>
      ))}
    </select>
  );
};
