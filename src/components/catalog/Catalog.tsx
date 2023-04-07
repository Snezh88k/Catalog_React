import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginatedItems from "../paginated/paginated";
import Skeleton from "./Skeleton";

import styles from "./catalog.module.css";

import ProductCard from "../productCardInCatalog/ProductCard";
import { Item } from "./lib/types";
import { parseFilterSearchParams } from "./lib/parseFilterSearchParams";
import { productFiltering } from "./lib/productFiltering";
import { createFilterUrl } from "./lib/createFilterSearchParams";

const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams({
    sortBy: "name",
    order: "asc",
  });

  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filter = useMemo(
    () => parseFilterSearchParams(searchParams),
    [searchParams]
  );

  useEffect(() => {
    const url = createFilterUrl(
      filter,
      "https://641b23c71f5d999a445c652b.mockapi.io/products"
    );

    fetch(url)
      .then((response) => response.json() as unknown as Item[])
      .then((items) => {
        setIsLoading(false);

        setItems(productFiltering(items, filter));
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
    <div className={styles.catalog}>
      {isLoading ? (
        [...new Array(5)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PaginatedItems itemsPerPage={5} items={items} Items={Items} />
      )}
    </div>
  );
};

export default Catalog;
