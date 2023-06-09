import React, { useMemo, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useSearchParams } from "react-router-dom";

import styles from "./sortbar.module.css";
import iconsSearch from "../../img/icons_search.svg";
import CategoryFilter from "../category_filter/CategoryFilter";

import polygon from "../../img/Polygon.svg";
import deleteIcon from "../../img/icons_delete.svg";

export default function SortBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const findMaker = ["Нэфис", "Дося", "МММ", "Колгейт", "Лореаль", "Секреты"];

  const [searchSheet, setSearchSheet] = useState([
    "Нэфис",
    "Дося",
    "МММ",
    "Колгейт",
    "Лореаль",
    "Секреты",
  ]);

  const createSearchQuery = () => {
    const serchMaker = document.getElementById(
      "searchMaker"
    ) as HTMLInputElement;
    const message = findMaker.filter((item) => item.includes(serchMaker.value));
    setSearchSheet(message);
  };

  const [visibleCheckbox, setVisibleCheckbox] = useState("none");
  const isVisibleList = () => {
    visibleCheckbox === "none"
      ? setVisibleCheckbox("")
      : setVisibleCheckbox("none");
  };

  const initialValues = useMemo(() => {
    return {
      startPrice: searchParams.get("startPrice") || "",
      endPrice: searchParams.get("endPrice") || "",
      manufacturers: searchParams.getAll("manufacturers"),
    };
  }, [searchParams]);

  return (
    <div className={styles.sortLeftBar}>
      <div className={styles.wrapper_filter_param}>
        <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>
            Цена <b>₸</b>
          </span>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                setSearchParams(values);
              }}
              enableReinitialize
            >
              {({ values }) => {
                return (
                  <Form>
                    <div className={styles.price_input}>
                      <Field
                        id="startPrice"
                        name="startPrice"
                        placeholder="0"
                        type="number"
                      />
                      <span>-</span>

                      <Field
                        id="endPrice"
                        name="endPrice"
                        placeholder="10000"
                        type="number"
                      />
                    </div>
                    <h4>Производитель</h4>
                    <div className={styles.search}>
                      <input
                        onChange={createSearchQuery}
                        id="searchMaker"
                        type="text"
                        placeholder="Поиск..."
                      />
                      <img src={iconsSearch} alt="icons search" />
                    </div>

                    <div id="checkbox-group"></div>
                    <div role="group" aria-labelledby="checkbox-group">
                      {searchSheet.map((item, index) => {
                        return index < 4 ? (
                          <div className={styles.checkbox_wrapper} key={index}>
                            <Field
                              type="checkbox"
                              name="manufacturers"
                              value={item}
                            />
                            <label>{item}</label>
                          </div>
                        ) : (
                          <div
                            className={styles.checkbox_wrapper}
                            key={index}
                            style={{ display: visibleCheckbox }}
                          >
                            <Field
                              type="checkbox"
                              name="manufacturers"
                              value={item}
                            />
                            <label>{item}</label>
                          </div>
                        );
                      })}
                    </div>
                    <span className={styles.viewAll} onClick={isVisibleList}>
                      Показать все
                      <img src={polygon} alt="" />
                    </span>
                    <div className={styles.buttonWrapper}>
                      {" "}
                      <button type="submit" className={styles.buttonSubmit}>
                        Показать
                      </button>
                      <button
                        type="reset"
                        onClick={() => {
                          setSearchParams({});
                        }}
                        className={styles.buttonDelete}
                      >
                        <img src={deleteIcon} alt="del" />
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <CategoryFilter addClass={`sortBarColumn`} />
    </div>
  );
}
