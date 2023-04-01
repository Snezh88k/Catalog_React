import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

import styles from "./productCard.module.css";
import iconsCart from "../../img/icons_cart.svg";
import iconsDown from "../../img/icons_download.svg";

type Data = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  typeSize: string;
  brend: string;
  barcode: string;
  maker: string;
};

export function Product() {
  const data = useLoaderData() as Data;
  const dispatch = useDispatch();

  const { id, name, price, imageUrl, size, typeSize, brend, barcode, maker } =
    data;
  const [count, setCount] = useState(1);

  const onClickAdd = () => {
    const product = {
      id,
      name,
      price,
      imageUrl,
      count,
      size,
      typeSize,
      brend,
    };

    dispatch(addItem(product));
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    count > 2 ? setCount(count - 1) : setCount(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <span>Главная</span>
        <span>Каталог</span>
        <span>
          {brend} {name}
        </span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={imageUrl} alt="card_image" />
        </div>

        <div className={styles.description}>
          <span className={styles.stock}>В наличии</span>
          <span className={styles.name}>
            <b>{brend} </b>
            <span>{name}</span>
          </span>
          <span className={styles.size}>
            {size} {typeSize === "weight" ? "г" : "мл"}
          </span>
          <div className={styles.bye_block}>
            <span className={styles.price}>{price} ₸</span>
            <div>
              <button onClick={onClickMinus}>-</button>
              <span>{count}</span>
              <button onClick={onClickPlus}>+</button>
            </div>
            <div onClick={onClickAdd}>
              <span>В корзину</span>
              <img src={iconsCart} alt="cart" />
            </div>
          </div>
          <div className={styles.promo}>
            <span></span>
            <span>
              При покупке от <b>10 000 ₸</b> бесплатная <br /> доставка по
              Кокчетаву и области
            </span>
            <span>
              Прайс-лист <img src={iconsDown} alt="down" />
            </span>
          </div>
          <span>
            Производитель: <span>{maker}</span>
          </span>
          <span>
            Бренд: <span>{brend}</span>
          </span>
          <span>Артикул: 460404</span>
          <span>
            Кол-во в коробке: <span>2</span>
          </span>
          <span>Штрихкод: {barcode}</span>
          <span>Размеры коробки:</span>
          <span>Вес коробки:</span>
          <span>Описание ▼</span>
          <span>Характеристики ▼</span>

          <div className="button-bye"></div>
        </div>
      </div>
    </div>
  );
}
