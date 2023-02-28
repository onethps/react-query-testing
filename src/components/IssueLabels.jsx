import React from "react";
import { useLabelsData } from "../helpers/useLabelsData";

export const IssueLabels = ({ labels, issueNumber }) => {
  const labelsQuery = useLabelsData();

  return (
    <div className="issue-options">
      <div>
        <span>Labels</span>
      </div>
    </div>
  );
};
