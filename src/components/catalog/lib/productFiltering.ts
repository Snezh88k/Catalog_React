import { Filter, Item } from "./types";

export const productFiltering = (productList: Item[], filter: Filter) => {
  const { startPrice = 0, endPrice = 10000, manufacturers } = filter;

  const productFiltered = productList.filter((product) => {
    return (
      product.price <= endPrice &&
      product.price >= startPrice &&
      (manufacturers?.length ? manufacturers.includes(product.maker) : true)
    );
  });
  return productFiltered;
};
