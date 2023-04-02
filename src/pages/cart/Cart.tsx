import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";
import { useState } from "react";

import ProductInCart from "../../components/productInCart/ProductInCart";
import styles from "./cart.module.css";

interface State {
  cart: {
    items: {
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
    }[];
    totalPrice: number;
  };
}

export default function Cart() {
  const { items, totalPrice } = useSelector((state: State) => state.cart);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const onClickOrder = () => {
    if (items.length === 0) {
      return;
    } else {
      dispatch(clearItems());
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isVisible ? (
        <div
          onClick={() => setIsVisible(false)}
          className={styles.modalWindowWrapper}
        >
          <div className={styles.modalWindow}>Спасибо за заказ!</div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.path}>
        <span>Главная</span>
        <span>Корзина</span>
      </div>
      <h1>КОРЗИНА</h1>
      {items.map((item) => (
        <ProductInCart item={item} />
      ))}
      <div className={styles.orderWrapper}>
        <button className={styles.buttonOrder} onClick={onClickOrder}>
          Оформить заказ
        </button>
        <span>{totalPrice} ₸</span>
      </div>
    </div>
  );
}
