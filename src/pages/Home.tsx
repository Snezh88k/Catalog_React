import Sort from "../components/sorting/Sort";
import FilterSettings from "../components/filter_settings/FilterSettings";
import Catalog from "../components/catalog/Catalog";
import Media from "react-media";

import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Media query="(min-width: 781px)" render={() => <Sort />} />
      <div className="wrapper-sort-catalog">
        <Media
          query="(max-width: 780px)"
          render={() => <h1 id="h1-home">КОСМЕТИКА И ГИГИЕНА</h1>}
        />
        <FilterSettings />
        <Media query="(max-width: 780px)" render={() => <Sort />} />
        <Catalog />
      </div>
    </div>
  );
}
