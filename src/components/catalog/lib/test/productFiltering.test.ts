import { Filter, Item } from "../types";
import { productFiltering } from "../productFiltering";

const items = [
  {
    maker: "test1",
    price: 100,
  },
  {
    maker: "test2",
    price: 200,
  },
  {
    maker: "test3",
    price: 300,
  },
  {
    maker: "test4",
    price: 400,
  },
] as Item[];

describe("productFiltering", () => {
  test("Цена: в диапозоне", () => {
    const filter = {
      startPrice: 0,
      endPrice: 10000,
    } as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([
      {
        maker: "test1",
        price: 100,
      },
      {
        maker: "test2",
        price: 200,
      },
      {
        maker: "test3",
        price: 300,
      },
      {
        maker: "test4",
        price: 400,
      },
    ]);
  });
  test("Цена: верхняя", () => {
    const filter = {
      endPrice: 300,
    } as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([
      {
        maker: "test1",
        price: 100,
      },
      {
        maker: "test2",
        price: 200,
      },
      {
        maker: "test3",
        price: 300,
      },
    ]);
  });
  test("Цена: начальная", () => {
    const filter = {
      startPrice: 150,
    } as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([
      {
        maker: "test2",
        price: 200,
      },
      {
        maker: "test3",
        price: 300,
      },
      {
        maker: "test4",
        price: 400,
      },
    ]);
  });
  test("Цена: верхняя меньше нижней", () => {
    const filter = {
      startPrice: 150,
      endPrice: 100,
    } as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([]);
  });
  test("Несколько производителей", () => {
    const filter = {
      manufacturers: ["test3", "test1"],
    } as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([
      {
        maker: "test1",
        price: 100,
      },
      {
        maker: "test3",
        price: 300,
      },
    ]);
  });
  test("Пустой", () => {
    const filter = {} as Filter;

    const actual = productFiltering(items, filter);
    expect(actual).toEqual([
      {
        maker: "test1",
        price: 100,
      },
      {
        maker: "test2",
        price: 200,
      },
      {
        maker: "test3",
        price: 300,
      },
      {
        maker: "test4",
        price: 400,
      },
    ]);
  });
});
