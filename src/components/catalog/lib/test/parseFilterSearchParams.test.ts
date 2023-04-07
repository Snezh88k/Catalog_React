import { parseFilterSearchParams } from "../parseFilterSearchParams";

describe("parseFilterSearchParams", () => {
  test("Без параметров", () => {
    const searchParams = new URLSearchParams({});
    const actual = parseFilterSearchParams(searchParams);
    expect(actual).toEqual({
      endPrice: undefined,
      manufacturers: [],
      search: "",
      sort: "",
      sortOrder: "asc",
      startPrice: undefined,
    });
  });
  describe("Цена", () => {
    test("Число больше 0", () => {
      const searchParams = new URLSearchParams({
        startPrice: "100",
        endPrice: "200",
      });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.startPrice).toBe(100);
      expect(actual.endPrice).toBe(200);
    });
    test("Число 0", () => {
      const searchParams = new URLSearchParams({
        startPrice: "0",
        endPrice: "0",
      });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.startPrice).toBe(0);
      expect(actual.endPrice).toBe(0);
    });
    test("Не число", () => {
      const searchParams = new URLSearchParams({
        startPrice: "invalid",
        endPrice: "invalid",
      });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.startPrice).toBe(undefined);
      expect(actual.endPrice).toBe(undefined);
    });
    test("Пустая строка", () => {
      const searchParams = new URLSearchParams({
        startPrice: "",
        endPrice: "",
      });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.startPrice).toBe(undefined);
      expect(actual.endPrice).toBe(undefined);
    });
  });
  describe("Порядок сортировки", () => {
    test("invalid", () => {
      const searchParams = new URLSearchParams({ sortOrder: "invalid" });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.sortOrder).toBe("asc");
    });
    test("asc", () => {
      const searchParams = new URLSearchParams({ sortOrder: "asc" });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.sortOrder).toBe("asc");
    });
    test("desc", () => {
      const searchParams = new URLSearchParams({ sortOrder: "desc" });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.sortOrder).toBe("desc");
    });
  });
  describe("Производители", () => {
    test("Один", () => {
      const searchParams = new URLSearchParams({ manufacturers: "test1" });
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.manufacturers).toEqual(["test1"]);
    });
    test("Несколько", () => {
      const searchParams = new URLSearchParams({});
      searchParams.append("manufacturers", "test1");
      searchParams.append("manufacturers", "test2");
      const actual = parseFilterSearchParams(searchParams);
      expect(actual.manufacturers).toEqual(["test1", "test2"]);
    });
  });
  test("Поисковый запрос и порядок сортировки", () => {
    const searchParams = new URLSearchParams({
      search: "test1",
      sortBy: "someField",
    });
    const actual = parseFilterSearchParams(searchParams);
    expect(actual.search).toBe("test1");
    expect(actual.sort).toBe("someField");
  });
});
