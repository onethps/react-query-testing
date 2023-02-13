import { useParams } from "react-router-dom";

export const useIssueData = (issueNumber) => {
  return useQuery(["issues", issueNumber], async () => {
    return fetch(`/api/issues/${issueNumber}`).then((res) => res.json());
  });
};

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);

  return <div>{issueQuery.isLoading ? <p>Loading...</p> : <div>22</div>}</div>;
}
