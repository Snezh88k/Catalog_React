import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginatedItems from "../paginated/paginated";
import Skeleton from "./Skeleton";

import styles from "./catalog.module.css";

import ProductCard from "../productCardInCatalog/ProductCard";

interface Filter {
  startPrice: string;
  endPrice: string;
  checked: string[];
  search: string;
  sort: string;
  sortOrder: string;
}

interface Item {
  id: string;
  imageUrl: string;
  name: string;
  typeSize: string;
  size: string;
  barcode: string;
  maker: string;
  brend: string;
  description: string;
  price: number;
  scopeOfApplication: string[];
}

const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams({
    sortBy: "name",
    order: "asc",
  });
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filter = useMemo<Filter>(
    () => ({
      startPrice: searchParams.get("startPrice") || "",
      endPrice: searchParams.get("endPrice") || "",
      checked: searchParams.getAll("checked"),
      search: searchParams.get("search") || "",
      sort: searchParams.get("sortBy") || "",
      sortOrder: searchParams.get("order") || "",
    }),
    [searchParams]
  );

  useEffect(() => {
    setIsLoading(true);

    const url = new URL("https://641b23c71f5d999a445c652b.mockapi.io/products");
    url.searchParams.append("sortBy", filter.sort);
    url.searchParams.append("order", filter.sortOrder || "asc");
    if (filter.search) {
      url.searchParams.append("search", filter.search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((items) => {
        setIsLoading(false);

        console.log(items, "items");

        const filterItems = (
          items: Item[],
          makerArr: string[],
          startPrice = 0,
          endPrice = 10000
        ) => {
          if (isNaN(endPrice)) {
            endPrice = 10000;
          }
          if (isNaN(startPrice)) {
            startPrice = 0;
          }

          const itemsFiltered = items.filter((product) => {
            return (
              product.price <= endPrice &&
              product.price >= startPrice &&
              (makerArr?.length ? makerArr.includes(product.maker) : true)
            );
          });
          return itemsFiltered;
        };

        if (isNaN(parseFloat(filter.endPrice))) {
          setItems(
            filterItems(
              items,
              filter.checked,
              parseFloat(filter.startPrice),
              10000
            )
          );
        } else if (isNaN(parseFloat(filter.startPrice))) {
          setItems(
            filterItems(items, filter.checked, 0, parseFloat(filter.endPrice))
          );
        } else {
          setItems(
            filterItems(
              items,
              filter.checked,
              parseFloat(filter.startPrice),
              parseFloat(filter.endPrice)
            )
          );
        }
      });
  }, [filter]);

  function Items({ currentItems }: { currentItems: Item[] }) {
    return (
      <div className={styles.catalog_wrapper}>
        {currentItems &&
          currentItems.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        [...new Array(5)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PaginatedItems itemsPerPage={5} items={items} Items={Items} />
      )}
    </div>
  );
};

export default Catalog;
