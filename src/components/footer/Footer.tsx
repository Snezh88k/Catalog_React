import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import Media from "react-media";

import logo from "../../img/logoFooter.svg";
import vector from "../../img/Vector.svg";
import price from "../../img/icons_price.svg";
import telegram from "../../img/telegram.png";
import whats from "../../img/whats.png";
import visa from "../../img/Visa.png";
import master from "../../img/master.png";

export default function Footer() {
  return (
    <div>
      <Media
        query="(max-width: 770px)"
        render={() => (
          <div className={styles.footer}>
            <div className={styles.container}>
              <div className={styles.logoWrapper}>
                <img src={logo} alt="logo" />{" "}
                <div className={styles.buttonPrice}>
                  <span>Прайс-лист</span>
                  <img src={price} alt="price list" />
                </div>
              </div>
              <p>
                Компания «Султан» — снабжаем розничные магазины товарами "под
                ключ" в Кокчетаве и Акмолинской области
              </p>
              <span className={styles.subscribe}>
                Подпишись на скидки и акции
              </span>
              <div className={styles.inputWrapper}>
                <input type="text" placeholder="Введите ваш E-mail" />
                <span>
                  <img src={vector} alt="icons search" />
                </span>
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.secondColumn}>
                  <h2>Меню сайта:</h2>
                  <span>О компании</span>
                  <span>Доставка и оплата</span>
                  <span>Возврат</span>
                  <span>Контакты</span>
                </div>
                <div className={styles.thirdColumn}>
                  <h2>Категории:</h2>
                  <span>Бытовая химия</span>
                  <span>Косметика и гигиена</span>
                  <span>Товары для дома</span>
                  <span>Товары для детей и мам</span>
                  <span>Посуда</span>
                </div>
                <div className={styles.lastColumn}>
                  <h2>Контакты</h2>
                  <span className={styles.tel}>+7 (777) 490-00-91</span>
                  <span className={styles.timeWork}>
                    время работы: 9:00-20:00
                  </span>
                  <span>Заказать звонок</span>
                  <span>opt.sultan@mail.ru</span>
                  <span>На связи в любое время</span>
                  <div>
                    <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                  </div>
                </div>

                <div className={styles.conectWrapper}>
                  <span>Связь в мессендежрах:</span>
                  <div>
                    {" "}
                    <img src={telegram} alt="telegram" />
                    <img src={whats} alt="whats" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
      <Media
        query="(min-width: 771px)"
        render={() => (
          <div className={styles.footer}>
            <div className={styles.container}>
              <div className={styles.firstColumn}>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <p>
                  Компания «Султан» — снабжаем розничные магазины товарами "под
                  ключ" в Кокчетаве и Акмолинской области
                </p>
                <span>Подпишись на скидки и акции</span>
                <div className={styles.inputWrapper}>
                  <input type="text" placeholder="Введите ваш E-mail" />
                  <span>
                    <img src={vector} alt="icons search" />
                  </span>
                </div>
              </div>
              <div className={styles.secondColumn}>
                <h2>Меню сайта:</h2>
                <span>О компании</span>
                <span>Доставка и оплата</span>
                <span>Возврат</span>
                <span>Контакты</span>
              </div>
              <div className={styles.thirdColumn}>
                <h2>Категории:</h2>
                <span>Бытовая химия</span>
                <span>Косметика и гигиена</span>
                <span>Товары для дома</span>
                <span>Товары для детей и мам</span>
                <span>Посуда</span>
              </div>
              <div className={styles.fourthColumn}>
                <h2>Скачать прайс-лист:</h2>
                <div className={styles.buttonPrice}>
                  <span>Прайс-лист</span>
                  <img src={price} alt="price list" />
                </div>
                <div className={styles.connectWrapper}>
                  {" "}
                  <span>Связь в мессендежрах:</span>
                  <div>
                    {" "}
                    <img src={telegram} alt="telegram" />
                    <img src={whats} alt="whats" />
                  </div>
                </div>
              </div>

              <div className={styles.lastColumn}>
                <h2>Контакты</h2>
                <span className={styles.tel}>+7 (777) 490-00-91</span>
                <span className={styles.timeWork}>
                  время работы: 9:00-20:00
                </span>
                <span>Заказать звонок</span>
                <span>opt.sultan@mail.ru</span>
                <span>На связи в любое время</span>
                <div>
                  <img src={visa} alt="visa" />
                  <img src={master} alt="master" />
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
