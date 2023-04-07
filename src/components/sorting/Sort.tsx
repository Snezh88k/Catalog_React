import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Media from "react-media";

import CategoryFilter from "../category_filter/CategoryFilter";
import styles from "./sort.module.css";
import polygon from "../../img/Polygon.svg";

type SortBy = "name" | "price";

const sortByLabel: Record<string, string> = {
  name: "Название",
  price: "Цена",
};

const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    sortBy: "name",
    order: "asc",
  });
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("order");

  const setSortedFilter = (
    sortBy: SortBy,
    sortOrder: "asc" | "desc" = "asc"
  ) => {
    searchParams.set("sortBy", sortBy);
    searchParams.set("order", sortOrder);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.sort_block}>
      <div className={styles.path}>
        <span>Главная</span>
        <span>Косметика и гигиена</span>
      </div>
      <div className={styles.sortAndH}>
        <h1>Косметика и гигиена</h1>
        <div className={styles.sort}>
          <span className={styles.activeCategory}>
            <b>Сортировка:</b>{" "}
          </span>
          <span onClick={() => setIsVisible(!isVisible)}>
            <span>
              {(sortBy && sortByLabel[sortBy]) || ""}
              {sortOrder === "desc" ? " ↓" : ""}
            </span>
            <img src={polygon} alt="" />
            {isVisible ? (
              <div className={styles.sortList}>
                <span onClick={() => setSortedFilter("name", "asc")}>
                  Название
                </span>
                <span onClick={() => setSortedFilter("name", "desc")}>
                  Название &#8595;
                </span>
                <span onClick={() => setSortedFilter("price", "asc")}>
                  Цена
                </span>
                <span onClick={() => setSortedFilter("price", "desc")}>
                  Цена &#8595;
                </span>
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
      <Media query="(min-width: 781px)" render={() => <CategoryFilter />} />
    </div>
  );
};

export default Sort;
