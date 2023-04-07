import { createFilterUrl } from "../createFilterSearchParams";
import { Filter } from "../types";

describe("createFilterSearchParams", () => {
  test("Без параметров", () => {
    const filter = {} as Filter;
    const actual = createFilterUrl(filter, "http://asdsada.ru");

    expect(actual.toString()).toBe("http://asdsada.ru/?sortBy=name&order=asc");
  });
  test("Задан sort", () => {
    const filter = {
      sort: "abc",
    } as Filter;
    const actual = createFilterUrl(filter, "http://asdsada.ru");

    expect(actual.toString()).toBe("http://asdsada.ru/?sortBy=abc&order=asc");
  });
  test("Полный запрос", () => {
    const filter = {
      sort: "abc",
      sortOrder: "desc",
      search: "title",
    } as Filter;
    const actual = createFilterUrl(filter, "http://asdsada.ru");

    expect(actual.toString()).toBe(
      "http://asdsada.ru/?sortBy=abc&order=desc&search=title"
    );
  });
});
