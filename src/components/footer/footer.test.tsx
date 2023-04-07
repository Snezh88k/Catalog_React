import { render } from "@testing-library/react";

import FooterMobile from "./FooterMobile";

describe("Footer", () => {
  test("should create Footer", () => {
    const view = render(<FooterMobile />);

    expect(view).toMatchSnapshot();
  });
});
