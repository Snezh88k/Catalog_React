import { Filter } from "./types";

const parsePrice = (price: string | null): number | undefined => {
  if (price === null) {
    return undefined;
  }
  const priceNumber = parseFloat(price);
  return Number.isNaN(priceNumber) ? undefined : priceNumber;
};

export const parseFilterSearchParams = (
  searchParams: URLSearchParams
): Filter => {
  const sortOrder = searchParams.get("sortOrder");
  return {
    startPrice: parsePrice(searchParams.get("startPrice")),
    endPrice: parsePrice(searchParams.get("endPrice")),
    manufacturers: searchParams.getAll("manufacturers"),
    search: searchParams.get("search") || "",
    sort: searchParams.get("sortBy") || "",
    sortOrder: sortOrder === "desc" ? "desc" : "asc",
  };
};
