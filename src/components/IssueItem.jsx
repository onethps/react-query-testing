import React from "react";
import { GoIssueClosed, GoIssueOpened, GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../helpers/useUserData";
import { Label } from "./Label";

export const IssueItem = ({
  status,
  title,
  number,
  labels,
  createdDate,
  createdBy,
  assignee,
  commentCount,
}) => {
  const assigneeUser = useUserData(assignee);
  const createByUser = useUserData(createdBy);

  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => {
            return <Label key={label} label={label} />;
          })}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}
          {createByUser.isSuccess ? `by ${createByUser.data.name}` : ""}
        </small>
      </div>
      {assignee ? (
        <img
          src={
            assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
          }
          className="assigned-to"
          alt="Assigned to avatar"
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
};
