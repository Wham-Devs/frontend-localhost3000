import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("<Home />", () => {
  it("renders without errors", () => {
    render(<Home />);
    expect(screen.getByAltText("landing page bg")).toBeInTheDocument();
  });
});
