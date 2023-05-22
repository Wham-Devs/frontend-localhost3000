import { render, screen } from "@testing-library/react";
import SignUp from "../components/SignUp";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp/>", () => {
  it("renders for the user", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /concert go/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /register/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /read more/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/find your next venue/i)).toBeInTheDocument();
  });
});
