import ReactPaginate from "react-paginate";
import { useState } from "react";

import styles from "../catalog/catalog.module.css";

export default function PaginatedItems({ itemsPerPage, items, Items }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" "
        nextLinkClassName={styles.prev}
        previousLinkClassName={styles.next}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" "
        renderOnZeroPageCount={null}
        activeClassName={styles.active_page}
        className={styles.pagination}
      />
    </>
  );
}
