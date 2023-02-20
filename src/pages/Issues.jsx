import { useState } from "react";
import { useQuery } from "react-query";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { possibleStatus } from "../helpers/defaultData";

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [status, setStatus] = useState("");

  const filterToggler = (labelValue) => {
    console.log(selectedLabels.includes(labelValue));
    if (selectedLabels.includes(labelValue)) {
      setSelectedLabels(selectedLabels.filter((label) => label !== labelValue));
      return;
    }
    setSelectedLabels([...selectedLabels, labelValue]);
  };

  return (
    <div>
      <main>
        <div>
          <h1>Issues</h1>
          <IssuesList status={status} labels={selectedLabels} />
        </div>
        <aside>
          <LabelList
            toggle={(value) => filterToggler(value)}
            selected={selectedLabels}
          />
        </aside>
        <div>
          <h3>status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </div>
      </main>
    </div>
  );
}

const StatusSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="">Select a status to filter</option>
      {possibleStatus.map((status) => (
        <option value={status.id} key={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
};
