import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("<Home />", () => {
  it("renders without errors", () => {
    render(<Home />);

    expect(screen.getByAltText("background-image")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /background\-image/i,
      })
    ).toBeInTheDocument();
  });
});
