import { Formik, Field, Form } from "formik";

import React, { useEffect, useState } from "react";

import styles from "./adminPanel.module.css";

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  typeSize: string;
  size: string;
  barcode: string;
  maker: string;
  brend: string;
  description: string;
  price: string;
  scopeOfApplication: string[];
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
  price: string;
  scopeOfApplication: string[];
}

export default function AdminPanel() {
  const [arrayProduct, setArrayProduct] = useState([]);

  const showListProducts = () => {
    const url = new URL("https://641b23c71f5d999a445c652b.mockapi.io/products");
    fetch(url)
      .then((response) => response.json())
      .then((items) => {
        setArrayProduct(items);
        console.log(items, "arrayProduct");
      });
  };

  useEffect(() => {
    showListProducts();
  }, []);

  const addProduct = (product: Product) => {
    fetch("https://641b23c71f5d999a445c652b.mockapi.io/products/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        showListProducts();
      })
      .catch((error) => {});
  };

  const deleteProduct = (idProduct: string) => {
    fetch(`https://641b23c71f5d999a445c652b.mockapi.io/products/${idProduct}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        showListProducts();
      })
      .catch((error) => {});
  };

  const updateProduct = (idProduct: string, product: Product) => {
    fetch(`https://641b23c71f5d999a445c652b.mockapi.io/products/${idProduct}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        showListProducts();
      })
      .catch((error) => {
        console.log("Продукт не обновлён");
      });
  };

  let initialValues = {
    id: "",
    name: "",
    maker: "",
    barcode: "",
    brend: "",
    description: "",
    imageUrl: "",
    price: "",
    scopeOfApplication: [],
    size: "",
    typeSize: "",
  };

  return (
    <div className={styles.adminPanel}>
      <h3>Добавить новый товар:</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          addProduct(values);
        }}
        enableReinitialize
      >
        {({ values, setFieldValue }) => {
          const handleClick = (item: Item) => {
            setFieldValue("id", item.id);
            setFieldValue("name", item.name);
            setFieldValue("maker", item.maker);
            setFieldValue("barcode", item.barcode);
            setFieldValue("brend", item.brend);
            setFieldValue("description", item.description);
            setFieldValue("imageUrl", item.imageUrl);
            setFieldValue("price", item.price);
            setFieldValue("scopeOfApplication", item.scopeOfApplication);
            setFieldValue("size", item.size);
            setFieldValue("typeSize", item.typeSize);
          };
          const updateClick = () => {
            console.log(values, "Обновлённый товар");
            updateProduct(values.id, values);
          };

          return (
            <Form className={styles.container}>
              <div className={styles.wrapper}>
                {/* <label htmlFor="id">Id товара:</label>
                <Field id="id" name="id" placeholder="Id товара" type="text" /> */}
                <label htmlFor="name">Название товара</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Название товара"
                  type="text"
                  required
                />
                <label htmlFor="maker">"Производитель</label>
                <Field
                  id="maker"
                  name="maker"
                  placeholder="Производитель"
                  type="text"
                  required
                />
                <label htmlFor="barcode">Штрихкод</label>
                <Field
                  id="barcode"
                  name="barcode"
                  placeholder="Штрихкод"
                  type="text"
                  required
                />
                <label htmlFor="brend">Бренд</label>
                <Field
                  id="brend"
                  name="brend"
                  placeholder="Бренд"
                  type="text"
                  required
                />
                <label htmlFor="description">Описание</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="Описание"
                  type="text"
                  required
                />
                <label htmlFor="imageUrl">Ссылка на изображение</label>
                <Field
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Ссылка на изображение"
                  type="text"
                  required
                />
                <label htmlFor="price">Цена</label>
                <Field
                  id="price"
                  name="price"
                  placeholder="Цена"
                  type="number"
                  required
                />
                <label htmlFor="size">Вес/Объем</label>
                <Field
                  id="size"
                  name="size"
                  placeholder="Вес/Объем"
                  type="text"
                  required
                />
                <label htmlFor="typeSize">
                  Ед. измерения: volume или weight
                </label>
                <Field
                  id="typeSize"
                  name="typeSize"
                  placeholder="Ед. измерения: volume или weight"
                  type="text"
                  required
                />

                <label htmlFor="scopeOfApplication">
                  Выберите категории товара:
                </label>

                <Field
                  component="select"
                  id="scopeOfApplication"
                  name="scopeOfApplication"
                  multiple={true}
                  required
                >
                  <option value="for body">Уход за телом</option>
                  <option value="for hands">Уход за руками</option>
                  <option value="for legs">Уход за ногами</option>
                </Field>

                <button type="submit">Добавить новый</button>
                <button type="reset">Сбросить форму</button>
                <button type="button" onClick={() => updateClick()}>
                  Обновить продукт
                </button>
                <p>
                  *При добавлении нового товара, значение ID добавляется
                  автоматически.
                </p>
              </div>

              <div>
                {arrayProduct.map((item: Item) => {
                  return (
                    <div key={item.id} className={styles.wrapperProduct}>
                      <div>{item.name}</div>
                      <button
                        type="button"
                        onClick={() => deleteProduct(item.id)}
                      >
                        Удалить продукт
                      </button>
                      <button type="button" onClick={() => handleClick(item)}>
                        Внести изменения
                      </button>
                    </div>
                  );
                })}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
