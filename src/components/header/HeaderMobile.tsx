import iconsLocation from "../../img/icons_location.svg";
import iconsMail from "../../img/icons_mail.svg";
import iconsBasket from "../../img/icons_basket.svg";
import logo from "../../img/logo.svg";
import iconsSearchDark from "../../img/icons_search_dark.svg";
import iconsCatalogDark from "../../img/icons_catalog_dark.svg";
import price from "../../img/icons_price.svg";
import tele from "../../img/icons_tele.svg";
import teleCil from "../../img/cil_phone.svg";

import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState } from "react";

interface State {
  totalPrice: number;
  items: string[];
  allCount: number;
}

export default function HeaderMobile() {
  const { allCount } = useSelector((state: { cart: State }) => state.cart);

  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(!isVisible);
    isVisible
      ? (document.body.style.overflowY = "auto")
      : (document.body.style.overflowY = "hidden");
  };

  return (
    <div>
      <div className="topLine">
        <button onClick={openMenu} className={isVisible ? "closeSpan" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="card">
          <Link to="/cart">
            <img id="card-img" src={iconsBasket} alt="icon basket" />
          </Link>
          <span className="allCount">{allCount}</span>
        </div>
      </div>
      <div className="bottomLine">
        <div>
          <img src={iconsCatalogDark} alt="icon" />
          <span>Каталог</span>
        </div>
        <div>
          <img src={iconsSearchDark} alt="icon" />
          <span>Поиск</span>
        </div>
      </div>
      {isVisible ? (
        <div className="burger-menu">
          <div className="contact-info_wrapper">
            <div className="address">
              <img src={iconsLocation} alt="icon_location" />
              <div>
                <span className="main-address">
                  г. Кокчетав, ул. Ж. Ташенова 129Б{" "}
                </span>
                <span className="second-address ">(Рынок Восточный)</span>
              </div>
            </div>
            <div className="mail">
              <img src={iconsMail} alt="icon_location" />
              <span>
                <b>opt.sultan@mail.ru </b> <br />
                <span>На связи в любое время</span>
              </span>
            </div>
            <div className="order-call">
              <img src={teleCil} alt="tel" />
              <div>
                <span>
                  <b>Отдел продаж</b>
                </span>
                <span>+7 (777) 490-00-91</span>
                <span style={{ display: "block", width: "153px" }}>
                  время работы: 9:00-20:00
                </span>
              </div>
            </div>
            <div className="order-call_mob">
              <span>
                <img src={tele} alt="call" />
              </span>
              <span>Заказать звонок</span>
            </div>
          </div>
          <div className="menu_wrapper">
            <h2>Меню сайта:</h2>
            <span>О компании</span>
            <span>Доставка и оплата</span>
            <span>Возврат</span>
            <span>Контакты</span>
            <div className="button-price">
              <span>Прайс-лист</span>
              <img src={price} alt="price list" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
