import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/slices/cartSlice";

import iconBotle from "../../img/icons_botle.svg";
import iconsCart from "../../img/icons_cart.svg";

import styles from "./productCard.module.css";

interface Props {
  item: {
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
  };
}

export default function ProductCard({ item }: Props) {
  const { id, name, price, imageUrl, size, typeSize, brend } = item;

  const dispatch = useDispatch();
  const count = 1;

  const onClickAdd = () => {
    const product = {
      id,
      name,
      price,
      imageUrl,
      size,
      typeSize,
      brend,
      count,
    };
    dispatch(addItem(product));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_image}>
        <img src={item.imageUrl} alt="card_image" />
      </div>
      <div className={styles.description}>
        <span className={styles.size}>
          <img src={iconBotle} alt="botle" /> {item.size}
          {item.typeSize === "weight" ? "г" : "мл"}
        </span>

        <Link to={`product/${item.id}`}>
          <span className={styles.name}>
            <b>{item.brend}</b> <span>{item.name}</span>
          </span>
        </Link>
        <div className={styles.info_wrapper}>
          <span>
            Штрихкод: <b>{item.barcode}</b>
          </span>
          <span>
            Производитель: <b>{item.maker}</b>
          </span>
          <span>
            Бренд: <b>{item.brend}</b>
          </span>
        </div>

        <div className={styles.price_wrapper}>
          <span>{item.price} ₸</span>
          <div onClick={onClickAdd} className={styles.button}>
            <span>В КОРЗИНУ</span>
            <img src={iconsCart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
