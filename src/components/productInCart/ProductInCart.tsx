import React from "react";
import { addItem, removeItem, minusItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

import styles from "./productInCart.module.css";
import iconBotle from "../../img/icons_botle.svg";
import iconDelete from "../../img/icons_delete.svg";

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
    count: number;
  };
}

export default function ProductInCart({ item }: Props) {
  const { id, name, price, imageUrl, count, size, typeSize, brend } = item;
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const product = {
      id,
      name,
      price,
      imageUrl,
      count: +1,
      size,
      typeSize,
      brend,
    };
    console.log(product, "В карзине ");
    dispatch(addItem(product));
  };

  const onClickMinus = () => {
    if (count === 1) {
      onClickRemove();
    } else {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.productImg} src={imageUrl} alt={item.name} />
      <div className={styles.description}>
        <div>
          <img src={iconBotle} alt="botle" /> {item.size}
          {item.typeSize === "weight" ? "г" : "мл"}
        </div>

        <span>
          {item.brend} {item.name}
        </span>
      </div>

      <div className={styles.byeBlock}>
        <button onClick={onClickMinus}>-</button>
        <span>{count}</span>
        <button onClick={onClickAdd}>+</button>
      </div>

      <div className={styles.price}>{item.price * item.count} ₸</div>

      <button className={styles.buttonDelete} onClick={onClickRemove}>
        <img src={iconDelete} alt="del" />
      </button>
    </div>
  );
}
