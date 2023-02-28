import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

async function addIssue(issueBody) {
  return fetch("/api/issues", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(issueBody),
  }).then((res) => res.json());
}

export default function AddIssue() {
  const client = useQueryClient();
  const navigate = useNavigate();

  const addIssueMutation = useMutation(addIssue, {
    onSuccess: (data) => {
      client.invalidateQueries(["issues"], { exact: true });
      client.setQueriesData(["issues", data.number.toString()], data);
      navigate(`/issue/${data.number}`);
    },
  });

  return (
    <div className="add-issue">
      <h2>Add Issue</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (addIssue.isLoading) return;
          addIssueMutation.mutate({
            comment: event.target.comment.value,
            title: event.target.title.value,
          });
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="title" name="title" />
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment" placeholder="comment" />
        <button type="submit" disabled={addIssueMutation.isLoading}>
          {addIssueMutation.isLoading ? "Adding Issue..." : "Add Issue"}
        </button>
      </form>
    </div>
  );
}
