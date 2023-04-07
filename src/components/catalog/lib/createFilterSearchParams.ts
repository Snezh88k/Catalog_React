import { Filter } from "./types";

export const createFilterUrl = (filter: Filter, baseUrl: string): URL => {
  const url = new URL(baseUrl);
  url.searchParams.append("sortBy", filter.sort || "name");
  url.searchParams.append("order", filter.sortOrder || "asc");
  if (filter.search) {
    url.searchParams.append("search", filter.search);
  }
  return url;
};
