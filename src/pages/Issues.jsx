import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { StatusSelect } from "../components/StatusSelect";

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
        <section>
          <IssuesList labels={selectedLabels} status={status} />
        </section>
        <aside>
          <LabelList
            toggle={(value) => filterToggler(value)}
            selected={selectedLabels}
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
          <hr />
          <Link className="button" to="/add">
            Add Issue
          </Link>
        </aside>
      </main>
    </div>
  );
}
