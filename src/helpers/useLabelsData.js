import { useQuery } from "react-query";

export const useLabelsData = () => {
  const labelsQuery = useQuery(["labels"], ({ signal }) =>
    fetch("/api/labels", { signal }).then((res) => res.json())
  );

  return labelsQuery;
};
