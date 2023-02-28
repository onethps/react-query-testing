import { possibleStatus } from "../helpers/defaultData";

export const StatusSelect = ({ value, onChange, noEmptyOption = false }) => {
  console.log(value);
  return (
    <select value={value} onChange={onChange} className="status-select">
      {noEmptyOption ? null : (
        <option value="">Select a status to filter</option>
      )}
      {possibleStatus.map((status) => (
        <option value={status.id} key={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
};