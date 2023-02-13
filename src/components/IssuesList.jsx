import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ selectedLabels, status }) {
  const issuesQuery = useQuery({
    queryKey: ["issues", { selectedLabels, status }],
    queryFn: async () => {
      const statusQuery = status ? `&status=${status}` : "";
      const queryFilter = selectedLabels.map((l) => "labels[]=" + l).join("&");
      return fetch(`/api/issues?${queryFilter}${statusQuery}`).then((res) =>
        res.json()
      );
    },
  });

  const data = issuesQuery.data;

  return (
    <div>
      <h1>Issues List</h1>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {data.map((issue) => (
            <IssueItem key={issue.id} {...issue} />
          ))}
        </ul>
      )}
    </div>
  );
}
