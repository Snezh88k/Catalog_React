import React from "react";
import Sort from "../components/sorting/Sort";
import SortBar from "../components/sortBar/SortBar";
import Catalog from "../components/catalog/Catalog";

import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Sort />
      <div className="wrapper-sort-catalog">
        <SortBar />
        <Catalog />
      </div>
    </div>
  );
}
