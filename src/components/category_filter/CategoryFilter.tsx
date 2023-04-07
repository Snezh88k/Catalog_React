import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./categoryFilter.module.css";

interface Props {
  addClass?: string;
}

export default function CategoryFilter({ addClass }: Props) {
  const nameCategories = ["Уход за телом", "Уход за руками", "Уход за ногами"];

  const categories = ["for body", "for hands", "for legs"];

  const [visibleCategory, setVisibleCategory] = useState<number>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("search")) {
      setVisibleCategory(categories.indexOf(searchParams.get("search") || ""));
    }
  }, []);

  useEffect(() => {
    setVisibleCategory(categories.indexOf(searchParams.get("search") || ""));
  }, [searchParams]);

  const onClickCategory = (indexCategory: number) => {
    searchParams.delete("search");
    if (indexCategory === visibleCategory) {
      setVisibleCategory(-1);
    } else {
      setVisibleCategory(indexCategory);
      searchParams.append("search", categories[indexCategory]);
    }
    setSearchParams(searchParams);
  };

  return (
    <div
      className={
        addClass ? ` ${styles.wrapper} ${styles[addClass]}` : styles.wrapper
      }
    >
      {nameCategories.map((category, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickCategory(index)}
            className={
              visibleCategory === index ? styles.active : styles.inactive
            }
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}
